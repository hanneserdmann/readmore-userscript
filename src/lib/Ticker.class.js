/**
 * Ticker
 * ======
 *
 * Klasse für Funktionen die den Ticker betreffen.
 */

function Ticker() {

    /**
     * Blendent den Ticker komplett aus
     */
    this.hideTicker = function() {
        // #matches_list ausblenden
        $("#matches_list").hide()
        // <script>
        .prev()
        // .matches_filter (Filter nach Spiel) ausblenden
        .prev().hide()
        // .matches_filter (Filter nach coverage) ausblenden
        .prev().hide()
        // #matches_control (per default ausgelendet)
        .prev()
        // Überschrift ausblenden
        .prev().hide()
        // .control (Button zum öffnen der Tickereinstellungen) ausblenden
        .prev().hide();

        // <hr> unter dem Ticker ausblenden
        $("#matches_list").next().hide();
    }
}
