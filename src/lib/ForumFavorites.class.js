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
        // Mindestens ein Favorit gesetzt
        if (typeof _favorites !== 'undefined' && _favorites !== null && Object.keys(_favorites).length){

            // Überschrift zusammenbauen
            var header = document.createElement('div'),
                headerSpan = document.createElement('span');

            header.className = 'headlines_cat';
            headerSpan.innerHTML = 'Favoriten';
            header.appendChild(headerSpan);

            _content.get('forumNavigation').append(header);

            // Einträge zusammensetzen
            var ul = document.createElement('ul');

            $.each(_favorites, function(threadid, threadInfo){
               var li = document.createElement('li'),
                   aArrow = document.createElement('a'),
                   aArrowImage = document.createElement('img'),
                   aForum = document.createElement('a'),
                   aForumSpan = document.createElement('span'),
                   aThread = document.createElement('a'),
                   aThreadSpan = document.createElement('span');

                // Pfeil (letzte/ungelesene Seite)
                aArrow.href = threadInfo.threadLink;
                aArrow.className = 'r';
                aArrowImage.src = '//cdn1.readmore.de/img/themes/readmore/arrow_last_item.gif';
                aArrowImage.border = '0';
                aArrow.appendChild(aArrowImage);

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
                li.appendChild(aArrow);
                li.appendChild(aForum);
                li.appendChild(aThread);
                ul.appendChild(li);
            });

            _content.get('forumNavigation').append(ul);
        }
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
        _options.writeOptionsToHTML();
        _options.saveOptions();
    };
};