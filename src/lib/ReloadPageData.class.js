/**
 * ReloadPageData
 * ==============
 *
 * Ermöglicht das Posten ohne Seitenrefresh. Der Post wird über
 * Ajax abgeschickt, danach wird die Seite im Hintergrund nachgeladen.
 */

function ReloadPageData(){

    var _self = this;

    /**
     * HTML String der Readmore-Stream-Übersicht,
     * daraus werden verschiedene Teile der Page geupdated.
     * @type {string}
     * @private
     */
    var _pageData = '';

    /**
     * Gibt den HTML String zurück
     * @returns {string}
     */
    this.getPageData = function(){
      return _pageData;
    };

    /**
     * Liest die Seite neu ein.
     * Die Funktion ist asynchron.
     * @returns {boolean}
     */
    this.readPage = function(){
        $.ajax({
            type: 'POST',
            async: true,
            cache: false,
            url: 'http://www.readmore.de/index.php?cont=userstream_overview',
            contentType: 'text/html; charset=iso-8859-1;',
            dataType: 'html',
            timeout: 10000,
            success: function (data) {
                if(data != null){
                    // Prüft auf Fehler beim Laden der Seite
                    if (data.search('<div class="error">') != -1) {
                        _self.readPage();
                    } else {
                        _pageData = data.replace(/(\r\n|\n|\r)/gm,' ').replace(/\s+/g," ");
                    }
                }
            },
            beforeSend: function(jqXHR) {
                jqXHR.overrideMimeType('text/html;charset=iso-8859-1');
            }
        });
    };
}