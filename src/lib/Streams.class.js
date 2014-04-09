/**
 * Streams
 * =======
 *
 * Ausblenden und Reloaden von Streams.
 */

function Streams(_reloadPageData) {
    this.hideStreams = function () {
        $('#leftc>div.block:eq(1), #leftc>div.block:eq(2), #leftc>div.block:eq(4), .line2:eq(1), .line2:eq(2), .line2:eq(0)').css('display', 'none');
    };

    this.reloadStreams = function () {
        var $pageData = $(_reloadPageData.getPageData());
        var caster = $pageData.find('div.frontpage_stream:first').html();
        var player = $pageData.find('div.frontpage_stream:last').html();
        var user = $pageData.find('#profilestream').html();

        $('div.frontpage_stream:first').html(caster);
        $('div.frontpage_stream:last').html(player);
        $('#profilestream').html(user);
    };
}