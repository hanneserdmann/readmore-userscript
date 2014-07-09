/**
 * SiteLocation
 * ============
 *
 * Simple Pseudoklasse um auszulesen wo wir uns auf der Readmore.de Seite befinden.
 * Dadurch werden Funktionen des Userscriptes gesteuert. Ist im Grunde die alte Content Klasse..
 */
function SiteLocation($){

    /**
     * Property in dem alle content Möglichkeiten aufgelistet sind. Default sind alle false, die _init Methode
     * liest die aktuelle Seite aus.
     * @type {{start: boolean, coverages: boolean, livestreams: boolean, vods: boolean, gallery: boolean, groups: boolean, forums: boolean, search: boolean, users: boolean, headlines: boolean, matches: boolean, betting: boolean, changes: boolean, staff: boolean, statics: boolean}}
     * @private
     */
    var _siteLocation = {
        start: false,
        coverages: false,
        livestreams: false,
        vods: false,
        gallery: false,
        groups: false,
        forums: false,
        search: false,
        users: false,
        headlines: false,
        matches: false,
        betting: false,
        changes: false,
        staff: false,
        statics: false,
        news: false
    };

    /**
     * Methode wird bei der Instanziierung des Objektes ausgeführt. Liest die
     * aktuelle Seite aus.
     * @private
     */
    var _init = function(){
        _readCurrentLocation();
    };

    /**
     * Übergeben wird welche Seite abgefragt werden soll, die Funktion liefert dann true oder falls zurück,
     * je nachdem ob wir aktuell auf der Seite sind oder nicht.
     * @param what {String}
     * @returns {Boolean}
     */
    this.getLocation = function(what){
        return _siteLocation.hasOwnProperty(what) ? _siteLocation[what] : false;
    };

    /**
     * Erlaubt es direkt mehrere Abfragen mit einer Methode zu erledigen. Ist minimal langsamer, bringt
     * meiner Meinung nach aber einen Vorteil in der Übersichtlchkeit des Codes.
     * @param what {Array}
     * @param type {String} Möglichkeiten sind AND/OR. Wird ein andere Parameter übergeben, wird OR als
     *                      Default-Wert gesetzt.
     * @returns {boolean}
     */
    this.getMultipleLocations = function(what, type){
        var returnValue = false;
        var that        = this;

        switch(type){
            // AND wurde angegeben
            case 'AND':
                returnValue = true;

                $(what).each(function(index, value){
                    if (!that.getLocation(value)){
                        return returnValue = false;
                    }
                });
                break;

            // OR oder ein falscher Parameter wurde angegeben
            default:
                $(what).each(function(index, value){
                    if (that.getLocation(value)){
                        returnValue = true;
                        return false;
                    }
                });
                break;
        }

        return returnValue;
    };

    /**
     * Liest aus der URL (document.location.pathname) den Pfad (Routing) aus und match es auf die verschiedenen
     * Seiten.
     * @private
     */
    var _readCurrentLocation = function(){
        $.each(_siteLocation, function(name){
            if (document.location.pathname.substring(1, ++(name.length)) === name){
                _siteLocation[name] = true;
                return false;
            }
        });
    };

    /**
     * Init Methode starten
     */
    _init();
}
