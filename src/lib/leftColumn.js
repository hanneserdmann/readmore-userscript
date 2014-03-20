RMUS.leftColumn = {

    www : {
        // Wer Wohin Warum ausblenden
        hideWww : function () {
            $('#leftc>div.block:eq(0), div.line2:eq(0), div.line2:eq(1)').css('display', 'none');
            return false;
        }
    },

    streams : {
        // Array in dem die Stream-Images gepusht werden
        streamsToHide : [],

        // Alle Streams ausblenden
        hideStreams : function () {
            $('#leftc>div.block:eq(1), #leftc>div.block:eq(2), #leftc>div.block:eq(4), .line2:eq(1), .line2:eq(2), .line2:eq(0)').css('display', 'none');
            return false;
        },

        // Forennavigation neuladen
        reloadStreams : function(){
            var $pageData   = $(ReloadPageData.getPageData());
            var caster      = $pageData.find('div.frontpage_stream:first').html();
            var player      = $pageData.find('div.frontpage_stream:last').html();
            var user        = $pageData.find('#profilestream').html();

            $('div.frontpage_stream:first').html(caster);
            $('div.frontpage_stream:last').html(player);
            $('#profilestream').html(user);

            return false;
        }
    }
};