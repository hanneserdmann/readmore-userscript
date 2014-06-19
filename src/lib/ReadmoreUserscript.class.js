function ReadmoreUserscript() {
    var _options        = new Options();
    var _siteLocation   = new SiteLocation();
    var _misc			= new Miscellaneous();

    this.start = function () {

        // Optionen einfügen
        _options.insertOptions();
        
        // Header fixen
        _misc.createFixedToolbar();
    };

    this.startIntervalReloadPosts = function () {
    };

    this.startInvervalRapid = function () {
    };

    this.startInvervalSlow = function () {
    };
}