RMUS.options = {

    version : '{{version}}',
    options : {},

    // Fügt den Link zum öffnen der Optionen ein
    insertOptionsLink : function () {
        $('div.floatl.vcenter.elf.dgray:last').after('<div class="floatl vcenter" style="padding-top:4px;"><img src="http://images.readmore.de/img/header/line.jpg" alt="" style="height:25px; width:2px;"></div><div class="floatl vcenter elf dgray" style="margin:11px 10px;"><a id="openUserscriptOptions" href="#" class="black">Userscript</a></div>');
        return false;
    },

    // Speichert die Optionen im LocalStorage
    saveOptions : function () {
        var userscriptOptions = {},
            response;

        // Alle Checkboxen
        $('input[type=checkbox].userscriptOptions').each(function () {
            var attr = $(this).attr('checked');
            if (attr == true || attr == 'checked') {
                userscriptOptions[$(this).attr('name')] = 'checked';
            }
        });

        // Alle Textfelder
        $('input.userscriptOptions[type!=checkbox]').each(function () {
            userscriptOptions[$(this).attr('name')] = $(this).val();
        });

        // Alle Selectfelder
        $('select.userscriptOptions').each(function () {
            userscriptOptions[$(this).attr('name')] = $(this).val();
        });

        // Json-Speichern
        localStorage.setItem('userscriptOptions', JSON.stringify(userscriptOptions));
        response = 'Die Optionen wurden erfolgreich gespeichert!';

        // Rückmeldung
        alert(response);
    },

    // Optionen laden
    loadOptions : function () {
        var type = '',
            userscriptOptions = JSON.parse(localStorage.getItem('userscriptOptions'));

        if (userscriptOptions != null) {
            $.each(userscriptOptions, function (index, value) {
                type = $('[name=' + index + ']').attr('type');
                if (type == 'checkbox') {
                    // Checkboxen setzen
                    if (value == 'checked') {
                        $('[name=' + index + ']').attr('checked', true);
                        return true;
                    }
                }

                if (type == 'text' || type == null) {
                    // Textfelder füllen
                    $('[name=' + index + ']').val(value);
                    return true;
                }

                // Selectboxen auswählen
                if (index.match('rightColumn_forum_hideForum_') != null) {
                    $('[name=' + index + ']').val(value);
                    return true;
                }
            });
        }

        return false;
    },

    // Optionen auslesen
    readOptions : function () {
        // Json auslesen und in Objekt umwandeln
        this.options = JSON.parse(localStorage.getItem('userscriptOptions'));

        if (this.options == null) {
            this.options = [];
        }

        return false;
    }
};