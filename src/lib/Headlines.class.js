/**
 * Headlines
 * =========
 *
 * Methoden um die Schlagezeilen auszublenden.
 */

function Headlines(_options) {

    var _self = this,
        _headlineElements = [],
        _observer = null;

    /**
     * Alle Headlines ausblenden
     */
    this.hideAllHeadlines = function() {
        $("div#headlines_list").hide().prev("h3").hide().prev("hr").hide();
        $("a[href$='headlines/send']").hide().prev("br").remove();
    };

    /**
     * Blendet Counterstrike aus
     */
    this.hideCounterstrike = function() {
        if (_headlineElements.length === 0) {
            _readHeadlineElements();
        }
        $(_headlineElements[0]).css('display', 'none').next("ul").hide();
    };

    /**
     * Blendet Dota aus
     */
    this.hideDefenseOfTheAncients = function() {
        if (_headlineElements.length === 0) {
            _readHeadlineElements();
        }
        $(_headlineElements[1]).css('display', 'none').next("ul").hide();
    };

    /**
     * Blendet LoL aus
     */
    this.hideLeagueOfLegends = function() {
        if (_headlineElements.length === 0) {
            _readHeadlineElements();
        }
        $(_headlineElements[2]).css('display', 'none').next("ul").hide();
    };

    /**
     * Blendet Hearthstone aus
     */
    this.hideHearthstone = function() {
        if (_headlineElements.length === 0) {
            _readHeadlineElements();
        }
        $(_headlineElements[3]).css('display', 'none').next("ul").hide();
    };

    /**
     * Blendet Starcraft aus
     */
    this.hideStarcraft = function() {
        if (_headlineElements.length === 0) {
            _readHeadlineElements();
        }
        $(_headlineElements[4]).css('display', 'none').next("ul").hide();
    };

    /**
     * Blendet Warcraft aus
     */
    this.hideWarcraft3 = function() {
        if (_headlineElements.length === 0) {
            _readHeadlineElements();
        }
        $(_headlineElements[5]).css('display', 'none').next("ul").hide();
    };

    /**
     * Blendet Sonstiges aus
     */
    this.hideSonstiges = function() {
        if (_headlineElements.length === 0) {
            _readHeadlineElements();
        }
        $(_headlineElements[6]).css('display', 'none').next("ul").hide();
    };

    /**
     * Liest die Schlagzeilen ein, bereitet also das Ausblenden von
     * einzelnen Kategorien vor.
     * @private
     */
    _readHeadlineElements = function() {
        _headlineElements = [];
        $("div#headlines_list div.headlines_cat").each(function(index, value) {
            _headlineElements.push(value);
        });
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
    _catchHeadlineChange = function() {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

        _observer = new MutationObserver(function(mutations, observer) {
            _readHeadlineElements();
            _hideHeadlines();
        });

        _observer.observe($("div#headlines_list")[0], {
            attributes: true,
            childList: true,
            characterData: true
        });
    };

    _hideHeadlines = function() {
        // Schlagzeilen ausblenden
        if (_options.getOption('rightColumn_headlines_hideHeadlines') === 'checked') {
            _self.hideAllHeadlines();
        } else {
            // Individuell
            if (_options.getOption('rightColumn_headlines_hideCounterstrike') === 'checked') {
                _self.hideCounterstrike();
            }
            if (_options.getOption('rightColumn_headlines_hideStarcraft') === 'checked') {
                _self.hideStarcraft();
            }
            if (_options.getOption('rightColumn_headlines_hideDefenseOfTheAncients') === 'checked') {
                _self.hideDefenseOfTheAncients();
            }
            if (_options.getOption('rightColumn_headlines_hideHearthstone') === 'checked') {
                _self.hideHearthstone();
            }
            if (_options.getOption('rightColumn_headlines_hideLeagueOfLegends') === 'checked') {
                _self.hideLeagueOfLegends();
            }
            if (_options.getOption('rightColumn_headlines_hideWarcraft3') === 'checked') {
                _self.hideWarcraft3();
            }
            if (_options.getOption('rightColumn_headlines_hideSonstiges') === 'checked') {
                _self.hideSonstiges();
            }
        }
    };

    this.init = function() {
        // Wenn NICHT alle headlines ausgeblendet werden sollen muss der Observer gestartet werden
        if (_options.getOption('rightColumn_headlines_hideHeadlines') !== 'checked') {
            _catchHeadlineChange();
        }

        _hideHeadlines();
    }
}