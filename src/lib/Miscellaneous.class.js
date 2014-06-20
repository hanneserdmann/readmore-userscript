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
