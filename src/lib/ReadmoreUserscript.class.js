function ReadmoreUserscript() {
    var _options = new Options();
    var _siteLocation = new SiteLocation();
    var _content = new Content();
    var _reloadPosts = new ReloadPosts(_content);
    var _misc = new Miscellaneous();

    this.start = function() {

        // Optionen einfügen
        _options.insertOptions();

        // Header fixen
        if (_options.getOption('miscellaneous_fixedToolbar')) {
            _misc.createFixedToolbar();
        }
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

    this.startInvervalSlow = function() {};
}
