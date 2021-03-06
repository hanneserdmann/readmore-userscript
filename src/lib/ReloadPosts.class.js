/**
 * ReloadPosts
 * ===========
 *
 * Ermöglicht das nachladen von Posts im Hintergrund. Bietet außerdem
 * Methoden um das Favicon zu verändern oder die neuen Posts einzufärben.
 *
 * @param _options      {Options}
 * @param _content      {Content}
 * @constructor
 */

function ReloadPosts($, _options, _content, _ignoreUser, _userNicknames) {
    var _postcount      = 0;
    var _finishedPages  = 0;
    var _currentPage    = 1;
    var _oldLimit       = 0;
    var _oldJumpLimit   = 0;

    var _threadlink     = '';
    var _oldTitle       = '';

    var _$postInsertElement = null;
    var _$headElm           = null;
    var _$contentElm        = null;
    var _$jumpToChkElm      = null;

    var _favIcons       = [];
    var _unseenPosts    = [];
    var _markPostColor  = {
        hex: '#EEEEEE',
        rgb: 'rgb(238, 238, 238)'
    };

    /**
     * Bereitet das Nachladen vor.
     * @param enableIntervall {boolean}
     */
    this.init = function (enableIntervall) {
        enableIntervall = (typeof enableIntervall === 'undefined' ? true : enableIntervall);

        var $insertElement  = $('div.pagination:last');
        _$postInsertElement = $insertElement.length ? $insertElement : $('div.forum_thread_reply:last');

        _$headElm       = $('head');
        _$contentElm    = $('#c_content');
        _oldTitle       = document.title;

        _readCurrentPage();
        _readThreadLink();
        _readPostcount();
        _setMarkPostColor();

        if (enableIntervall){
            setInterval(function() {
                _readNewPosts();
            }, (parseInt(_options.getOption('middleColumn_forum_reloadPosts_timeToWait'), 10) > 2) ? parseInt(_options.getOption('middleColumn_forum_reloadPosts_timeToWait'), 10) * 1000 : 3000);

            if (_options.getOption('middleColumn_forum_reloadPosts_jumpToNewPosts') && _options.getOption('middleColumn_forum_reloadPosts_endlessPage')) {
                if (_isLastpage()){
                    _jumpToNewPosts();

                    setInterval(function () {
                        _jumpToNewPosts();
                    }, (parseInt(_options.getOption('middleColumn_forum_reloadPosts_jumpToNewPosts_waitUntilNextJump'), 10) > 1 ? parseInt(_options.getOption('middleColumn_forum_reloadPosts_jumpToNewPosts_waitUntilNextJump'), 10) : 1) * 1000);
                }
            }
        }
    };

    /**
     * Gibt den Postcount zurück
     * @returns {number}
     */
    this.getPostcount = function () {
        return _postcount;
    };

    this.getThreadlink = function () {
        return _threadlink;
    };

    this.getCurrentPage = function(){
        return _currentPage;
    };

    this.setCurrentPage = function(page){
        _currentPage = page;
    };

    this.setPostcount = function (postcount) {
        _postcount = postcount;
    };

    /**
     * Wird von der PostWithoutReload Klasse genutzt,
     * falls möglich sonst vermeiden!
     */
    this.readPosts = function(){
        _readNewPosts();
    };

    /**
     * Lädt die neuen Posts nach und führt anschließend eine ganze Reihe
     * an Funktionen aus (Favicon anpassen, Markieren der Posts, ...)
     */
    var _readNewPosts = function () {
        if (_isLastpage()) {
            // Seiten endlos erweitern
            if (_options.getOption('middleColumn_forum_reloadPosts_endlessPage')) {
                _prepareEndlessPage();
            }

            // Der eigentliche Reload
            $.ajax({
                type: 'POST',
                async: true,
                cache: false,
                url: _threadlink + '&page=' + _currentPage,
                contentType: 'text/html; charset=UTF-8;',
                dataType: 'html',
                success: function (data) {

                    var $parsedData = $($.parseHTML(data));

                    // Da Readmore nun bei zu hoher Page Nummer einfach die letzte Seite anzeigt,
                    // muss überprüft werden ob der angegebene &page-Parameter mit der Seite übereinstimmt
                    if (_currentPage !== 1){
                        var pageNum = +$parsedData.find('div.pagination li.active').first().find('a').text();
                        if (pageNum && pageNum !== _currentPage){
                            return false;
                        }
                    }

                    var posts = _content.get('forumPosts', $parsedData);

                    if (posts.length) {
                        var oldPosts = (25 * _finishedPages);
                        var postNumber = posts.length + oldPosts;
                        var i = _postcount;

                        for (i; i < postNumber; i++) {
                            posts[i - oldPosts] = $(posts[i - oldPosts]);
                            _$postInsertElement.before(posts[i - oldPosts]);

                            var unseenPostData = {
                                element:    posts[i - oldPosts],
                                offset:     parseInt(posts[i - oldPosts].offset().top, 10),
                                marked:     false
                            };

                            _unseenPosts.push(unseenPostData);  // Zum markieren der neuen Posts
                            _postcount++;
                        }

                        _oldLimit = (window.pageYOffset + $(window).height());

                        // Ungelesene Posts makieren
                        if (_options.getOption('middleColumn_forum_reloadPosts_markNewPosts')) {
                            _markNewPosts();
                        }

                        // User Ignorieren
                        if (_options.getOption('miscellaneous_ignoreUser')){
                            _ignoreUser.ignore();
                        }

                        // Nickname History Link
                        if (_options.getOption('miscellaneous_nicknameHistoryLink')){
                            _userNicknames.insertLink();
                        }
                    }
                }
            });

            // Rausfinden ob eine neue Seite existiert
    /*        if (_options.getOption('middleColumn_forum_reloadPosts_endlessPage') != 'checked') {
                _checkForNewPage();
            }
     */   }
    };

    /**
     * Entfernt die Markierung und bereits gelesenen Posts.
     */
    this.unmarkNewPosts = function () {
        var limit           = (window.pageYOffset + $(window).height());
        var removeElements  = 0;

        // Nur wenn nach unten gescrollt wurde
        if (limit != _oldLimit){
            $.each(_unseenPosts, function(i, post){
                if (!post.marked || post.offset > limit){
                    return false;
                }

                post.element.css('background-color', '');
                removeElements++
            });

            if (removeElements){
                _unseenPosts.splice(0, removeElements);
            }
        }
    };

    /**
     * Zeigt die Anzahl der neuen Posts im Titel / Tab an.
     */
    this.showNewPostsTitle = function () {

        var tempTitle = _oldTitle;

        if (_unseenPosts.length) {
            tempTitle = '(' + _unseenPosts.length + ') ' + tempTitle;
        }

        if (document.title !== tempTitle) {
            document.title = tempTitle;
        }
    };

    /**
     * Tauscht das Favicon falls ein ungelesener Post existiert
     */
    this.changeFavicon = function () {
        if (!_favIcons.length){
            _favIcons = $('link[rel="shortcut icon"], link[rel="icon"]');
            _favIcons.addClass('noNewPosts');
        }



        if (_unseenPosts.length > 0 && _favIcons.hasClass('noNewPosts')){
            _favIcons.remove();

            _favIcons
                .attr('href', 'data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB/ElEQVQ4y62STWtTQRSGnzMz9zZprLW4s+BKiFSDS/e6EBT8gJa46l7X7tSNXfoD/AeKdlEQWtxI8QMEoYgW7EJIoyBNSEsbuM29N5OZcRETbaMrPcvDnGde3veFfxw5vHj5saUbyX417djZTpqd9EFRiqVxfGpiabKoHl88N53+FbD87kulvsNiR/JyJ1EcixQKwSpL1ykmS4Vv01N2/ur58qsRwMrbemWj1X6j9NHJNGsTj4NOI3KxaKO5c+3sQekiMgSsrn/Vte/Zp700mhnLE25XK/1HzuF0AAy6f9W/DoHVja2JCzMnEgVQ392v1ppuZnO7zU5ucYDFkmuNxhPcqHm1ZnoLwAC8/tC80Wo0USZmy1uUP41hDMSCjzGSAsUDgPfr9SvAQwWwndhTOggiGbuuh1PjEDRIxPV7z8hUcURBay8tAyiA0E1cLxac1UyIJ/IQdIon4ERR8L0RgHW5HgK8d5vBQ1AFuqEEAhJilBNyU+DS3Sd/6tDnIQBYQoSgujid/MxJYzUUQkYkY0P3CYH+p375d8DTATFSEZCBBfFdrLXEpjgI/1eU8GgIWFmYc8BNoO2CpisGIo+RmCPGkHfSEf0rC3PJSJUv31+sgCwSfFmJIbhAEA8Klh/MHijSoInqEHUdwhlE5j3uedB+DcUa8OKwB/9tfgDWu9z+ndeArQAAAABJRU5ErkJggg==')
                .attr('type', 'image/png')
                .removeClass('noNewPosts')
                .addClass('newPosts');

            _$headElm.append(_favIcons);
        }
        else {
            if (_unseenPosts.length == 0 && _favIcons.hasClass('newPosts')) {
                _favIcons.remove();

                _favIcons
                    .attr('href', '//cdn1.readmore.de/img/themes/readmore/favicon.ico')
                    .attr('type', 'image/vnd.microsoft.icon')
                    .removeClass('newPosts')
                    .addClass('noNewPosts');

                _$headElm.append(_favIcons);
            }
        }
    };

    /**
     * Springt automatisch zu neuen Posts.
     */
    _jumpToNewPosts = function () {
        if (_$jumpToChkElm === null) {
            $('#c_content>ul.breadcrumbs').append('<li style="float: right">Jump <input style="margin-left: 2px;" type="checkbox" id="userscript_enable_jump" name="userscript_enable_jump"></li>');
            _$jumpToChkElm = $('#userscript_enable_jump');
        }
        else{
            if (_unseenPosts.length > 0) {
                if (_$jumpToChkElm.prop('checked')) {
                    var jumpto = _unseenPosts[0]['offset'] - (window.innerHeight * 0.60) + 25;
                    if (jumpto <= _oldJumpLimit) {
                        jumpto = _oldJumpLimit + 25;
                    }

                    _oldJumpLimit = jumpto;
                    window.scrollTo(0, jumpto);
                }
            }
        }
    };

    /**
     * Überschreibt die Farbe für die Markierung der Posts.
     * Wenn ein valider Hexwert in den Optionen angegeben ist.
     * @private
     */
    var _setMarkPostColor = function () {
        var hexColor = _options.getOption('middleColumn_forum_reloadPosts_markPostColor');

        if (typeof hexColor === 'undefined' || hexColor === null){
            hexColor = '';
        }

        // Nur wenn eine HEX-Zahl eingegeben wurde
        if (hexColor[0] === '#' && hexColor.length === 7) {
            _markPostColor.hex = hexColor;
            _markPostColor.rgb = "rgb(" + parseInt(_markPostColor.hex.substr(1, 2), 16).toString() + ", " + parseInt(_markPostColor.hex.substr(3, 2), 16).toString() + ", " + parseInt(_markPostColor.hex.substr(5, 2), 16).toString() + ")";
        }
    };

    /**
     * Markiert ungelesene Posts.
     * @private
     */
    var _markNewPosts = function () {
        $.each(_unseenPosts, function(i, post){
            if (!post.marked){
                post.marked = true;
                post.element.css('background-color', _markPostColor.rgb);
            }
        });
    };

    /**
     * Liest die aktuelle Anzahl der Posts auf der aktuellen
     * Seite aus.
     * @private
     */
    var _readPostcount = function () {
        _postcount = _content.get('forumPosts').length;
    };

    /**
     * Prüft ob wir uns auf der letzten Seite eines Threads befinden.
     * @returns {boolean}
     * @private
     */
    var _isLastpage = function () {
        var lastLi      = $('div.pagination:first>ul>li').last();

        // Wenn keine Navigation da ist true (es gibt nur eine Seite)
        return lastLi.length ? lastLi.hasClass('active') : true;
    };

    /**
     * Ermöglicht das endlose Nachladen auf einer Seite.
     * @private
     */
    var _prepareEndlessPage = function () {
        if (+_postcount === (25 + (25 * _finishedPages))) {
            _finishedPages++;
            _currentPage++;
        }
    };

    /**
     * Liest die aktuelle Seitenzahl aus.
     * @private
     */
    var _readCurrentPage = function () {
        var pageText = $('div.pagination li.active').first().find('a').text();
        // Empty String = Seite 1. Keine Page navigation vorhanden.
        _currentPage = pageText !== '' ? +pageText : 1;
    };

    /**
     * Liest den Link der aktuellen Seite ohne Seitenzahl aus.
     * @private
     */
    var _readThreadLink = function () {
        _threadlink = document.location.href
                        .replace(/&page=([\d]+|last)/, '')
                        .replace(/#p[\d]+/, '')
                        .replace(/#plast/, '');
    };

    /**
     * Prüft ob eine neue Seite verfügbar und und blendet ggf.
     * eine Meldung ein.
     * @private
     */
 /*   var _checkForNewPage = function () {
        if (_options.getOption('middleColumn_forum_reloadPosts_checkForNewPage') == 'checked') {
            if (_postcount === (25 + (25 * _finishedPages)) && $('#userscriptNewPage').length < 1) {
                $.ajax({
                    type: 'POST',
                    async: true,
                    cache: false,
                    url: _threadlink + '&pagenum=' + (_currentPage + 1),
                    contentType: 'text/html; charset=iso-8859-1;',
                    dataType: 'html',
                    success: function (data) {
                        var posts = data.match(/\<tr class=\"post\_[^"]+\"\>[^]+?\<\/tr\>/g);
                        if (posts != null) {
                            $('table.elf.forum.p2:last').after('<br/><div id="userscriptNewPage" style="width:520px; height: 23px; background-color: #2B91FF; text-align: right; vertical-align:middle; display:table-cell"><a style="color: #fff; font-weight: bold; padding-right: 10px;" href="' + _threadlink + '&pagenum=' + (_currentPage + 1) + '">Zur nächsten Seite</a></div>');
                        }
                    },
                    beforeSend: function (jqXHR) {
                        jqXHR.overrideMimeType('text/html;charset=iso-8859-1');
                    }
                });
            }
        }
    };
*/
}