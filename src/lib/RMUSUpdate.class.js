/**
 * RMUSUpdate
 * ==========
 *
 * Klasse um zu checken ob ein Update verfügbar ist. Schaut einfach im Thread nach
 * ob sich die Versionsnummer verändert hat. Autoupdate ist leider im Userscript nicht möglich,
 * für die Extensions ist die Funktion eigentlich überflüssig.
 */

function RMUSUpdate(Options){

    /**
     * Aktueller Timestamp
     * @type {number}
     * @private
     */
    var _today = +new Date();

    /**
     * Aktuelle Versionsnummer
     * @type {string}
     * @private
     */
    var _currentVersion = Options.getVersion();

    /**
     * Zeigt in der Userbar den Hinweis an, dass eine neue Version des Userscriptes
     * verfügbar ist und verlinkt auf den Thread.
     * @private
     */
    var _showUpdateMsg = function(){
        $('div.floatl.vcenter.elf.dgray:last').append('<a style="color: #F00; margin-left: 10px;" href="/index.php?cont=forum/thread&threadid=111239&pagenum=1">(Update verf&uuml;gbar!)</a>');
    };

    /**
     * Feuert den Ajax Request ab um die Versionen miteinander zu vergleichen.
     * @private
     */
    var _refreshLatestVersion = function(){
        $.ajax({
            type: 'POST',
            async: true,
            cache: true,
            url: 'index.php?cont=forum/thread&threadid=111239&pagenum=1',
            contentType: 'text/html; charset=iso-8859-1;',
            dataType: 'html',
            success: function (data) {
                var posts = data.match(/\<tr class=\"post\_[^"]+\"\>[^]+?\<\/tr\>/g);

                if (posts !== null) {
                    var latestVersion   = $.trim(posts[0].match(/<span class="i">-(.+?)-<\/span>/)[1]);

                    if (_compareVersions(latestVersion, _currentVersion)) {
                        _showUpdateMsg();
                    }

                    localStorage.setItem('lastVersionCheck', JSON.stringify({
                        version: latestVersion,
                        checkDate: _today
                    }));
                }
            }
        });
    };

    /**
     * An die Funktionen werden die Versionsnummern im Format x.x.x übergeben.
     * Ist die erste Versionsnummer größer wird true, sonst false zurückgegeben. Bei der alten Methode konnte
     * es Probleme mit Versionsnummern geben (2.10.1 > 3.1.1).
     * @param v1 {String}
     * @param v2 {String}
     * @returns {boolean}
     * @private
     */
    var _compareVersions = function(v1, v2){
        var version1    = v1.split('.');
        var version2    = v2.split('.');
        var returnVal   = false;

        if      (version1[0] > version2[0]) returnVal = true;
        else if (version1[1] > version2[1]) returnVal = true;
        else if (version1[2] > version2[2]) returnVal = true;

        return returnVal;
    };

    /**
     * Triggert die Prüfung ob eine neue Version verfügbar ist. Ajax Request wird nur abgefeuert wenn die letzte
     * Prüfung 4 Stunden alt ist.
     */
    this.checkVersion = function(){
        var lastVersionCheckJSON    = localStorage.getItem('lastVersionCheck');
        var lastVersionCheck        = {};

        if (lastVersionCheckJSON) {
            lastVersionCheck = JSON.parse(lastVersionCheckJSON);
            if (lastVersionCheck.checkDate) {

                // Erst aus der Funktion springen wenn _today größer als der letzte Checkdatum + 4 Stunden ist,
                // ansonsten wird die Prüfung durchgeführt
                if (_today < (lastVersionCheck.checkDate + 4*60*60*1000)){

                    // Ist die cached Version neuer als die aktuelle Version?
                    if (_compareVersions(lastVersionCheck.version, _currentVersion)) {
                        self.showUpdateMsg();
                    }

                    // Arbeit ist getan, aus der Funktion springen!
                    return;
                }
            }
        }

        // Refresh starten!
        _refreshLatestVersion();
    };
}