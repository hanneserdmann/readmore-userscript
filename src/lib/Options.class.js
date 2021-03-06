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
     * Gibt das Data Object zurück
     * @returns {*}
     */
    this.getData = function(key){
        return _options['dataStorage'][key];
    };

    /**
     * Setzt eine Value in dem Data Object.
     * @param key
     * @param value
     */
    this.setData = function(key, value){
        _options['dataStorage'][key] =  value;
    };

    /**
     * Speichert die Optionen ohne sie neu aus dem HTML auszulesen.
     */
    this.saveCurrentOptions = function(){
        localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify(_options));
    };

    /**
     * Gibt alle Optionen zurück, die auf die "Wildcard" zutreffen.
     * @param {String} what
     */
    this.getOptionsFuzzy = function(what) {
        var options = {},
            len = what.length;

        for (var opt in _options) {
            if (_options.hasOwnProperty(opt) && what === opt.substr(0, len)){
                options[opt] = _options[opt];
            }
        }

        return options;
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
        $('div#header li.ucp').after('<li class="userscriptOptionsLi"><a id="openUserscriptOptions" href="" title="Userscript"><i class="rmus-icon rmus-icon-cog"></i></a> | </li>');
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
        _readSortableLists();

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
        _self.writeOptionsToHTML();
        _displaySortableLists();

        $('div#userscriptOptionsOverlay').fadeIn(200, function() {
            // Reset scroll
            $('div#userscriptOptions div.rmus-options-content').animate({
                scrollTop: 0
            }, 50);

            // Im-/Export ausblenden
            $('div#rmus-options-imexport').hide();
            $('div#userscriptOptions').fadeIn(250);

            // Dynamische Content-Höhe
            $(window).ready(function() {
                var height =  $(window).height()-350; $('div#userscriptOptions div.rmus-options-content').height(height);
                $(window).resize(function(){var height =  $(window).height()-350; $('div#userscriptOptions div.rmus-options-content').height(height);});
            });
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

        // Data Storage wieder hinzufügen, wird immer mit durchgeschliffen
        userscriptOptions['dataStorage'] = _options['dataStorage'];

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

        if (typeof _options['dataStorage'] === 'undefined'){
            _options['dataStorage'] = {};
        }
    };

    /**
     * Private Methode um die Inputboxen im Menu zu setzen. Die Optionen werden aus dem
     * Attribut entnommen.
     */
    this.writeOptionsToHTML = function() {
        var type = '',
            inputTypes = ['text', 'color', 'number'];

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
                }

                // Textfelder auslesen und den Wert zuweisen
                if (($.inArray(type, inputTypes) !== -1) || type == null) {
                    $('[name=' + index + ']').val(value);
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

        var toggleBtn = function ($el, opened) {
            if (opened) {
                $el.removeClass('rmus-icon-minus-circled').addClass('rmus-icon-plus-circled');
            } else {
                $el.removeClass('rmus-icon-plus-circled').addClass('rmus-icon-minus-circled');
            }
        }

        // Eventhandler für die +/- Buttons
        $('[id*=toggle_sub]').click(function() {
            var $el = $(this);

            toggleBtn($el, $el.hasClass('rmus-icon-minus-circled'));
        });

        // Auf- und zuklappen der Unterkategorien
        $('#toggle_sub_middleColumn_forum_reloadPosts_readNewPosts').click(function() {
            $('.sub_middleColumn_forum_reloadPosts_readNewPosts').toggle();
            $('.sub_middleColumn_forum_reloadPosts_markNewPosts').hide();
            $('.sub_middleColumn_forum_reloadPosts_endlessPage').hide();
            toggleBtn($("#toggle_sub_middleColumn_forum_reloadPosts_endlessPage"), true);
            toggleBtn($("#toggle_sub_middleColumn_forum_reloadPosts_markNewPosts"), true);
        });
        $('#toggle_sub_middleColumn_forum_reloadPosts_endlessPage').click(function() {
            $('.sub_middleColumn_forum_reloadPosts_endlessPage').toggle();
        });
        $('#toggle_sub_middleColumn_forum_reloadPosts_markNewPosts').click(function() {
            $('.sub_middleColumn_forum_reloadPosts_markNewPosts').toggle();
        });
        $('#toggle_sub_rightColumn_headlines_hideHeadlines').click(function() {
            $('.sub_rightColumn_headlines_hideHeadlines').toggle();
            $(".sub_rightColumn_headlines_sections").hide();
            toggleBtn($("#toggle_sub_rightColumn_headlines_sections"), true);
        });
        $('#toggle_sub_rightColumn_forum_hideForum').click(function() {
            $('.sub_rightColumn_forum_hideForum').toggle();
            $('.sub_rightColumn_forum_sections').hide();
            toggleBtn($("#toggle_sub_rightColumn_forum_sections"), true);
        });
        $('#toggle_sub_rightColumn_forum_sections').click(function() {
            $('.sub_rightColumn_forum_sections').toggle();
        });
        $('#toggle_sub_rightColumn_headlines_sections').click(function() {
            $('.sub_rightColumn_headlines_sections').toggle();
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
        /*$('#toggle_sub_miscellaneous_syncOptions').click(function() {
            $('.sub_miscellaneous_syncOptions').toggle();
        });*/
    };

    /**
     * Die Inhalte der Sortierbaren Listen werden ausgelesen
     * @private
     */
    var _readSortableLists = function(){
        var headlineMappings    = new Headlines($, _self, '').getMappings(),
            headlineDiv         = document.getElementById('sub_rightColumn_headlines_hideHeadlines_sortable'),
            $headlineListUsed   = $(headlineDiv.children[1].children[1]),

            forumMappings       = new ForumNavigation($, _self, '', '', '').getMappings(),
            forumDiv            = document.getElementById('sub_rightColumn_forum_sections_sortable'),
            $forumListUsed      = $(forumDiv.children[1].children[1]);

        // Headlines
        for(var headline in headlineMappings){
            var optionName  = 'rightColumn_headlines_item_' + headline,
                $element    = $headlineListUsed.find('li[data-name="' + optionName + '"]');

            // Da nur die Used Liste durchsucht wird, werden alle anderen Einträge auf 0 gesetzt
            _options[optionName] = ($element.length) ? Number($headlineListUsed.children().index($element)) + 1 : 0;
        }

        // Forum
        for(var forum in forumMappings){
            var optionName  = 'rightColumn_forums_item_' + forum,
                $element    = $forumListUsed.find('li[data-name="' + optionName + '"]');

            // Da nur die Used Liste durchsucht wird, werden alle anderen Einträge auf 0 gesetzt
            _options[optionName] = ($element.length) ? Number($forumListUsed.children().index($element)) + 1 : 0;
        }
    };

    /**
     * Sortierbare Listen erstellen
     * @private
     */
    var _displaySortableLists = function(){
        var headlineMappings    = new Headlines($, _self, '').getMappings(),
            headlineDiv         = document.getElementById('sub_rightColumn_headlines_hideHeadlines_sortable'),
            $headlineListUnused = $(headlineDiv.children[0].children[1]),
            $headlineListUsed   = $(headlineDiv.children[1].children[1]),

            forumMappings       = new ForumNavigation($, _self, '', '', '').getMappings(),
            forumDiv            = document.getElementById('sub_rightColumn_forum_sections_sortable'),
            $forumListUnused    = $(forumDiv.children[0].children[1]),
            $forumListUsed      = $(forumDiv.children[1].children[1]);

        // Listen leeren
        $headlineListUnused.children().add($headlineListUsed.children()).remove();
        $forumListUnused.children().add($forumListUsed.children()).remove();

        // Headline Listen auslesen
        for(var headline in headlineMappings){
            var optionName  = 'rightColumn_headlines_item_' + headline,
                listElement = (typeof _options[optionName] === 'undefined' || Number(_options[optionName]) !== 0) ? $headlineListUsed : $headlineListUnused,
                sortValue   = (typeof _options[optionName] === 'undefined') ? 1 : Number(_options[optionName]);

            listElement.append('<li data-sort="' + sortValue + '" data-name="' + optionName + '">' + headlineMappings[headline] + '</li>')
        }

        // Forum Listen auslesen
        for(var forum in forumMappings){
            var optionName  = 'rightColumn_forums_item_' + forum,
                listElement = (typeof _options[optionName] === 'undefined' || Number(_options[optionName]) !== 0) ? $forumListUsed : $forumListUnused,
                sortValue   = (typeof _options[optionName] === 'undefined') ? 1 : Number(_options[optionName]);

            listElement.append('<li data-sort="' + sortValue + '" data-name="' + optionName + '">' + forumMappings[forum] + '</li>')
        }

        // Elemente in die korrekte Reihenfolge bringen
        $headlineListUsed.find('li').sort(_sortLiElementsByData).appendTo($headlineListUsed);
        $forumListUsed.find('li').sort(_sortLiElementsByData).appendTo($forumListUsed);

        // Headline Listen sortierbar
        $('.conncected.list.headlines').sortable({
            connectWith: '.conncected.list.headlines'
        });

        // Forum Listen sortierbar
        $('.conncected.list.forum').sortable({
            connectWith: '.conncected.list.forum'
        });
    };

    /**
     * Methode um die sortierbaren Listen bei der Initialisierung zu sortieren.
     * @param elmOne
     * @param elmTwo
     * @returns {number}
     * @private
     */
    var _sortLiElementsByData = function(elmOne, elmTwo){
        var dataOne     = $(elmOne).data(),
            dataTwo     = $(elmTwo).data(),
            returnVal   = 0;

        if (dataOne['sort'] === dataTwo['sort']){
            returnVal = (dataOne['name'] > dataTwo['name']) ? 1 : -1;
        }
        else returnVal = (dataOne['sort'] > dataTwo['sort']) ? 1 : -1;

        return returnVal;
    };

    /**
     * Init Methode aufrufen!
     */
    _init();
}
