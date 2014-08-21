/**
 * [Miscellaneous description]
 */

function Miscellaneous($, _content) {

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
            leftSidebarWidth = $("#c_left").outerWidth(),
            rightSidebarWidth = $("#c_right").outerWidth(),
            sidebarsWidth = !leftSidebarWidth ? rightSidebarWidth + 1 : !rightSidebarWidth ? leftSidebarWidth + 1 : (leftSidebarWidth && rightSidebarWidth) ? leftSidebarWidth + rightSidebarWidth : 1200,
            padding = 4,
            siteLocation = new SiteLocation($);

        $("#header > div > div").css({
            "width": maxWidth + "px"
        });

        $("#monkey").css({
            "maxWidth": maxWidth + "px",
            "width": maxWidth + "px"
        });

        $("#container").css({
            "width": maxWidth + "px"
        });

        $("#c_content").css({
            "width": (maxWidth - sidebarsWidth - padding) + "px"
        });

        // fixt den Livestream Bereich
        if(siteLocation.getLocation("livestreams")) {
            // vergroessert die Livestream Thumbnails im Highlight Bereich um 30%
            $("#c_content > .livestream_highlights").find(".livestream_cap > img").each(function() {
                $(this).css("height", $(this).height() * 1.3 + "px");
                $(this).css("width", $(this).width() * 1.3 + "px");
            });
        }

        // fixt den VOD Bereich
        if(siteLocation.getLocation("vods")) {
            //vergroessert die VOD Thumbnails im Highlight Bereich um 30%
            $("#c_content > .vod_highlights").find(".vod_thumb > img").each(function() {
                $(this).css("height", $(this).height() * 1.3 + "px");
                $(this).css("width", $(this).width() * 1.3 + "px");
            });

            // veraendert die Margins der VOD Thumbnails, damit sie sauber in einer Reihe angezeigt werden
            $("#c_content > .vod_videos_list > li").each(function() {
                $(this).css("margin", "0px 10px 10px 10px");
            });
        }

        // fixt den Gallery Bereich
        if(siteLocation.getLocation("gallery")) {
            // verandert die Margins der Thumbnails, damit sie saber in einer Reihe angezeigt werden
            $("#c_content > .gallery_albums > li").each(function() {
                $(this).css("margin", "0px 5px 5px 10px");
            });
        }

        // fixt den verzerrten YouTube Player im Forum
        if(siteLocation.getLocation("forums")) {
            $(".forum_ed_youtube embed").each(function() {
                $(this).css("height", $(this).width() * (9 / 16) + "px");
            });
        }

        // fixt den verzerrten YouTube Player in den News
        if (siteLocation.getLocation("news")) {
            $("iframe").each(function () {
                if ($(this).attr("src").match(/^http:\/\/(?:www\.)?youtube.com\/embed\/\w+(&\S*)?$/)) {
                    $(this).css("height", $(this).width() * (9 / 16) + "px");
                }
            })
        }

        // fixt den verzerrten YouTube Player in den Schlagzeilen
        if (siteLocation.getLocation("headlines")) {
            $("iframe").each(function () {
                if ($(this).attr("src").match(/^http:\/\/(?:www\.)?youtube.com\/embed\/\w+(&\S*)?$/)) {
                    $(this).css("height", $(this).width() * (9 / 16) + "px");
                }
            })
        }
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

    /**
     * Sortiert den Thread-Titel um, sodass dieser an erster Stelle steht.
     */
    this.resortTitle = function () {
        var title = $('head').find('title').text();
        var pieces = title.split(' \u00BB Thread: ');

        document.title = pieces.reverse().join(' \u00BB ');
    };

    this.buttonScrollUp = function(){
        $('#c_content h2:last').append('<i id="icon_miscellaneous_buttonScrollUp" class="rmus-icon rmus-icon-angle-double-up" title="Nach oben scrollen"></i>')
            .find('#icon_miscellaneous_buttonScrollUp')
            .on('click', function(){
                window.scrollTo(0, 0);
            });
    };

    this.buttonScrollDown = function(){
        $('#c_content h1:first').append('<i id="icon_miscellaneous_buttonScrollDown" class="rmus-icon rmus-icon-angle-double-down" title="Nach unten scrollen"></i>')
            .find('#icon_miscellaneous_buttonScrollDown')
            .on('click', function(){
                window.scrollTo(0, document.body.offsetHeight);
            });
    }
}
