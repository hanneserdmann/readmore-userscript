function ForumFavorites($, _options, _content, _loadingScreen/*, _sync*/){
    var OPTIONS_NAME = 'forumFavoritesData';
    var ICON_FAVORITE = 'rmus-icon-star';
    var ICON_NOT_FAVORITE = 'rmus-icon-star-empty';

    var _threadId = 0;
    var _favorites = _options.getData(OPTIONS_NAME);
    var _itag = null;
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
        headerSpanRefreshI.id = 'userscriptRealoadFavoritesButton';
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
            aThreadSpan.innerHTML = (threadInfo.threadName.length <= 31) ? threadInfo.threadName : threadInfo.threadName.substring(0, 28) + "...";
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

        /*if (_options.getOption('miscellaneous_syncOptions')){
            _sync.sendOptionsToServer();
        }*/
    };

    var _addRefreshEvent = function(){
        // Die setTimeouts werden gebraucht damit der Browser die Elemente zeichnen / darstellen
        // kann und Javascript nicht alles blockiert.
        setTimeout(function(){
           $('#userscriptRealoadFavoritesButton').click(function(){
               var i = 0,
                   favCount = Object.keys(_favorites).length;

               _loadingScreen.showLoadingScreen();
               _loadingScreen.changeLoadingMessage('0 / ' + favCount + ' Favoriten ausgelesen');

               setTimeout(function(){
                   $.each(_favorites, function(threadid, threadInfo){
                       setTimeout(function(){
                           $.ajax({
                               type: "GET",
                               cache: false,
                               url: threadInfo['threadLink']
                           }).done(function(data) {
                               if (data != null) {
                                   var lastPost   = $(data).find('.forum_post:last').attr('id').match(/[0-9]+/)[0],
                                       threadName = $(data).find('#c_content > ul.breadcrumbs:first > li')[3].innerHTML;

                                   _loadingScreen.changeLoadingMessage(++i + ' / ' +  favCount + ' Favoriten ausgelesen');

                                   // Neuer Post
                                   if (lastPost != null) {
                                       if (threadInfo['lastPost'] != lastPost) {
                                           threadInfo['lastPost'] =  lastPost;

                                           _lastpostChanged.push(threadid);
                                       }
                                       if (threadInfo['threadName'] != threadName){
                                           threadInfo['threadName'] =  threadName;
                                       }
                                   }

                                   // Letzter Favorit
                                   if (i == favCount){
                                       // Etwas verzögern, sonst flackert das Bild bei wenigen
                                       // Favoriten nur kurz auf
                                       setTimeout(function(){
                                           _loadingScreen.removeLoadingScreen();
                                           _saveFavorites();

                                           $('#userscriptFavoriten').replaceWith(_generateEntries());

                                           setTimeout(function(){
                                               _addRefreshEvent();
                                           }, 50);
                                       }, 250);
                                   }
                               }
                           });
                       }, 0);
                   });
               }, 0);
            });
        }, 0);
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