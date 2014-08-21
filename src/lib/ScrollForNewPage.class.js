/**
 * ScrollForNewPage
 * ================
 *
 * Beim Runterscrollen werden neue Seiten nachgeladen und angezeigt.
 */

function ScrollForNewPage($, _options, _content, _ignoreUser, _userNicknames){
    var _currentPage    = 0,
        _postCount      = 0,
        _threadlink     = '',
        _currentlyLoading   = false,
        _lastPage           = false,
        _$postInsertElement = null;

    this.init = function(){
        if (_options.getOption('middleColumn_forum_hideForum_editboxTop')){
            _moveTextareaTop();
        }

        _readPostcount();

        // 25 Posts geladen, es könnte also eine neue Seite geben
        if (_postCount === 25){

            _readThreadLink();
            _readCurrentPage();
            var $insertElement  = $('div.pagination:last');
            _$postInsertElement = $insertElement.length ? $insertElement : $('div.forum_thread_reply:last');

            setInterval(function() {
                if (!_lastPage && !_currentlyLoading && (_postCount % 25 === 0)){
                    if ((window.pageYOffset + $(window).height()) >= (document.body.offsetHeight - 400)){
                        _readNextPage();
                    }
                }
            }, 1000);
        }
    };

    /**
     * Auslesen wie viele Posts existieren
     * @private
     */
    var _readPostcount = function(){
        _postCount += Number(_content.get('forumPosts').length);
    };

    /**
     * Liest die aktuelle Seitenzahl aus.
     * @private
     */
    var _readCurrentPage = function (){
        var pageText = $('div.pagination li.active').first().find('a').text();
        // Empty String = Seite 1. Keine Page navigation vorhanden.
        _currentPage = pageText !== '' ? +pageText : 1;
    };

    var _readNextPage = function(){
        _currentlyLoading = true;

        $.get(_threadlink + '&page=' + (_currentPage + 1))
            .success(function(data){
                var $parsedData = $($.parseHTML(data));

                // Da Readmore nun bei zu hoher Page Nummer einfach die letzte Seite anzeigt,
                // muss überprüft werden ob der angegebene &page-Parameter mit der Seite übereinstimmt
                var pageNum = +$parsedData.find('div.pagination li.active').first().find('a').text();
                if (pageNum && pageNum !== (_currentPage + 1)){
                    _lastPage = true;
                    return false;
                }


                var posts = _content.get('forumPosts', $parsedData);
                if (!posts.length){
                    _lastPage = true;
                }
                else{
                    _currentPage++;
                    _$postInsertElement.before(posts);
                    _readPostcount();

                    // User Ignorieren
                    if (_options.getOption('miscellaneous_ignoreUser')){
                      _ignoreUser.ignore();
                    }

                    // Nickname History Link
                    if (_options.getOption('miscellaneous_nicknameHistoryLink')){
                        _userNicknames.insertLink();
                    }
                }
            })
            .always(function(){
                _currentlyLoading = false;
            });
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
     * Verschiebt die Textarea zum Posten nach oben auf die Seite.
     * @private
     */
    var _moveTextareaTop = function(){
        var $contentElement = $('#c_content'),
            $textElement    = $contentElement.find('.forum_thread_reply:first'),
            $firstpostElement   = $contentElement.find('.forum_post:first'),
            positionTop         = false;

        $('#c_content h1:first').append('<i id="moveTextareaTopTrigger">Postbox verschieben</i>');

        $('#moveTextareaTopTrigger').on('click', function(){
            if (positionTop)    $contentElement.append($textElement);
            else                $firstpostElement.before($textElement);

            positionTop = !positionTop;
        });
    };
};