function ForumFavorites($, _options, _content){
    var _self = this;

    var OPTIONS_NAME = 'forumFavoritesData';
    var ICON_FAVORITE = 'rmus-icon-star';
    var ICON_NOT_FAVORITE = 'rmus-icon-star-empty';

    var _threadId = 0;
    var _favorites = _options.getData(OPTIONS_NAME);
    var _itag = null;
    var _loadingElement = null;
    var _loadingTextElement = null;
    var _lastpostChanged = [];

    /**
     * Bereitet das Icon im Thread vor
     */
    this.initThread = function(){
        _threadId   = Number(document.location.pathname.match(/(\d+)-[^/]*?$/)[1]);

        if (typeof _favorites === 'undefined' || _favorites === null){
            _favorites = {};
            _saveFavorites();
        }

        _itag = document.createElement('i');
        _itag.id = 'userscriptForumFavorites';
        _changeITag();

        $('#c_content h1:first')
            .append(_itag)
            .find('#' + _itag.id)
            .on('click', function(){

                // _favorites auf den aktuellen stand bringen
                // Daten aus dem Localstorage auslesen
                var options = JSON.parse(_options.getOptionsRaw());
                _favorites = options['dataStorage'][OPTIONS_NAME];

                if (typeof _favorites[_threadId] === 'undefined')
                    _favorites[_threadId] = _getThreadInfo();
                else
                    _favorites[_threadId] = undefined;

                _changeITag();
                _saveFavorites();
            });
    };

    /**
     * Zeigt die Favoriten in der Forennavigation an
     */
    this.initForumNavi = function(){
        // Überschrift zusammenbauen
        var header = document.createElement('div'),
            headerSpan = document.createElement('span'),
            headerSpanA = document.createElement('a'),
            headerSpanRefresh = document.createElement('span'),
            headerSpanRefreshI = document.createElement('i');

        header.className = 'headlines_cat';
        headerSpanA.innerHTML = 'Favoriten';
        headerSpanA.src = '#';
        headerSpan.appendChild(headerSpanA);

        // Refresh Button
        headerSpanRefresh.style.float = 'right';
        headerSpanRefreshI.id = 'userscript_realoadFavoritesButton';
        headerSpanRefreshI.title = 'Favoriten aktualisieren';
        headerSpanRefreshI.className = 'rmus-icon rmus-icon-arrows-cw';
        headerSpanRefresh.appendChild(headerSpanRefreshI);

        header.appendChild(headerSpan);
        header.appendChild(headerSpanRefresh);
        _content.get('forumNavigation').append(header);

        // Einträge zusammensetzen
        _content.get('forumNavigation').append( _generateEntries());

        _addRefreshEvent();
    };

    var _generateEntries = function(){
        var ul = document.createElement('ul');
        ul.id = 'userscriptFavoriten';

        $.each(_getFavoritesArrayInOrder(), function(index, threadInfo){
            var li = document.createElement('li'),
                aArrow = document.createElement('a'),
                aArrowImage = document.createElement('img'),
                aArrowLast = document.createElement('a'),
                aArrowLastImage = document.createElement('img'),
                aForum = document.createElement('a'),
                aForumSpan = document.createElement('span'),
                aThread = document.createElement('a'),
                aThreadSpan = document.createElement('span');

            // Pfeil (ungelesene Seite)
            aArrow.href = threadInfo.threadLink.replace(/&page=last$/gi, '') + '/firstunread';
            aArrow.className = 'r';
            aArrow.title = 'Zum ersten ungelesenen Beitrag des Themas';
            aArrowImage.src = '//cdn1.readmore.de/img/themes/readmore/arrow_last_item.gif';
            aArrowImage.border = '0';
            aArrow.appendChild(aArrowImage);

            // Pfeil (letzte Seite)
            aArrowLast.href = threadInfo.threadLink;
            aArrowLast.className = 'r favLastArrow';
            aArrowLast.title = 'Zur letzten Seite des Themas';
            aArrowLastImage.src = '//cdn1.readmore.de/img/themes/readmore/arrow_last_item2.gif';
            aArrowLastImage.border = '0';
            aArrowLast.appendChild(aArrowLastImage);

            // Forum
            aForum.href = threadInfo.forumLink;
            aForumSpan.innerHTML = threadInfo.forumName + ': ';
            aForumSpan.className = 'forum';
            aForum.appendChild(aForumSpan);

            // Thread
            aThread.href = threadInfo.threadLink.split('&page')[0];
            aThreadSpan.innerHTML = (threadInfo.threadName.length <= 32) ? threadInfo.threadName : threadInfo.threadName.substring(0, 29) + "...";
            aThread.appendChild(aThreadSpan);

            if (_lastpostChanged.indexOf(threadInfo['id']) != -1){
                aThreadSpan.className = 'newPostFavs';
            }

            // Zusammenfügen
            li.appendChild(aArrowLast);
            li.appendChild(aArrow);
            li.appendChild(aForum);
            li.appendChild(aThread);
            ul.appendChild(li);
        });

        return ul;
    };

    /**
     * Verändert das Icon im Thread
     * @private
     */
    var _changeITag = function(){
        _itag.className = 'rmus-icon ' + (typeof _favorites[_threadId] === 'undefined' ? ICON_NOT_FAVORITE : ICON_FAVORITE);
        _itag.title = 'Thread als Favorit ' + (typeof _favorites[_threadId] === 'undefined' ? 'hinzufügen' : 'entfernen');
    };

    /**
     * Liest die Informationen des Threads aus, wird für die Übersicht in der Navi gebraucht
     * @returns {{forumName: (string|innerHTML|*|._row.cells.innerHTML|id.innerHTML|L.innerHTML), forumLink: (href|string|jsl.$.href|window.location.href), threadName: (string|innerHTML|*|._row.cells.innerHTML|id.innerHTML|L.innerHTML), threadLink: string}}
     * @private
     */
    var _getThreadInfo = function(){
        var liTags = $('#c_content > ul.breadcrumbs:first > li');

        return {
            forumName: _replaceLongForumNames(liTags[2].childNodes[0].innerHTML),
            forumLink: liTags[2].childNodes[0].href,
            threadName: liTags[3].innerHTML,
            threadLink: document.location.href + '&page=last'
        };
    };

    var _replaceLongForumNames = function(name){
        var newName = '';

        switch(name){
            case 'Counter-Strike: Global Offensive':
                newName = 'CS:GO';
                break;
            case 'League of Legends':
                newName = 'LoL';
                break;
            case 'Defense of the Ancients':
                newName = 'DotA';
                break;
            default:
                newName = name;
                break;
        }

        return newName;
    };

    /**
     * Favoriten speichern
     * @private
     */
    var _saveFavorites = function(){
        _options.setData(OPTIONS_NAME, _favorites);
        _options.saveCurrentOptions();
    };

    var _addRefreshEvent = function(){
        setTimeout(function(){
           $('#userscript_realoadFavoritesButton').click(function(){
               var i = 0,
                   favCount = Object.keys(_favorites).length;

               _showLoadingScreen();
               _changeLoadingMessage('0 / ' + favCount + ' Favoriten ausgelesen');

               setTimeout(function(){
                   $.each(_favorites, function(threadid, threadInfo){
                       setTimeout(function(){
                           $.ajax({
                               type: "GET",
                               cache: false,
                               url: threadInfo['threadLink']
                           }).done(function(data) {
                               if (data != null) {
                                   var lastPost = $(data).find('.forum_post:last').attr('id').match(/[0-9]+/)[0];
                                   _changeLoadingMessage(++i + ' / ' +  favCount + ' Favoriten ausgelesen');

                                   if (threadInfo['lastPost'] != lastPost){
                                       threadInfo['lastPost'] = lastPost;
                                       _lastpostChanged.push(threadid);
                                   }

                                   if (i == favCount){
                                       _removeLoadingScreen();
                                       _saveFavorites();

                                       $('#userscriptFavoriten').replaceWith(_generateEntries());

                                       setTimeout(function(){
                                           _addRefreshEvent();
                                       }, 50)
                                   }
                               }
                           });
                       }, 0);
                   });
               }, 0);
            });
        }, 0);
    };

    var _showLoadingScreen = function(){
        var container = document.createElement('div'),
            innerDiv = document.createElement('div'),
            spanText = document.createElement('span'),
            IconImg = document.createElement('img');

        container.id = 'userscript_realoadFavoritesContainer';
        spanText.id = 'userscript_realoadFavoritesContainerText';
        IconImg.src = 'data:image/gif;base64,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';

        innerDiv.appendChild(IconImg);
        innerDiv.appendChild(spanText);
        container.appendChild(innerDiv);

        _loadingTextElement = spanText;
        _loadingElement = container;
        document.body.appendChild(_loadingElement);
    };

    var _removeLoadingScreen = function(){
        document.body.removeChild(_loadingElement);
    };

    var _changeLoadingMessage = function(text){
        _loadingTextElement.innerText = text;
    };

    var _getFavoritesArrayInOrder = function(){
        var tempArray = [];

        $.each(_favorites, function(threadid, threadInfo){
            threadInfo['id'] = threadid;
            tempArray.push(threadInfo);
        });

        tempArray.sort(function(a, b){
            a['lastPost'] = Number(a['lastPost']);
            b['lastPost'] = Number(b['lastPost']);

            if (a['lastPost'] > b['lastPost'] || !a['lastPost']) return -1;
            if (a['lastPost'] < b['lastPost'] || !b['lastPost']) return +1;

            return 0;
        });

        return tempArray;
    };
};