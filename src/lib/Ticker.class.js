/**
 * Ticker
 * ======
 *
 * Klasse für Funktionen die den Ticker betreffen.
 */

function Ticker($, _content) {

    /**
     * Blendent den Ticker komplett aus
     */
    this.hideTicker = function() {
        _content.get('tickerComplete').hide();
    };
}
