function ReadmoreUserscript($) {

    var _options = new Options($),
        _loadingScreen = new LoadingScreen(),
        _siteLocation = new SiteLocation($),
        _content = new Content($),
        _ignoreUser = new IgnoreUser($, _options, _siteLocation, _content),
        _userNicknames = new UserNicknames($, _siteLocation, _content),
        _reloadPosts = new ReloadPosts($, _options, _content, _ignoreUser, _userNicknames),
        _misc = new Miscellaneous($, _content),
        _headlines = new Headlines($, _options, _content),
        _reloadPageData = new ReloadPageData($),
        _ticker = new Ticker($, _content),
        //_sync = new Sync($, _options, _loadingScreen),
        _forumFavorites = new ForumFavorites($, _options, _content, _loadingScreen/*, _sync*/),
        _forumNavigation = new ForumNavigation($, _options, _reloadPageData, _misc, _content, _forumFavorites),
        _postWithoutReload = new PostWithoutReload($, _options,_reloadPosts),
        _scrollForNewPage = new ScrollForNewPage($, _options, _content, _ignoreUser, _userNicknames),
        _checkUpdate = new CheckUpdate($, _options),
        _bettingOverview = new BettingOverview($, _options);

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

                // Runterscrollen für eine neue Seite
                if (_options.getOption('middleColumn_forum_scrollForNewPage')){
                    _scrollForNewPage.init();
                }

                // Favoriten im Thread
                if (_options.getOption('forumFavorites')){
                    _forumFavorites.initThread();
                }
            }
        }

        // Prüfen ob die Übersicht überhaupt vorhanden ist
        if (_content.get('forumNavigation').length) {

            // Favoriten Forennavi
            if (_options.getOption('forumFavorites')){
                _forumFavorites.initForumNavi();
            }

            // Pfeile anpassen
            if (_options.getOption('miscellaneous_lastPageJumpToLastPost')) {
                _misc.changeForumArrowBehavior();
            }

            _forumNavigation.init();
        }

        // Schlagzeilen ausblenden
        if (_content.get('headlines').length && _content.get('tickerMatches').length) {
            _headlines.init();
        }

        // Ticker ausblenden
        if (_options.getOption('rightColumn_ticker_hideTicker')){
            _ticker.hideTicker();
        }

        // Wettkönig ausblenden
        if (_options.getOption('rightColumn_hideBetKing')){
            _misc.hideBetKing();
        }

        // User Ignorieren
        if (_options.getOption('miscellaneous_ignoreUser')){
            _ignoreUser.ignore();
        }

        // Nickname History Link
        if (_options.getOption('miscellaneous_nicknameHistoryLink')){
            _userNicknames.insertLink();
        }

        // Betting Selection
        if (_options.getOption('bettingOverview') && _siteLocation.getLocation('betting')){
            _bettingOverview.init();
        }

        // Sync anschalten
        //_sync.init();

        // Update prüfen
        _checkUpdate.checkUpdate();
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

    this.startIntervalRapid = function() {
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

    this.startIntervalSlow = function() {
        setInterval(function() {
            _reloadPageData.readPage();

            // Forum aktualisieren
            if (_options.getOption('rightColumn_forum_reloadForum') && _content.get('forumNavigation').length) {
                // Lag im FF verhindern
                setTimeout(function() {
                    _forumNavigation.reloadForum();
                }, 1000);
            }

            // Update prüfen
            _checkUpdate.checkUpdate();

            // Gucken ob eine aktuellere Version der Optionen verfügbar ist
            if (_options.getOption('rightColumn_forum_reloadForum')){

            }
        }, 15000);
    };
}
