/**
 * Headlines
 * =========
 *
 * Methoden um die Schlagezeilen auszublenden.
 */

function Headlines() {
    _headlineElements = [];

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
        $("div#headlines_list div.headlines_cat").each(function(index, value) {
            _headlineElements.push(value);
        });
    };
}
