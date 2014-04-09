function Ticker(_reloadPageData) {
    this.hideTicker = function () {
        $('#tickr, div.line3:eq(0), div.line3:eq(1)').css('display', 'none');
    };

    this.reloadTicker = function () {
        var reloadData = $(_reloadPageData.getPageData()).find('#nav_matchticker').html();

        if (reloadData && reloadData.length > 0) {
            $('#nav_matchticker').html(reloadData);
        }

        return false;
    };
}