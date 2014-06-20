/**
 * [Miscellaneous description]
 */

function Miscellaneous() {

    /**
     * [createFixedToolbar description]
     * @return {[type]}
     */
    this.createFixedToolbar = function() {
        $("div#header").css({
            "position": "fixed",
            "zIndex": 10,
            "top": 0
        });
        $("div#monkey").css("margin-top", "88px");
    };

    /**
     * Vergrößert den Content-Bereich um 200px.
     * Sorgt leider für ein "Flackern" wenn man die Seite lädt, da das CSS relativ spät geladen wird.
     * Lässt sich glaube ich nicht ändern im Userscript.
     */
    this.makeContentWider = function() {
        var maxWidth = 1200,
            sidebarsWidth = 466,
            padding = 4;

        $("#header > div > div").css({
            "width": maxWidth + "px"
        });

        $("#monkey").css({
            "maxWidth": maxWidth + "px"
        });

        $("#container").css({
            "width": maxWidth + "px"
        });

        $("#c_content").css({
            "width": (maxWidth - sidebarsWidth - padding) + "px"
        });
    };

    /**
     * Ändert den Pfeil im Forum so, dass er zum letzten Post springt, nicht zum letzten gelesenen.
     */
    this.changeForumArrowBehavior = function() {
        $("img[src$='arrow_last_item.gif']").each(function() {
            var e = $(this).parent("a"),
                url = e.attr("href"),
                newLink = url.substring(0, url.lastIndexOf("/")) + "&page=last#plast";

            e.attr("href", newLink);
        });
    };

}
