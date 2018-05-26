/**
 * ReloadPageData
 * ==============
 */

function ReloadPageData($) {

    var _self = this;
    var _pageData = "";

    /**
     * Gibt den HTML-String zurück.
     * @return {[type]} [description]
     */
    this.getPageData = function() {
        return _pageData;
    }

    /**
     * Liest die Seite neu ein.
     * @return {[type]} [description]
     */
    this.readPage = function() {
        $.ajax({
            type: "POST",
            cache: false,
            url: "https://www.readmore.de/start",
            timeout: 10000
        }).done(function(data) {
            if (data != null) {
                _pageData = data.replace(/(\r\n|\n|\r)/gm, " ").replace(/\s+/g, " ");
            }
        });
    }

}
