/**
 * ForumNavigation
 * ===============
 *
 * Sorgt für das Umsortieren, Ausblenden und Neuladen der Forumnavigation.
 */

function ForumNavigation($, _options, _reloadPageData, _misc, _content, _forumFavorites) {

    var _self = this,
        _observer = null,
        _section = null,
        _sectionOpts = null,
        _mappings = {
            'esport': 'eSport',
            'technik': 'Technik',
            'offtopic': 'Offtopic',
            'spiele': 'Spiele',
            'readmore': 'readmore',
            'trashtalk': 'Trashtalk'
        };

    this.getMappings = function(){
        // Eventuell die Favoriten hinzufügen
        if (_options.getOption('forumFavorites')){
            _mappings['favoriten'] = 'Favoriten';
        }

        return _mappings;
    };

    /**
     * Lädt die Forennavigation neu.
     * @return {[type]} [description]
     */
    this.reloadForum = function() {
        var reloadData = _content.get('forumNavigation', _reloadPageData.getPageData());

        if (reloadData.length) {
            _content.get('forumNavigation').html(reloadData.html());
        }

        // Nachdem das Forum neugeladen wurde, müssen die Pfeile eventuell wieder angepasst werden
        if (_options.getOption("miscellaneous_lastPageJumpToLastPost")) {
            _misc.changeForumArrowBehavior();
        }

        // Neu sortieren/ausblenden
        if (_options.getOption('rightColumn_forum_sections')) {
            this._handleForums();
        }

        // Favoriten Forennavi
        if (_options.getOption('forumFavorites')){
            _forumFavorites.initForumNavi();
        }
    };

    /**
     * Fügt den Button ein, mit dem man das Forum manuell neuladen kann.
     */
    this.addReloadBtn = function() {
        return $("h3 > a[href$='/forums']").parent().append('<span style="float: right;"><i id="userscript_reloadForumButton" title="Forum aktualisieren" class="rmus-icon rmus-icon-arrows-cw" style="cursor: pointer;"></i></span>');
    };

    /**
     * Lädt das Forum manuell neu, wenn auf den Button geklickt wird.
     * @return {[type]} [description]
     */
    this.reloadForumManually = function() {
        _reloadPageData.readPage();
        setTimeout(function() {
            _self.reloadForum();
        }, 500);
    };

    /**
     * Startet einen MutationObserver, der auf DOM-Änderungen im div#headlines_list listened.
     * Bei Änderungen werden die Headlines neu eingelesen und wieder versteckt, da
     * readmore.de bei einem Klick auf +/- die kompletten Headlines neu lädt.
     *
     * MutationObserver sind in allen modernen Browsern und IE ab v11 supported.
     *
     * Da die +/- Buttons einen Ajax-Request abschicken, müsste man irgendwie einen Callback übergeben,
     * ich habe es aber nicht geschafft, mich in die originale Funktion "sidebar_headlines_setlimit" zu hooken.
     * Ein normaler Click-Listener auf den Buttons hat durch die asynchrone Natur nicht funktioniert.
     */
    this._catchForumsChange = function() {
        try {
            var target = _content.get('forumNavigation')[0],
                config = {
                    childList: true,
                    attributes: false
                };

            MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

            _observer = new MutationObserver(function() {
                // Temporär observer stoppen, sonst deadlock
                _observer.disconnect();
                _self._handleForums();
                _observer.observe(target, config);
            });

            _observer.observe(target, config);
        } catch(e) {
            console.warn('Der MutationObserver konnte nicht initialisiert werden. Nachladen von Foren kann Fehler verursachen!');
        }
    };

    this._handleForums = function() {
        if (_options.getOption('rightColumn_forum_hideForum')) {
            // Foren ausblenden
            _section.hideAll();
            return;
        }

        if (_options.getOption('rightColumn_forum_sections')) {
            _section.process(_sectionOpts, _self.getMappings());
        }
    };

    this.init = function () {
        // Button ums Forum nachzuladen einbauen
        this.addReloadBtn().click(function() {
            _self.reloadForumManually();
        });

        _sectionOpts = _options.getOptionsFuzzy('rightColumn_forums_item_');
        _section = new SidebarSection($, _content.get('forumNavigation'));

        this._handleForums();

        // Wenn NICHT alle Foren ausgeblendet werden sollen muss der Observer gestartet werden
        if (!_options.getOption('rightColumn_forum_hideForum')) {
            this._catchForumsChange();
        }
    };
}
