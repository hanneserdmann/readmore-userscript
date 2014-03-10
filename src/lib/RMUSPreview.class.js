/**
 * RMUSPreview
 * ===========
 *
 * Klasse für die Preview eines Readmore.de Posts.
 */

function RMUSPreview(){
    /**
     * UserID des aktuellen Benutzers
     * @type {number}
     * @private
     */
    var _userid = 0;

    /**
     * Name des aktuellen Users
     * @type {string}
     * @private
     */
    var _username = '';

    /**
     * Ist die Vorschau aktiv oder nicht?
     * @type {boolean}
     * @private
     */
    var _previewIsEnabled = false;

    /**
     * Tags die in der Vorschau ersetzt werden müssen.
     * @type {{\\[b\\]: string, \\[/b\\]: string, \\[i\\]: string, \\[/i\\]: string, \\[u\\]: string, \\[/u\\]: string, \\[s\\]: string, \\[/s\\]: string, \\[hr\\]: string, \\[center\\]: string, \\[/center\\]: string, \\[spoiler\\]: string, \\[/spoiler\\]: string, \\[youtube]: string, \\[/youtube]: string, \\[img]: string, \\[/img]: string, \\[image]: string, \\[/image]: string, \\[url]: string, \\[/url]: string, \\[/color]: string, \\[list]: string, \\[/list]: string, \\[\\*]: string}}
     * @private
     */
    var _previewTags = {
        '\\[b\\]'           : '<br>',
        '\\[/b\\]'          : '</b>',
        '\\[i\\]'           : '<i>',
        '\\[/i\\]'          : '</i>',
        '\\[u\\]'           : '<u>',
        '\\[/u\\]'          : '</u>',
        '\\[s\\]'           : '<s>',
        '\\[/s\\]'          : '</s>',
        '\\[hr\\]'          : '<hr style="margin:0; padding:0;">',
        '\\[center\\]'      : '<center>',
        '\\[/center\\]'     : '</center>',
        '\\[spoiler\\]'     : '<div><a href="#" onclick="spoiler(this);return false;" class="spoiler-link" style="background-image: url(http://images.readmore.de/img/icons/plus.jpg);">Spoiler</a><div class="spoiler-cont" style="display: none; ">',
        '\\[/spoiler\\]'    : '</div></div>',
        '\\[youtube]'       : '<iframe width="380" height="270" src="http://www.youtube.com/embed/',
        '\\[/youtube]'      : '" frameborder="0" allowfullscreen></iframe><br>',
        '\\[img]'           : '<img src="',
        '\\[/img]'          : '" alt="" title="" class="center" style="max-width:98%; border: 1px solid #CDCDCD;">',
        '\\[image]'         : '<img src="',
        '\\[/image]'        : '" alt="" title="" class="center" style="max-width:98%; border: 1px solid #CDCDCD;">',
        '\\[url]'           : '<a>',
        '\\[/url]'          : '</a>',
        '\\[/color]'        : '</span>',
        '\\[list]'          : '<ul style="margin: 0; padding: 0; padding-left: 20px;">',
        '\\[/list]'         : '</ul>',
        '\\[\\*]'           : '<li style="margin: 0; padding: 0; list-style-image: url(http://images.readmore.de/img/icons/else.png);">'
    };

    /**
     * jQuery Element der Preview. Damit das entsprechende Element nicht immer wieder ausgelesen werden muss.
     * Wird am ende der _init-Methode gesetzt.
     * @type {{}}
     * @private
     */
    var _previewElement = {};

    /**
     * Wie bei _previewElement: Wird 1x selektiert, damit die Arbeit später entfällt.
     * @type {{}}
     * @private
     */
    var _c_comment = {};

    /**
     * Wie bei _c_comment: Wird 1x selektiert, damit die Arbeit später entfällt.
     * @type {{}}
     * @private
     */
    var _previewtable = {};

    /**
     * Missbrauche diese Funktion einfach mal als Konstuktor-Ersatz. Finde es einfach schöner
     * dafür eine separate Methode zu haben. Wird als letzte Zeile ausgerufen.
     * Liest UserID und Name aus, fügt dann das Grundgerüst für die Preview ein.
     * @private
     */
    _init = function(){
        _readUseridAndUsername();
        _insertPreviewHtml();
        _initializePreview();

        _previewElement = $('#preview');
        _c_comment      = $('#c_comment');
        _previewtable   = $('#previewtable');
    };

    /**
     * Fügt den Button zum ein und ausblenden sowie die Grundlage für das Gerüst der Vorschau
     * auf die Readmore Seite ein.
     * @private
     */
    var _insertPreviewHtml = function () {
        var $div = $('.center:last');

        $('<br /><table border="0" id="previewtable" style="display: none"><tr><td valign="top" id="previewleft" style="border: solid 1px #dddddd; border-right: none; width:110px; height:auto; min-height: 150px;"></td><td valign="top" id="preview" style="font-size: 11px; border: solid 1px #dddddd; width:408px; height:auto; min-height: 150px;"></td><td><img style="border: none; margin: 0; padding: 0;" src="http://readmore.thextor.de/userscript/img/minheight150.gif"></td></tr><tr><td colspan="2" style="border: solid 1px #dddddd; border-top: none; background-color: #DEDEDE; height: 12px;"></td><td style="border: none;"></td></table>').insertAfter($div);
        $('<input type="button" value="Vorschau ein-/ausblenden" class="form" id="triggerPreview" style="margin-left: 10px;">').appendTo($div);
    };

    /**
     * Grundgerüst für die Preview einfügen. Userid und Name sind schon ausgelesen, Button zum einblenden ist auch
     * schon vorhanden.
     * @private
     */
    var _initializePreview = function () {
        var d           = new Date();
        var timedata    = {};
        var rows        = [];

        timedata.day     = d.getDate();
        timedata.month   = d.getMonth() + 1;
        timedata.year    = d.getFullYear();
        timedata.hours   = d.getHours();
        timedata.minutes = d.getMinutes();

        $.each(timedata, function (key, value) {
            if (String(value).length == 1) {
                timedata[key] = '0' + value;
            }
        });

        rows.push('<span style="font-size: 10px;"><a href="javascript:void(0)">#1337</a></span><br>');
        rows.push('<span style="font-size: 10px;">' + timedata.day + '.' + timedata.month + '.' + timedata.year + ', ' + timedata.hours + ':' + timedata.minutes + '</span><br>');
        rows.push('<span style="font-size: 11px;"><img style="height: 11px;" src="http://images.readmore.de/img/icons/online.gif"><img src="http://readmore.thextor.de/userscript/img/space.gif" style="border: none; height: 1px; width: 5px;"><a class="bml" href="index.php?cont=profile&amp;id=' + _userid + '" title="' + _username + '">' + _username + '</a></span><br><br>');
        rows.push('<span style="font-size: 10px;">Beitr&auml;ge: 1337</span><br><br>');
        rows.push('<a href="index.php?cont=profile&amp;id=' + _userid + '" title="' + _username + '"><img src="' + $('.floatl.vcenter.elf.dgray.vcenter:first').html().match(/src="(.+?)" alt/)[1] + '"></a>');

        $('#previewleft').html(rows.join(''));
    };

    /**
     * Liest UserID und UserName aus.
     * @private
     */
    var _readUseridAndUsername = function () {
        var profileLinkHTML = $('div.floatl.vcenter.elf.dgray:eq(1)').html();

        _userid     = profileLinkHTML.match(/id=(.+?)"/)[1];
        _username   = profileLinkHTML.match(/">(.+?)<\/a>/)[1];
    };

    /**
     * Ersetzt den Text mit BBCODE durch HTML-Code.
     * Herzstück der Preview.
     * @param raw_post  {String}    Beitrag mit BBCODE
     * @returns         {String}    Beitrag übersetzt nach HTML
     * @private
     */
    var _convertToPreview = function(raw_post){
        var text            = raw_post;
        var urlPreview      = '';
        var colorPreview    = '';
        var quotes          = '';

        // BB-Code ersetzen
        $.each(_previewTags, function (key, value) {
            var regEx = new RegExp(key, 'g');
            text = text.replace(regEx, value);
        });

        // URL mit Link
        urlPreview = text.match(/\[url=[^\]]+/g);
        if (urlPreview) {
            $.each(urlPreview, function (key) {
                var link    = urlPreview[key].replace(/\[url=/, '').replace(/http:\/\//, '').replace(/https:\/\//, '');
                var regEx   = new RegExp('\\' + urlPreview[key].replace(/\(/g, '\\(').replace(/\)/g, '\\)').replace(/\?/g, '\\?') + '\\]');

                text = text.replace(regEx, '<a href="http://' + link + '">');
            });
        }

        // Color
        colorPreview = text.match(/\[color=[^\]]+/g);
        if (colorPreview) {
            $.each(colorPreview, function (key) {
                var color = text.match(/\[color=(.+?)\]/)[1];
                var regEx = new RegExp('\\' + colorPreview[key] + '\\]');

                text = text.replace(regEx, '<span style="color: ' + color + ';">');
            });
        }

        // Quote
        quotes = text.match(/\[quot(.*?)\]/g);
        if (quotes != null) {
            $.each(quotes, function (index, value) {
                var quoteHead   = '<div class="bggray2 bogray2 quote_titel">Zitat';
                var name        = value.match(/\[quote=(.*?)\]/);

                if (name != null) {
                    quoteHead = quoteHead + ' von ' + name[1];
                }

                quoteHead = quoteHead + ':</div>';
                text = text.replace(value, quoteHead + '<div class="bogray2 quote">');
            });
        }

        text = text.replace(/\[\/quote\]/g, '</div>');
        return text;
    };

    /**
     * Stellt die Preview da
     * @private
     */
    var _showPreview = function(){
        _previewElement.html(_convertToPreview(String(_c_comment.val().replace(/(\r\n|\n|\r)/gm, '<br />'))));
        console.log('YOO!');
    };

    /**
     * Preview einschalten
     * @private
     */
    var _activatePreview = function(){
        _showPreview();

        _previewtable.css('display', 'block');
        _c_comment.on('keyup', _showPreview);
        _c_comment.on('focus', _showPreview);

        _previewIsEnabled = true;
    };

    /**
     * Preview ausschalten
     * @private
     */
    var _deactivatePreview = function(){
        _previewtable.css('display', 'none');
        _c_comment.off('keyup', _showPreview);
        _c_comment.off('focus', _showPreview);

        _previewIsEnabled = false;
    };

    /**
     * Öffentliche Methode um die Preview ein- oder auszuschalten. Orientiert sich an dem
     * Attribut _previewIsEnabled.
     */
    this.triggerPreview = function() {
        console.log(_previewIsEnabled);

        if (_previewIsEnabled) {
            _deactivatePreview();
        }
        else {
            _activatePreview();
        }
    };

    /**
     * Init Methode aufrufen!
     */
    _init();
}