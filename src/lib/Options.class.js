/**
 * Options
 * =======
 *
 * Pseudoklasse um die Optionen des Userscript zu handeln. Braucht zum instanziieren keine weiteren
 * Parameter, ruft direkt die _init() Methode auf um die Settings auszulesen.
 */

function Options($) {
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
     * Um das Object aus privaten Methoden heraus ansprechen zu können.
     * @type {Options}
     * @private
     */
    var _self = this;

    /**
     * Version des Scriptes, wird durch GrundJS im Buildprozess ersetzt.
     * @type {string}
     * @private
     */
    var _version = '{{version}}';

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
    var _init = function() {
        // Optionen aus dem Localstorage auslesen
        _readOptionsFromLocalstorage();
    };

    /**
     * Funktion um den Wert einer bestimmten Option zurückzugeben.
     * @param {String} what
     */
    this.getOption = function(what) {
        return _options[what];
    };

    /**
     * Gibt die aktuelle Version zurück.
     * @returns {string}
     */
    this.getVersion = function() {
        return _version;
    };

    /**
     * Fügt zuerst den Quellcode der Optionen in die Seite ein, danach den Link / das Icon zum öffnen
     * und zuletzt die diversen Eventhandler.
     */
    this.insertOptions = function() {
        // Optionen einfügen
        $('body').append('{{optionshtml}}');

        // Link einfügen
        $('div#header li.ucp').after('<li class="userscriptOptionsLi" style="margin-left: 20px; color: #dadada; font-size: 16px; padding-top: 0;margin-right: 5px;"><a id="openUserscriptOptions" href="" title="Userscript" style="margin-right: 3px;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABuklEQVR42n2Sv09TURTHvyCgQkKEgcWFhNHVEA1LYwQHEweSxjBgYFBjjLUlLZba99iMrDq5+S8wMTlJ0xAWSXTAxMGoiRJCE42WQvsOn3v7bEqbcJPzzrvnfL/n1z3S/5OxiwrsnsLog0I7RH/kfl2r1qesjemZXVHeRiTr0amzYBf03LKQKoANHUFc07Jd1YrN4nuDzOuRI7uzagNKENURA0uRac8TPTn6piB6T5Ad7jWv83ZXSThESWJ4rKLdB7TO/78WsVOcr2gvKX1IgLeIvI/xB/oPgAb/To6QWvwfeaLDFu0GGc+pK4MDFe0LlaTRd7hvenLTV8Z+rTmg0L52EOt+KK4cFzm020g19v1EXkFeFFFvAnyN41dMPsb2Qg9skMi9DGOmu6rotwD0M+4pX3/rGaJdyA9VsFvY3vkqTg+qJD2xYUAJLuUWsTmQGvdq3F/DZw2pKrAD8E+lnE34nkL7e+YzBNEGvaWQJeSylLZLftUCv2LuCT6hS8j3tp72fJYka+laa64dn4yNAlzA+ZZoc8hkXEU9zlih3xxtnVfXcUa3h36dCFawacifkW0CrjDd8fYFPwEUiX/TL0OkfAAAAABJRU5ErkJggg==" style="width: 15px; margin-top: 4px;"/></a> | </li>');
        $('div#header li.socials').css('margin-left', '0px');

        // Eventhandler
        _addEventHandler();
    };

    /**
     * Liest die Optionen aus dem HTML aus und speichert sie anschließend als JSON-String den Localstorage
     * des Browsers. Gibt im Fehlerfall eine einfache Meldung zurück.
     * @return {boolean}
     */
    this.saveOptions = function() {
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
    this.getOptionsRaw = function() {
        return localStorage.getItem(LOCALSTORAGE_NAME);
    };

    /**
     * Funktion um die Optionen als JSON-String zu übergeben und in den Localstorage zu speichern. Wird für
     * den Import benutzt.
     * @param options {String}
     */
    this.setOptionsRaw = function(options) {
        localStorage.setItem(LOCALSTORAGE_NAME, options + "");
    };

    /**
     * Sichert die aktuelle Konfiguration für Backupzwecke. Falls ein Import schief geht kann so der alte
     * Stand wieder hergestellt werdne.
     */
    this.backupOptions = function() {
        localStorage.setItem(LOCALSTORAGE_NAME_BACKUP, localStorage.getItem(LOCALSTORAGE_NAME));
    };

    /**
     * Blendet das Fenster mit den Optionen ein.
     */
    this.showOptions = function() {
        _writeOptionsToHTML();

        $('div#userscriptOptionsOverlay').css('height', $(document).height()).fadeIn(200, function() {
            // Reset scroll
            $('div#userscriptOptions div.rmus-options-content').animate({
                scrollTop: 0
            }, 50);

            // Im-/Export ausblenden
            $('div#rmus-options-imexport').hide();
            $('div#userscriptOptions').fadeIn(250);
        });
    };

    /**
     * Schließt das Fenster mit den Optionen.
     */
    this.hideOptions = function() {
        $('div#userscriptOptions').fadeOut(250, function() {
            $('div#userscriptOptionsOverlay').fadeOut(200);
        });

        _readOptionsFromLocalstorage();
    };

    /**
     * Private Methode um die aktuellen Einstellung aus den Input-Feldern der Optionen auszulesen
     * und in das entsprechende Property zu schreiben.     *
     * @private
     */
    var _readOptionsFromHTML = function() {
        var userscriptOptions = {};

        // Geht alle Checkboxen durch, prüft ob die Box gechecked ist und setzt den passenden
        // Wert in den Optionen.
        $('input[type=checkbox].userscriptOptions').each(function() {
            var attr = $(this).prop('checked');
            if (attr === true) {
                userscriptOptions[$(this).attr('name')] = 'checked';
            } else {
                userscriptOptions[$(this).attr('name')] = false;
            }
        });

        // Liest den Wert der Textfelder aus.
        $('input.userscriptOptions[type!=checkbox]').each(function() {
            userscriptOptions[$(this).attr('name')] = $(this).val();
        });

        // Liest den Wert der Selects aus.
        $('select.userscriptOptions').each(function() {
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
    var _readOptionsFromLocalstorage = function() {
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
    var _writeOptionsToHTML = function() {
        var type = '';

        if (!$.isEmptyObject(_options)) {
            $.each(_options, function(index, value) {
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
     * Fügt die Eventhandler hinzu
     * @private
     */
    var _addEventHandler = function() {

        // Eventhandler für die Optionen setzen
        $('#saveUserscriptOptions').click(function() {
            if (_self.saveOptions()) {
                _self.hideOptions();
            }
        });

        $('#openUserscriptOptions').click(function(e) {
            e.preventDefault();
            _self.showOptions();
        });

        $('#closeUserscriptOptions,#userscriptOptionsOverlay').click(function(e) {
            e.preventDefault();
            _self.hideOptions();
        });

        $('div#userscriptOptions input.imexp').click(function() {
            var $this = $(this),
                imexportContainer = $('div#rmus-options-imexport'),
                importBtn = $('div#rmus-options-imexport input#importUserscriptOptionsBtn'),
                helpContainer = $('div.rmus-options-imexport-help', imexportContainer),
                textarea = $('textarea', imexportContainer);

            imexportContainer.hide();

            if ($this.prop('id') === 'importUserscriptOptions') {
                importBtn.show();
                helpContainer.text('Füge den exportierten JSON-String in das Textfeld ein:');
                textarea.val('');
                textarea.focus();
            } else {
                var opts = _self.getOptionsRaw();

                if (opts === 'null') {
                    alert('Es sind keine gespeicherten Optionen zum Exportieren vorhanden. Bitte speichere deine Optionen zuerst ab.');
                    return;
                }

                importBtn.hide();
                helpContainer.text('Kopiere diesen JSON-String für den späteren Import:');
                textarea.val(opts);
            }

            imexportContainer.slideToggle(250, function() {
                textarea.select();
            });
        });
        $('#imexportUserscriptOptionsCloseBtn').click(function() {
            $('div#rmus-options-imexport').hide();
        });
        $('#importUserscriptOptionsBtn').click(function() {
            var opts = $('div#rmus-options-imexport textarea').val(),
                validJson = true;

            try {
                JSON.parse(opts);
            } catch (e) {
                validJson = false;
            }

            if (validJson) {
                _self.backupOptions();
                _self.setOptionsRaw(opts);

                // Optionen schließen, damit sie neu geladen werden beim nächsten öffnen.
                _self.hideOptions();

                alert('Die Optionen wurden erfolgreich importiert! Du musst die Seite neu laden, damit die Optionen vollständig übernommen werden.');
            } else {
                alert('Die Optionen konnten nicht importiert werden! Der eingegebene Text ist kein valider JSON-String.');
            }
        });

        var plusLink = "http://readmore.thextor.de/userscript/img/plus_alt_16x16.png",
            minusLink = "http://readmore.thextor.de/userscript/img/minus_alt_16x16.png";

        // Eventhandler für die +/- Buttons
        $('[id*=toggle_sub]').click(function() {
            var img = $(this).attr('src').trim();

            if (img == plusLink) {
                $(this).attr('src', minusLink);
            } else {
                $(this).attr('src', plusLink);
            }
        });

        // Auf- und zuklappen der Unterkategorien
        $('#toggle_sub_middleColumn_forum_reloadPosts_readNewPosts').click(function() {
            $('.sub_middleColumn_forum_reloadPosts_readNewPosts').toggle();
            $('.sub_middleColumn_forum_reloadPosts_markNewPosts').css('display', 'none');
            $('.sub_middleColumn_forum_reloadPosts_endlessPage').css('display', 'none');
            $("#toggle_sub_middleColumn_forum_reloadPosts_endlessPage").attr("src", plusLink);
            $("#toggle_sub_middleColumn_forum_reloadPosts_markNewPosts").attr("src", plusLink);
        });
        $('#toggle_sub_middleColumn_forum_reloadPosts_endlessPage').click(function() {
            $('.sub_middleColumn_forum_reloadPosts_endlessPage').toggle();
        });
        $('#toggle_sub_middleColumn_forum_reloadPosts_markNewPosts').click(function() {
            $('.sub_middleColumn_forum_reloadPosts_markNewPosts').toggle();
        });
        $('#toggle_sub_rightColumn_headlines_hideHeadlines').click(function() {
            $('.sub_rightColumn_headlines_hideHeadlines').toggle();
        });
        $('#toggle_sub_rightColumn_forum_hideForum').click(function() {
            $('.sub_rightColumn_forum_hideForum').toggle();
            $('.sub_rightColumn_forum_sections').css('display', 'none');
        });
        $('#toggle_sub_rightColumn_forum_sections').click(function() {
            $('.sub_rightColumn_forum_sections').toggle();
        });
        $('#toggle_sub_miscellaneous_reloadMessages').click(function() {
            $('.sub_miscellaneous_reloadMessages').toggle();
        });
        $('#toggle_sub_miscellaneous_ignoreUser').click(function() {
            $('.sub_miscellaneous_ignoreUser').toggle();
        });
        $('#toggle_sub_middleColumn_forum_scrollForNewPage').click(function() {
            $('.sub_middleColumn_forum_scrollForNewPage').toggle();
        });
    };

    /**
     * Init Methode aufrufen!
     */
    _init();
}
