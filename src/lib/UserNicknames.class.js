/**
 * UserNicknames
 * ==========
 *
 * Fügt einen Link neben dem Username ein, um schnell auf die Nickname History eines Users zugreifen zu können
 */

function UserNicknames($, _siteLocation, _content){
    var _$contentElm = $('#c_content'),
        _nickIconUrl = 'http://themes.cdn.readmore.de/readmore/icon_history.gif';

    this.insertLink = function(){
        if (_siteLocation.getLocation('forums') && _content.get('forumPosts').length){
            // Wenn wir uns im Forum befinden und Posts vorhanden sind
            // :not falls der Post schon einmal selektiert und bearbeitet wurde (bei nachladen von Posts)
            _insertDOMLink('.forum_post span.user:not(span:has(a.rmus-old-nicknames))');
        } else if (_siteLocation.getLocation('news') || _siteLocation.getLocation('users') || _siteLocation.getLocation('matches')){
            // News, Userprofile (Gästebuch) oder Ticker
            _insertDOMLink('div.comment div.comment_head');
        }
    };

    var _clickHandler = function (e) {
        e.preventDefault();

        var profileLink = $(this).next().prop('href'),
            nickHistoryLink = profileLink + '/nick_history';

        $.get(nickHistoryLink, null, function (content) {
            var siteContent = $('div#c_content', $($.parseHTML(content))),
                nicknameTable = $('table', siteContent);

            if (nicknameTable.length === 0 && null !== siteContent.text().match(/Der ausgewählte Account wurde von einem Admin gesperrt/)) {
                alert('Nicknames können nicht abgerufen werden, da der User gebannt wurde.');
                return;
            }

            var nicknameRows = $('tr', nicknameTable),
                nicknameCount = nicknameRows.length - 1, // - Header
                nicks = 'Bisherige Nicknames:\n\n';

            nicknameRows.each(function (i) {
                if (i === 0) {
                    // table header - continue
                    return true;
                }

                var row = $(this),
                    name = $('td:first', row).text(),
                    date = $('td:last', row).text();

                if (nicknameCount === 1 && name === 'Bisher keine anderen Nicknames.') {
                    nicks = name;
                    return false; // break
                }

                nicks += name + ' - '+ date + '\n';
            });

            alert(nicks);
        });
    };

    var _createLink = function () {
        var link = document.createElement('a'),
            img = document.createElement('img');

        img.src = _nickIconUrl;
        img.alt = '';
        link.title = 'Bisherige Nicknames anzeigen';
        link.className = 'rmus-old-nicknames';
        link.href = '';
        link.style.marginLeft = '3px';
        link.appendChild(img);

        return link;
    };

    var _insertDOMLink = function(selector){
        var $users = $(selector, _$contentElm);

        $users.each(function() {
            var nickLink = _createLink();
            $(nickLink).insertAfter($('span.user_status', this));
            $(nickLink).click(_clickHandler);
        });
    };
};