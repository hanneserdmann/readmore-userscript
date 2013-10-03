/*global $, RMUS*/

RMUS.browser = {
    _browser: null,
    getBrowser: function () {
        if (null === RMUS.browser._browser) {
            RMUS.browser._detect();
        }

        return RMUS.browser._browser;
    },
    _detect: function () {
        var browser = 'unknown';

        if ($.browser.webkit) {
            browser = 'webkit';
        } else if ($.browser.mozilla) {
            browser = 'mozilla';
        } else if ($.browser.opera) {
            browser = 'opera';
        } else if ($.browser.msie) {
            browser = 'msie';
        }

        RMUS.browser._browser = browser;
    }
};