function ReadmoreUserscript($) {

    var _options = new Options($),
        _siteLocation = new SiteLocation($),
        _content = new Content($),
        _ignoreUser = new IgnoreUser($, _options, _siteLocation, _content),
        _reloadPosts = new ReloadPosts($, _options, _content, _ignoreUser),
        _misc = new Miscellaneous($, _content),
        _headlines = new Headlines($, _options, _content),
        _reloadPageData = new ReloadPageData($),
        _ticker = new Ticker($, _content),
        _forumNavigation = new ForumNavigation($, _options, _reloadPageData, _misc, _content),
        _postWithoutReload = new PostWithoutReload($, _options,_reloadPosts),
        _scrollForNewPage = new ScrollForNewPage($, _options, _content, _ignoreUser);

    this.start = function() {
        if (_options.getOption('miscellaneous_makeContentWider')) {
            _misc.makeContentWider();
        }

        // Optionen einfügen
        _options.insertOptions();

        // Header fixen
        if (_options.getOption('miscellaneous_fixedToolbar')) {
            _misc.createFixedToolbar();
        }

        // Pfeile anpassen
        if (_options.getOption('miscellaneous_lastPageJumpToLastPost')) {
            _misc.changeForumArrowBehavior();
        }

        // Im Forum
        if (_siteLocation.getLocation('forums')) {
            // Titel umsortieren
            if (_options.getOption('miscellaneous_reSortTitle')) {
                _misc.resortTitle();
            }

            // Sind Posts verfügbar?
            if ( _content.get('forumPosts').length){
                // Post ohne Reload
                if (_options.getOption('middleColumn_forum_postPerAjax')){
                    _postWithoutReload.init();
                }

                // Hochscrollen
                if (_options.getOption('miscellaneous_buttonScrollUp')){
                    _misc.buttonScrollUp();
                }

                // Runterscrollen
                if (_options.getOption('miscellaneous_buttonScrollDown')){
                    _misc.buttonScrollDown();
                }

                if (_options.getOption('middleColumn_forum_scrollForNewPage')){
                    _scrollForNewPage.init();
                }
            }
        }

        // Prüfen ob die Übersicht überhaupt vorhanden ist
        if (_content.get('forumNavigation').length) {
            _forumNavigation.init();
        }

        // Schlagzeilen ausblenden
        if (_content.get('headlines').length && _content.get('tickerMatches').length) {
            _headlines.init();
        }

        // Ticker ausblenden
        if (_options.getOption('rightColumn_ticker_hideTicker')) {
            _ticker.hideTicker();
        }

        // User Ignorieren
        if (_options.getOption('miscellaneous_ignoreUser')){
            _ignoreUser.ignore();
        }
    };

    this.startIntervalReloadPosts = function() {
        // Prüfen ob die Option gesetzt ist
        if (_options.getOption('middleColumn_forum_reloadPosts_readNewPosts')) {
            // Prüfen ob wir uns im Forum befinden
            if (_siteLocation.getLocation('forums') && _content.get('forumPosts').length) {
                // Nachladen von Posts vorbereiten und invervall setzen
                _reloadPosts.init();
            }
        }
    };

    this.startInvervalRapid = function() {
        setInterval(function() {
            // Posts unmarkieren
            if (_options.getOption('middleColumn_forum_reloadPosts_markNewPosts')) {
                if (_siteLocation.getLocation('forums') && _content.get('forumPosts').length) {
                    _reloadPosts.unmarkNewPosts();
                    if (_options.getOption('middleColumn_forum_reloadPosts_changeFavicon'))     _reloadPosts.changeFavicon();
                    if (_options.getOption('middleColumn_forum_reloadPosts_showNewPostsTitle')) _reloadPosts.showNewPostsTitle();
                }
            }
        }, 333);
    };

    this.startInvervalSlow = function() {
        setInterval(function() {
            _reloadPageData.readPage();

            // Forum aktualisieren
            if (_options.getOption('rightColumn_forum_reloadForum') && _content.get('forumNavigation').length) {
                // Lag im FF verhindern
                setTimeout(function() {
                    _forumNavigation.reloadForum();
                }, 1000);
            }
        }, 15000);
    };
}
