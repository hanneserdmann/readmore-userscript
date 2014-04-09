/**
 * Options
 * =======
 *
 * Pseudoklasse um die Optionen des Userscript zu handeln. Braucht zum instanziieren keine weiteren
 * Parameter, ruft direkt die _init() Methode auf um die Settings auszulesen.
 */
function Options() {
    /**
     * Name der benutzt wird um die Optionen im Localstorage zu speichern.
     * @type {string}
     */
    var LOCALSTORAGE_NAME = 'userscriptOptions';

    /**
     * Name der benutzt wird um das Backup der Optionen im Localstorage zu speichern.
     * @type {string}
     */
    var LOCALSTORAGE_NAME_BACKUP = 'userscriptOptionsBackup';

    /**
     * Version des Scriptes, wird durch GrundJS im Buildprozess ersetzt.
     * @type {string}
     * @private
     */
    var _version = '3.0.0';

    /**
     * Property für die Optionen. Werden über entsprechende Methoden abgefragt, sind daher
     * nicht mehr public.
     * @type {{}}
     * @private
     */
    var _options = {};

    /**
     * Missbrauche diese Funktion einfach mal als Konstuktor-Ersatz. Finde es einfach schöner
     * dafür eine separate Methode zu haben. Wird als letzte Zeile ausgerufen.     *
     * @private
     */
    var _init = function () {
        // Optionen aus dem Localstorage auslesen
        _readOptionsFromLocalstorage();
    };

    /**
     * Funktion um den Wert einer bestimmten Option zurückzugeben.
     * @param {String} what
     */
    this.getOption = function (what) {
        return _options[what];
    };

    /**
     * Gibt die aktuelle Version zurück.
     * @returns {string}
     */
    this.getVersion = function () {
        return _version;
    };

    /**
     * Fügt den Link für die Optionen in die Userbar auf der Readmore Seite ein.
     * Dadurch wird später das Fenster mit den Einstellungen verfügbar.
     */
    this.insertOptionsLink = function () {
        $('div.floatl.vcenter.elf.dgray:last').after('<div class="floatl vcenter" style="padding-top:4px;"><img src="http://images.readmore.de/img/header/line.jpg" alt="" style="height:25px; width:2px;"></div><div class="floatl vcenter elf dgray" style="margin:11px 10px;"><a id="openUserscriptOptions" href="#" class="black">Userscript</a></div>');
    };

    /**
     * Liest die Optionen aus dem HTML aus und speichert sie anschließend als JSON-String den Localstorage
     * des Browsers. Gibt im Fehlerfall eine einfache Meldung zurück.
     * @return {boolean}
     */
    this.saveOptions = function () {
        _readOptionsFromHTML();

        try {
            localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify(_options));
        } catch (e) {
            alert('Es ist ein Fehler beim Speichern aufgetreten: ' + e);
            return false;
        }

        return true;
    };

    /**
     * Funktion um die Optionen als JSON-String auszulesen und zurück zu geben. Wird für den
     * Export der Settings benutzt.
     * @returns {String}
     */
    this.getOptionsRaw = function () {
        return localStorage.getItem(LOCALSTORAGE_NAME);
    };

    /**
     * Funktion um die Optionen als JSON-String zu übergeben und in den Localstorage zu speichern. Wird für
     * den Import benutzt.
     * @param options {String}
     */
    this.setOptionsRaw = function (options) {
        localStorage.setItem(LOCALSTORAGE_NAME, options + "");
    };

    /**
     * Sichert die aktuelle Konfiguration für Backupzwecke. Falls ein Import schief geht kann so der alte
     * Stand wieder hergestellt werdne.
     */
    this.backupOptions = function () {
        localStorage.setItem(LOCALSTORAGE_NAME_BACKUP, localStorage.getItem(LOCALSTORAGE_NAME));
    };

    /**
     * Blendet das Fenster mit den Optionen ein.
     */
    this.showOptions = function () {
        _writeOptionsToHTML();

        $('div#userscriptOptionsOverlay').css('height', $(document).height()).fadeIn(200, function () {
            // Reset scroll
            $('div#userscriptOptions div.rmus-options-content').animate({scrollTop: 0}, 50);

            // Im-/Export ausblenden
            $('div#rmus-options-imexport').hide();
            $('div#userscriptOptions').fadeIn(250);
        });
    };

    /**
     * Schließt das Fenster mit den Optionen.
     */
    this.hideOptions = function () {
        $('div#userscriptOptions').fadeOut(250, function () {
            $('div#userscriptOptionsOverlay').fadeOut(200);
        });

        _readOptionsFromLocalstorage();
    };

    /**
     * Private Methode um die aktuellen Einstellung aus den Input-Feldern der Optionen auszulesen
     * und in das entsprechende Property zu schreiben.     *
     * @private
     */
    var _readOptionsFromHTML = function () {
        var userscriptOptions = {};

        // Geht alle Checkboxen durch, prüft ob die Box gechecked ist und setzt den passenden
        // Wert in den Optionen.
        $('input[type=checkbox].userscriptOptions').each(function () {
            var attr = $(this).attr('checked');
            if (attr == true || attr == 'checked') {
                userscriptOptions[$(this).attr('name')] = 'checked';
            } else {
                userscriptOptions[$(this).attr('name')] = false;
            }
        });

        // Liest den Wert der Textfelder aus.
        $('input.userscriptOptions[type!=checkbox]').each(function () {
            userscriptOptions[$(this).attr('name')] = $(this).val();
        });

        // Liest den Wert der Selects aus.
        $('select.userscriptOptions').each(function () {
            userscriptOptions[$(this).attr('name')] = $(this).val();
        });

        // Nachdem alle Daten eingelesen wurden, werden die Settings in dem Attribut gesichert.
        _options = userscriptOptions;
    };

    /**
     * Liest den JSON-String aus dem Localstorage aus und setzt das passende
     * Attribut der Pseudoklasse. Wird im Konstruktor aufgerunden, sollte also stets verfügbar sein.     *
     * @private
     */
    var _readOptionsFromLocalstorage = function () {
        // JSON-String aus dem Localstorage auslesen und wieder in ein Objekt umwandeln
        _options = JSON.parse(localStorage.getItem(LOCALSTORAGE_NAME));

        if (_options == null) {
            _options = {};
        }
    };

    /**
     * Private Methode um die Inputboxen im Menu zu setzen. Die Optionen werden aus dem
     * Attribut entnommen.
     * @private
     */
    var _writeOptionsToHTML = function () {
        var type = '';

        if (!$.isEmptyObject(_options)) {
            $.each(_options, function (index, value) {
                // Typ der Option bestimmen
                type = $('[name=' + index + ']').attr('type');

                // Checkboxen auslesen und den Wert zuweisen
                if (type == 'checkbox') {
                    // Checkboxen setzen
                    if (value == 'checked') {
                        $('[name=' + index + ']').attr('checked', true);
                    } else {
                        $('[name=' + index + ']').attr('checked', false);
                    }
                    return true;
                }

                // Textfelder auslesen und den Wert zuweisen
                if (type == 'text' || type == null) {
                    $('[name=' + index + ']').val(value);
                    return true;
                }

                // Selectboxen auslesen und den Wert zuweisen
                if (index.match('rightColumn_forum_hideForum_') != null) {
                    $('[name=' + index + ']').val(value);
                    return true;
                }
            });
        }
    };

    /**
     * Init Methode aufrufen!
     */
    _init();
}