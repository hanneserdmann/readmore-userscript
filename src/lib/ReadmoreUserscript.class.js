function ReadmoreUserscript() {
    var _options = new Options(),
        _siteLocation = new SiteLocation(),
        _content = new Content(),
        _reloadPosts = new ReloadPosts(_content),
        _misc = new Miscellaneous(),
        _headlines = new Headlines(_options),
        _reloadPageData = new ReloadPageData(),
        _forumNavigation = new ForumNavigation(_options, _reloadPageData, _misc);

    this.start = function() {
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

        // Button ums Forum nachzuladen einbauen
        _forumNavigation.addReloadImage().click(function() {
            _forumNavigation.reloadForumManually();
        });

        // Schlagzeilen ausblenden
        _headlines.init();
    };

    this.startIntervalReloadPosts = function() {
        // Prüfen ob die Option gesetzt ist
        if (_options.getOption('middleColumn_forum_reloadPosts_readNewPosts') === 'checked') {

            // Prüfen ob wir uns im Forum befinden
            if (_siteLocation.getLocation('forums') && _content.get('forumPosts').length) {
                // Nachladen von Posts vorbereiten
                _reloadPosts.init();

                setInterval(function() {
                    _reloadPosts.readNewPosts();
                }, (parseInt(_options.getOption('middleColumn_forum_reloadPosts_timeToWait'), 10) > 2) ? parseInt(_options.getOption('middleColumn_forum_reloadPosts_timeToWait'), 10) * 1000 : 3000);
            }
        }
    };

    this.startInvervalRapid = function() {};

    this.startInvervalSlow = function() {
        setInterval(function() {
            _reloadPageData.readPage();

            // Forum aktualisieren
            if (_options.getOption("rightColumn_forum_reloadForum") === "checked") {
                // Lag im FF verhindern
                setTimeout(function() {
                    _forumNavigation.reloadForum();
                }, 1000);
            }
        }, 15000);
    };
}