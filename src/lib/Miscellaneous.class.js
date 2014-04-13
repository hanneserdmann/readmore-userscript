/**
 * Miscellaneous
 * =============
 *
 * Sammlung von Funktionen die nicht besser zugeordnet werden konnten.
 */

function Miscellaneous() {
    this.searchJumpToLastpage = function () {
        var $elm = $('#content').find('a[href^="index.php?cont=forum/thread&threadid="]');
        $elm.each(function () {
            var link = $(this).attr('href').replace('&page=1', '&pagenum=lastpage');
            $(this).parent().append('<a href="' + link + '" class="floatr" title="Last Page"><img src="http://images.readmore.de/img/icons/high_next.gif" height="9" width="11" alt=""></a>');
        });
    };

    this.hideWww = function () {
        $('#leftc>div.block:eq(0), div.line2:eq(0), div.line2:eq(1)').css('display', 'none');
    };

    this.buttonScrollDown = function () {
        $('.floatr.m2:first').append('<img onclick="window.scrollTo(0, $(\'td.ten.vtop:last\').offset().top-50);" style="top: 0; height: 13px; padding-right: 2px; cursor: pointer;" alt="scroll down" src="http://readmore.thextor.de/userscript/img/arrow_down_alt1_16x16.png" />');
    };

    this.buttonScrollUp = function () {
        $('.floatl.m2.elf:last')
            .css('width', '100%')
            .append('<img onclick="window.scrollTo(0,0)" style="float: right; height: 13px; padding-right: 10px; cursor: pointer;" alt="scroll up" src="http://readmore.thextor.de/userscript/img/arrow_up_alt1_16x16.png" />');
    };

    this.reSortTitle = function () {
        var $title = $('head').find('title');
        var title = $title.text();
        var pieces = title.split('\u00BB');	// Bei den Doppelpfeilen trennen

        title = pieces[2] + ' ' + '\u00BB' + pieces[1] + '\u00BB' + ' ' + pieces[0];
        document.title = title;
    };

    this.lastPageJumpToLastPost = function () {
        var lastpage = document.location.href.match(/pagenum=lastpage/);
        if (lastpage != null) {
            if (lastpage[0] == 'pagenum=lastpage') {
                window.scrollTo(0, $('td.ten.vtop:last').offset().top - 50);
            }
        }
    };

    this.convertImageLinks = function () {
        $('a[href$=".png"], a[href$=".jpg"], a[href$=".gif"], a[href$=".bmp"]').each(function () {
            $(this).html('<img src="' + $(this).attr('href') + '" class="center" style="max-width: 98%; border: 1px solid #CDCDCD" />');
        });
    };

    this.createFixedToolbar = function () {
        $('body > div.user_band').css({
            'position': 'fixed',
            'width': '100%'
        });
        $('div#wrapper').css('margin-top', '34px');
    };

    this.convertYoutube = function () {
        $('iframe[width=380][height=270][frameborder=0]').each(function () {
            var link = 'http://www.youtube.com/watch?v=' + String($(this).attr('src')).trim().replace('http://www.youtube.com/embed/', '');
            $(this).after('<a href="' + link + '">' + link + '</a>');
            $(this).remove();
        });
    };

    this.stopAvatarAnimation = function () {
        [].slice
            .apply(document.images)
            .filter(_isGifImage)
            .map(_freeze_gif);

        function _isGifImage(i) {
            return /^(?!data:).*?\/user.*?\.gif/i.test(i.src);
        }

        function _freeze_gif(i) {
            var c = document.createElement('canvas');
            var w = c.width = i.width;
            var h = c.height = i.height;
            c.getContext('2d').drawImage(i, 0, 0, w, h);
            try {
                i.src = c.toDataURL("image/gif");
            } catch (e) {
                for (var j = 0, a; a = i.attributes[j]; j++)
                    c.setAttribute(a.name, a.value);
                i.parentNode.replaceChild(c, i);
            }
        }
    };
}