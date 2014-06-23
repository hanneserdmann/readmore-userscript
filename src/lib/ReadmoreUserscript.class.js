<<<<<<< HEAD
function ReadmoreUserscript($) {

    var _options = new Options($),
        _siteLocation = new SiteLocation($),
        _content = new Content($),
        _reloadPosts = new ReloadPosts($, _options, _content),
        _misc = new Miscellaneous($),
        _headlines = new Headlines($, _options, _content),
        _reloadPageData = new ReloadPageData($),
        _forumNavigation = new ForumNavigation($, _options, _reloadPageData, _misc, _content);
=======
function ReadmoreUserscript() {
    var _options = new Options(),
        _siteLocation = new SiteLocation(),
        _content = new Content(),
        _reloadPosts = new ReloadPosts(_options, _content),
        _misc = new Miscellaneous(),
        _headlines = new Headlines(_options, _content),
        _reloadPageData = new ReloadPageData(),
        _ticker = new Ticker();
        _forumNavigation = new ForumNavigation(_options, _reloadPageData, _misc, _content);
>>>>>>> fork/master

    this.start = function() {
        if (_options.getOption("miscellaneous_makeContentWider")) {
            _misc.makeContentWider();
        }

        // Optionen einfügen
        _options.insertOptions();

        // Header fixen
        if (_options.getOption("miscellaneous_fixedToolbar")) {
            _misc.createFixedToolbar();
        }

        // Pfeile anpassen
        if (_options.getOption("miscellaneous_lastPageJumpToLastPost")) {
            _misc.changeForumArrowBehavior();
        }

        // Titel umsortieren
        if (_siteLocation.getLocation('forums')) {
            if (_options.getOption("miscellaneous_reSortTitle")) {
                _forumNavigation.resortTitle();
            }
        }

        // Prüfen ob die Übersicht überhaupt vorhanden ist
        if (_content.get('forumNavigation').length) {
            // Button ums Forum nachzuladen einbauen
            _forumNavigation.addReloadImage().click(function() {
                _forumNavigation.reloadForumManually();
            });
        }

        // Schlagzeilen ausblenden
        if (_content.get('headlines').length) {
            _headlines.init();
        }

        // Ticker ausblenden
        if (_options.getOption('rightColumn_ticker_hideTicker')) {
            _ticker.hideTicker();
        }
    };

    this.startIntervalReloadPosts = function() {
        // Prüfen ob die Option gesetzt ist
        if (_options.getOption('middleColumn_forum_reloadPosts_readNewPosts') === 'checked') {
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
            if (_options.getOption('middleColumn_forum_reloadPosts_markNewPosts') === 'checked') {
                if (_siteLocation.getLocation('forums') && _content.get('forumPosts').length) {
                    _reloadPosts.unmarkNewPosts();
                    if (_options.getOption('middleColumn_forum_reloadPosts_changeFavicon') === 'checked') _reloadPosts.changeFavicon();
                    if (_options.getOption('middleColumn_forum_reloadPosts_showNewPostsTitle') === 'checked') _reloadPosts.showNewPostsTitle();
                }
            }
        }, 333);
    };

    this.startInvervalSlow = function() {
        setInterval(function() {
            _reloadPageData.readPage();

            // Forum aktualisieren
            if (_options.getOption("rightColumn_forum_reloadForum") === "checked" && _content.get('forumNavigation').length) {
                // Lag im FF verhindern
                setTimeout(function() {
                    _forumNavigation.reloadForum();
                }, 1000);
            }
        }, 15000);
    };
}
