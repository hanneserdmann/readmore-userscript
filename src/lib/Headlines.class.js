/**
 * Headlines
 * =========
 *
 * Methoden um die Schlagezeilen auszublenden.
 */

function Headlines(){
    _headlineElements = [];

    /**
     * Alle Headline ausblenden
     */
    this.hideAllHeadlines = function(){
        document.getElementById('headlines').style.display = "none";
    };

    /**
     * Blendet Counterstrike aus
     */
    this.hideCounterstrike = function(){
        if (_headlineElements.length === 0){
            _readHeadlineElements();
        }
        $(_headlineElements[0]).css('display', 'none');
    };

    /**
     * Blendet Starcraft aus
     */
    this.hideStarcraft = function(){
        if (_headlineElements.length === 0){
            _readHeadlineElements();
        }
        $(_headlineElements[1]).css('display', 'none');
    };

    /**
     * Blendet Dota aus
     */
    this.hideDefenseOfTheAncients = function(){
        if (_headlineElements.length === 0){
            _readHeadlineElements();
        }
        $(_headlineElements[2]).css('display', 'none');
    };

    /**
     * Blendet LoL aus
     */
    this.hideLeagueOfLegends = function(){
        if (_headlineElements.length === 0){
            _readHeadlineElements();
        }
        $(_headlineElements[3]).css('display', 'none');
    };

    /**
     * Blendet Warcraft aus
     */
    this.hideWarcraft3 = function(){
        if (_headlineElements.length === 0){
            _readHeadlineElements();
        }
        $(_headlineElements[4]).css('display', 'none');
    };

    /**
     * Blendet Sonstiges aus
     */
    this.hideSonstiges = function(){
        if (_headlineElements.length === 0){
            _readHeadlineElements();
        }
        $(_headlineElements[5]).css('display', 'none');
    };

    /**
     * Liest die Schlagzeilen ein, bereitet also das Ausblenden von
     * einzelnen Kategorien vor.
     * @private
     */
    _readHeadlineElements = function(){
        var elements    = document.getElementById('nav_schlagzeilen').children;
        var count       = elements.length - 4; // Einsenden, Archiv, Übersicht

        _headlineElements = [];

        for(var i = 0, k = -1; i < count; i++){
            if (elements[i].className === 'bml'){
                _headlineElements[++k] = [];
            }

            _headlineElements[k].push(elements[i]);
        }
    };
}