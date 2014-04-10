/**
 * ReloadPosts
 * ===========
 *
 * Ermöglicht das nachladen von Posts im Hintergrund. Bietet außerdem
 * Methoden um das Favicon zu verändern oder die neuen Posts einzufärben.
 *
 * @param _options          {Options}
 * @param _ignoreUser       {IgnoreUser}
 * @param _editPosts        {EditPosts}
 * @param _notes            {Notes}
 * @param _miscellaneous    {Miscellaneous}
 * @constructor
 */

function ReloadPosts(_options, _ignoreUser, _editPosts, _notes, _miscellaneous) {
    var _postcount = 0;
    var _finishedPages = 0;
    var _currentPage = 1;
    var _oldLimit = 0;
    var _oldJumpLimit = 0;
    var _threadlink = '';
    var _oldTitle = '';
    var _$postTableElm = null;
    var _$titleElm = null;
    var _$headElm = null;
    var _$jumpToChkElm = null;
    var _unseenPosts = [];
    var _markPostColor = {
        hex: '#EEEEEE',
        rgb: 'rgb(238, 238, 238)'
    };

    /**
     * Bereitet das Nachladen vor.
     */
    this.init = function () {
        _$postTableElm = $('table.elf.forum.p2.bogray2');
        _$titleElm = $('title');
        _$headElm = $('head');
        _oldTitle = _$titleElm.text();

        _readCurrentPage();
        _readThreadLink();
        _readPostcount();
        _setMarkPostColor();
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

    this.setPostcount = function (postcount) {
        _postcount = postcount;
    };

    /**
     * Lädt die neuen Posts nach und führt anschließend eine ganze Reihe
     * an Funktionen aus (Favicon anpassen, Markieren der Posts, ...)
     */
    this.readNewPosts = function () {
        if (_isLastpage()) {
            // Seiten endlos erweitern
            if (_options.getOption('middleColumn_forum_reloadPosts_endlessPage') == 'checked') {
                _prepareEndlessPage();
            }

            // Der eigentliche Reload
            $.ajax({
                type: 'POST',
                async: true,
                cache: false,
                url: _threadlink + '&pagenum=' + _currentPage,
                contentType: 'text/html; charset=iso-8859-1;',
                dataType: 'html',
                success: function (data) {
                    var posts = data.match(/\<tr class=\"post\_[^"]+\"\>[^]+?\<\/tr\>/g);
                    if (posts != null) {
                        var footer = data.match(/\<tr class=\"cellheadercolor footer\_[^"]+\"\>[^]+?\<\/tr\>/g);
                        var oldPosts = (25 * _finishedPages);
                        var postNumber = posts.length + oldPosts;
                        var i = _postcount;

                        for (i; i < postNumber; i++) {
                            _$postTableElm.append(posts[i - oldPosts]);
                            _$postTableElm.append(footer[i - oldPosts]);

                            _unseenPosts.push(parseInt($('[class^=post_]:last').offset().top, 10));  // Zum markieren der neuen Posts
                            _postcount++;
                        }

                        _oldLimit = window.pageYOffset + (window.innerHeight * 0.55);

                        // Beiträge aus den neuen Posts ignorieren
                        if (_options.getOption('miscellaneous_ignoreUser') == 'checked') {
                            _ignoreUser.ignore(true, false, false);
                        }

                        // Edit vorbereiten
                        if (_options.getOption('middleColumn_forum_editPost') == 'checked') {
                            _editPosts.initializeEvent();
                        }

                        // Notzizen einblenden
                        if (_options.getOption('miscellaneous_note') == 'checked') {
                            _notes.init(false);
                        }

                        // Youtubeplayer ersetzen
                        if (_options.getOption('miscellaneous_convertYoutube') == 'checked') {
                            _miscellaneous.convertYoutube();
                        }

                        // Ungelesene Posts makieren
                        if (_options.getOption('middleColumn_forum_reloadPosts_markNewPosts') === 'checked') {
                            _markNewPosts();
                        }
                    }
                },
                beforeSend: function (jqXHR) {
                    jqXHR.overrideMimeType('text/html;charset=iso-8859-1');
                }
            });

            // Rausfinden ob eine neue Seite existiert
            if (_options.getOption('middleColumn_forum_reloadPosts_endlessPage') != 'checked') {
                _checkForNewPage();
            }
        }
    };

    /**
     * Entfernt die Markierung und bereits gelesenen Posts.
     */
    this.unmarkNewPosts = function () {
        var i = 0;
        var limit = window.pageYOffset + (window.innerHeight * 0.55);
        var deleteArray = [];

        $(_unseenPosts).each(function (index, value) {
            // Nur demarkieren, wenn wir das Limit überschritten und uns bewegt / gescrollt haben
            if (value < limit && limit != _oldLimit) {
                $('[class^=post_]:eq(' + (_postcount - (_unseenPosts.length) + i) + ')').css('background-color', '#FFF');
                i++;
                deleteArray.push(index);
            }
        });

        // Unmarkierte / Gelesene Posts aus dem Array entfernen
        $(deleteArray).each(function (index, value) {
            _unseenPosts.splice(value, 1);
        });
    };

    /**
     * Zeigt die Anzahl der neuen Posts im Titel / Tab an.
     */
    this.showNewPostsTitle = function () {
        var title   = _oldTitle;
        var $elm    = $('title');

        if (_unseenPosts.length) {
            title = '(' + _unseenPosts.length + ') ' + title;
        }

        if ($elm.text() !== title) {
            $elm.remove();
            $('head').append('<title>' + title + '</title>');
        }
    };

    /**
     * Tauscht das Favicon falls ein ungelesener Post existiert
     */
    this.changeFavicon = function () {
        var favIconElm = _$headElm.find('link[rel="shortcut icon"]');
        var currentIcon = favIconElm.attr('href');

        if (_unseenPosts.length > 0 && currentIcon == '/favicon.ico') {
            favIconElm.remove();
            _$headElm.append('<link rel="shortcut icon" type="image/png" href="http://readmore.thextor.de/userscript/img/favicon.png">');
        }
        else {
            if (_unseenPosts.length == 0 && currentIcon == 'http://readmore.thextor.de/userscript/img/favicon.png') {
                favIconElm.remove();
                _$headElm.append('<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">');
            }
        }
    };

    /**
     * Springt automatisch zu neuen Posts.
     */
    this.jumpToNewPosts = function () {
        if (_$jumpToChkElm === null) {
            $('a.bookmark').after('<input style="margin-left: 2px;" type="checkbox" id="userscript_enable_jump" name="userscript_enable_jump">');
            _$jumpToChkElm = $('#userscript_enable_jump');
        }
        else{
            if (_unseenPosts.length > 0) {
                if (_$jumpToChkElm.prop('checked')) {
                    var jumpto = _unseenPosts[0] - (window.innerHeight * 0.55) + 25;
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
        var hexColor = _options.getOption('middleColumn_forum_reloadPosts_markPostColor') | [];

        // Nur wenn eine HEX-Zahl eingegeben wurde
        if (hexColor[0] === '#' && hexColor === 7) {
            _markPostColor.hex = hexColor;
            _markPostColor.rgb = "rgb(" + parseInt(_markPostColor.hex.substr(1, 2), 16).toString() + ", " + parseInt(_markPostColor.hex.substr(3, 2), 16).toString() + ", " + parseInt(_markPostColor.hex.substr(5, 2), 16).toString() + ")";
        }
    };

    /**
     * Markiert ungelesene Posts.
     * @private
     */
    var _markNewPosts = function () {
        var numberOfNewPosts = _unseenPosts.length;
        var i = 1;

        for (i; i <= numberOfNewPosts; i++) {
            var $elm = $('[class^=post_]:eq(' + (_postcount - i) + ')');

            // Überprüfen ob der Posts bereits markiert ist, wenn ja die Schleife verlassen
            if ($.trim(($elm.css('background-color'))) == _markPostColor.rgb) {
                break;
            }
            $elm.css('background-color', _markPostColor.rgb);
        }
    };

    /**
     * Liest die aktuelle Anzahl der Posts auf der aktuellen
     * Seite aus.
     * @private
     */
    var _readPostcount = function () {
        _postcount = $('[class^=post_]').length;
    };

    /**
     * Prüft ob wir uns auf der letzten Seite eines Threads befinden.
     * @returns {boolean}
     * @private
     */
    var _isLastpage = function () {
        var lastPage = false;
        var html = $.trim($('div.floatl.m2.elf').html());

        if (html.substr(html.length - 4) === '</b>') {
            lastPage = true;
        }

        return lastPage;
    };

    /**
     * Ermöglicht das endlose Nachladen auf einer Seite.
     * @private
     */
    var _prepareEndlessPage = function () {
        if (_postcount == (25 + (25 * _finishedPages))) {
            _finishedPages++;
            _currentPage++;
        }
    };

    /**
     * Liest die aktuelle Seitenzahl aus.
     * @private
     */
    var _readCurrentPage = function () {
        _currentPage = parseInt($('div.floatl.m2.elf').html().match(/<b>(.+?)<\/b>/)[1], 10);
    };

    /**
     * Liest den Link der aktuellen Seite ohne Seitenzahl aus.
     * @private
     */
    var _readThreadLink = function () {
        _threadlink = $(location).attr('href').replace(/\&pagenum=.+$/, '');
    };

    /**
     * Prüft ob eine neue Seite verfügbar und und blendet ggf.
     * eine Meldung ein.
     * @private
     */
    var _checkForNewPage = function () {
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
                            $('table.elf.forum.p2:last').after('<br/><div id="userscriptNewPage" style="width:520px; height: 23px; background-color: #2B91FF; text-align: right; vertical-align:middle; display:table-cell"><a style="color: #fff; font-weight: bold; padding-right: 10px;" href="' + _threadlink + '&pagenum=' + (_currentPage + 1) + '">Zur n&auml;chsten Seite</a></div>');
                        }
                    },
                    beforeSend: function (jqXHR) {
                        jqXHR.overrideMimeType('text/html;charset=iso-8859-1');
                    }
                });
            }
        }
    };
}