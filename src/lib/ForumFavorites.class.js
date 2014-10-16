function ForumFavorites($, _options, _content){
    var OPTIONS_NAME = 'forumFavoritesData';
    var ICON_FAVORITE = 'rmus-icon-star';
    var ICON_NOT_FAVORITE = 'rmus-icon-star-empty';

    var _threadId = 0;
    var _favorites = _options.getData(OPTIONS_NAME);
    var _itag = null;

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
            headerSpanA = document.createElement('a');

        header.className = 'headlines_cat';
        headerSpanA.innerHTML = 'Favoriten';
        headerSpanA.src = '#';
        headerSpan.appendChild(headerSpanA);
        header.appendChild(headerSpan);

        _content.get('forumNavigation').append(header);

        // Einträge zusammensetzen
        var ul = document.createElement('ul');

        $.each(_favorites, function(threadid, threadInfo){
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
            aThreadSpan.innerHTML = threadInfo.threadName;
            aThread.appendChild(aThreadSpan);

            // Zusammenfügen
            li.appendChild(aArrowLast);
            li.appendChild(aArrow);
            li.appendChild(aForum);
            li.appendChild(aThread);
            ul.appendChild(li);
        });

        _content.get('forumNavigation').append(ul);

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
            forumName: liTags[2].childNodes[0].innerHTML,
            forumLink: liTags[2].childNodes[0].href,
            threadName: liTags[3].innerHTML,
            threadLink: document.location.href + '&page=last'
        };
    };

    /**
     * Favoriten speichern
     * @private
     */
    var _saveFavorites = function(){
        _options.setData(OPTIONS_NAME, _favorites);
        _options.saveCurrentOptions();
    };
};