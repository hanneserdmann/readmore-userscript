/**
 * Headlines
 * =========
 *
 * Sorgt für das Umsortieren und Ausblenden der Headlines.
 */

function Headlines($, _options, _content) {

    var _self = this,
        _observer = null,
        _section = null,
        _sectionOpts = null,
        _mappings = {
            'cs': 'CS:GO',
            'sc': 'Starcraft 2',
            'dota': 'Dota 2',
            'lol': 'League of Legends',
            'hs': 'Hearthstone',
            'wc3': 'Warcraft 3',
            'other': 'Sonstiges'
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
    this._catchHeadlineChange = function() {
        try {
            var target = _content.get('headlines')[0],
                config = {
                    childList: true,
                    attributes: false
                };

            MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

            _observer = new MutationObserver(function() {
                // Temporär observer stoppen, sonst deadlock
                _observer.disconnect();
                _self._handleHeadlines();
                _observer.observe(target, config);
            });

            _observer.observe(target, config);
        } catch(e) {
            console.warn('Der MutationObserver konnte nicht initialisiert werden. Nachladen von Headlines kann Fehler verursachen!');
        }
    };

    this._handleHeadlines = function() {
        if (_options.getOption('rightColumn_headlines_hideHeadlines')) {
            // Schlagzeilen ausblenden
            _section.hideAll();
            // "Schlagzeile einsenden" entfernen
            _content.get('headlines').next('br').hide().next('a').hide();
            return;
        }

        if (_options.getOption('rightColumn_headlines_sections')) {
            _section.process(_sectionOpts, _mappings);
        }
    };

    this.init = function() {
        _sectionOpts = _options.getOptionsFuzzy('rightColumn_headlines_item_');
        _section = new SidebarSection($, _content.get('headlines'));

        this._handleHeadlines();

        // Wenn NICHT alle Headlines ausgeblendet werden sollen muss der Observer gestartet werden
        if (!_options.getOption('rightColumn_headlines_hideHeadlines')) {
            this._catchHeadlineChange();
        }
    };
}
