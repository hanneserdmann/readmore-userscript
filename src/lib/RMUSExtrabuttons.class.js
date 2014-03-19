/**
 * RMUSExtrabuttons
 * ================
 *
 * Klasse für die Extrabuttons. Ursprünglich von IllDepence entwickelt.
 * http://www.readmore.de/index.php?cont=profile&id=29432
 * @param Content {RMUSContent}
 * @constructor
 */

function RMUSExtrabuttons(Content){

    var _form       = null;
    var _commentBox = null;
    var _toolbar    = null;
    var _colorSet   = [
        ["#ff0000", "http://readmore.thextor.de/userscript/img/extrabuttons/yK4UQ.png"],
        ["#ff8000", "http://readmore.thextor.de/userscript/img/extrabuttons/xdj9r.png"],
        ["#ffff00", "http://readmore.thextor.de/userscript/img/extrabuttons/cQrl0.png"],
        ["#80ff00", "http://readmore.thextor.de/userscript/img/extrabuttons/KTpVX.png"],
        ["#00ff00", "http://readmore.thextor.de/userscript/img/extrabuttons/NhpYN.png"],
        ["#00ff80", "http://readmore.thextor.de/userscript/img/extrabuttons/D4JCR.png"],
        ["#00ffff", "http://readmore.thextor.de/userscript/img/extrabuttons/jA74E.png"],
        ["#0080ff", "http://readmore.thextor.de/userscript/img/extrabuttons/cQpDh.png"],
        ["#0000ff", "http://readmore.thextor.de/userscript/img/extrabuttons/7DXlk.png"],
        ["#8000ff", "http://readmore.thextor.de/userscript/img/extrabuttons/t79Yf.png"],
        ["#ff00ff", "http://readmore.thextor.de/userscript/img/extrabuttons/IwKL1.png"],
        ["#ff0080", "http://readmore.thextor.de/userscript/img/extrabuttons/cKrre.png"],
        ["#000000", "http://readmore.thextor.de/userscript/img/extrabuttons/eeX1k.png"],
        ["#333333", "http://readmore.thextor.de/userscript/img/extrabuttons/B4ToQ.png"],
        ["#666666", "http://readmore.thextor.de/userscript/img/extrabuttons/OuClO.png"],
        ["#999999", "http://readmore.thextor.de/userscript/img/extrabuttons/gc8Za.png"],
        ["#cccccc", "http://readmore.thextor.de/userscript/img/extrabuttons/TwNb6.png"],
        ["#ffffff", "http://readmore.thextor.de/userscript/img/extrabuttons/uq9mG.png"]
    ];
    var _toolbarButtonTags = [
        ["http://images.readmore.de/img/icons/ubb/b.png", "fett", "b", 0, true],
        ["http://images.readmore.de/img/icons/ubb/i.png", "kursiv", "i", 0, true],
        ["http://images.readmore.de/img/icons/ubb/u.png", "unterstrichen", "u", 0, true],
        ["http://images.readmore.de/img/icons/ubb/s.png", "durchgestrichen", "s", 0, true],
        ["http://readmore.thextor.de/userscript/img/extrabuttons//yPNsn.png", "zentriert", "center", 0, true],
        ["http://readmore.thextor.de/userscript/img/extrabuttons//74lEI.png", "hr", "hr", 0, false],
        ["http://images.readmore.de/img/icons/ubb/url2.png", "url", "url", 0, true],
        ["http://images.readmore.de/img/icons/ubb/quote.png", "quote", "quote", 0, true],
        ["http://images.readmore.de/img/icons/ubb/spoil.png", "spoiler", "spoiler", 0, true],
        ["http://images.readmore.de/img/icons/ubb/youtube.png", "youtube", "youtube", 0, true],
        ["http://readmore.thextor.de/userscript/img/extrabuttons/ZQ5jN.png", "img", "img", 0, true]
    ];
    var _ubbHelp = '<a onclick="window.open(\'http://www.readmore.de/mod/ubb.mod.php\', \'UBB Hilfe\', \'scrollbars=1,width=600,height=490,left=100,top=200\');return false;" href="/index.php?cont=ubb" style="font-weight:bold; color:#fff; margin-left: 8px; font-size: 11px;" class="ten hgray">?</a>';

    /**
     * Startet die Extrabuttons.
     * Selektiert das Formular, die CommentBox und startet anschließend die Initialisierung
     * der Extrabuttons.
     * @private
     */
    this.init = function(){
        _form       = _getForm();
        _commentBox = _getCommentBox();
        _toolbar    = _getToolbar();

        try {
            _getToolbar().css('height', 'auto').html(_getToolbarHtml());
        } catch (e) {}

        $('a.rmus-control-btn').click(function (e) {
            e.preventDefault();

            var btype   = $(this).attr('data-btype');
            var params  = $(this).attr('data-params');

            switch(btype) {
                case 'tag':
                    params = params.split(',');
                    _insertTag(params[0], params[1], params[2]);
                    break;
            }
        });
    };

    /**
     * Gibt die Toolbar für die RM Extrabuttons zurück
     * @returns {{}}
     * @private
     */
    var _getToolbar = function(){
        var toolbar = '';
        var container = '';
        var returnValue = null;

        if (Content.getMultipleContent(['news', 'matches', 'profile'], 'OR')) {
            container = _form.parent('div.center');

            if ($('div.headline_bg', container).length === 0) {
                toolbar = $('<div class="headline_bg" />');
                toolbar.css('padding', '3px 0px');
                container.prepend(toolbar);
            }

            returnValue = $('div.headline_bg', container);
        } else if (Content.getMultipleContent(['forum_thread', 'forum_edit', 'forum_newtopic'], 'OR')) {
            returnValue = $('div.headline_bg', _form);
        } else if (Content.getContent('msg')) {
            container = _commentBox.parent();

            if ($('div.headline_bg', container).length === 0) {
                toolbar = $('<div class="headline_bg" />');
                toolbar.css('padding', '3px 0px');
                container.prepend(toolbar);
            }

            returnValue = $('div.headline_bg', container);
        } else if (Content.getContent('groups_show_group')) {
            // First Post im Thread?
            if ($('input[name="threadtitle"]').length === 1) {
                container = $('<div/>').insertBefore(_commentBox);
            } else {
                container = _commentBox.parent();
            }

            if ($('div.headline_bg', container).length === 0) {
                toolbar = $('<div class="headline_bg" />');
                toolbar.css('padding', '3px 0px');
                container.prepend(toolbar);
            }

            returnValue = $('div.headline_bg', container);
        }

        return returnValue;
    };

    /**
     * Gibt das DOM-Object des Formulars zurück
     * @returns {Null, {}}
     * @private
     */
    var _getForm = function(){
        var returnValue = null;

        if (Content.getMultipleContent(['news', 'matches', 'profile'], 'OR')) {
            returnValue = $('form[name=form_comment]');
        } else if (Content.getMultipleContent(['forum_thread', 'forum_newtopic'], 'OR')) {
            returnValue = $('form[name=submitpost]');
        } else if (Content.getContent('forum_edit')) {
            returnValue = $('form[name=submiteditthread]');
        } else if (Content.getContent('msg')) {
            returnValue = $('td.text_h1_j form');
        } else if (Content.getContent('groups_show_group')) {
            if (Content.getAction() === 'threadedit') {
                returnValue = $('form[name="submiteditthread"]');
            }

            if (returnValue === null){
                returnValue = $('div.elf form[name="submitpost"]');
            }
        }

        return returnValue;
    };

    /**
     * Gibt die Textbox für den neuen Beitrag zurück.
     * @returns {{}}
     * @private
     */
    var _getCommentBox = function(){
        var returnValue = null;

        if (Content.getContent('profile')) {
            returnValue = $('textarea[name=comment]', _form);
        } else if (Content.getContent('msg')) {
            returnValue = $('textarea[name=msg]', _form);
        } else if (Content.getContent('groups_show_group')) {
            if (Content.getAction() === 'threadedit') {
                returnValue = $('textarea[name=new_comment].form', _form);
            }

            if (returnValue === null){
                returnValue = $('textarea[name=comment].form', _form);
            }
        }

        if (returnValue === null){
            returnValue = $('textarea#c_comment', _form);
        }

        return returnValue;
    };

    /**
     * Fügt ein Tag in der CommentBox hinzu.
     * @param tname {String}
     * @param attr {*}
     * @param endTag {String}
     * @private
     */
    var _insertTag = function(tname, attr, endTag){
        if (tname === 'url') {
            attr = prompt('Bitte gib den gewünschten Link an: ', 'http://');
        }

        var commentBox  = _commentBox.get(0);
        var currText    = commentBox.value;
        var pos1        = commentBox.selectionStart + tname.length + 2 + (attr != 0 ? (attr.length + 1) : 0);
        var pos2        = commentBox.selectionEnd + tname.length + 2 + (attr != 0 ? (attr.length + 1) : 0) + (endTag ? (tname.length + 3) : 0);
        var range       = (commentBox.selectionStart != commentBox.selectionEnd);

        commentBox.value = currText.substring(0, commentBox.selectionStart) + '[' + tname + (attr != 0 ? '=' + attr + '' : '') + ']' + (endTag ? currText.substring(commentBox.selectionStart, commentBox.selectionEnd) + '[/' + tname + ']' : '') + currText.substring(commentBox.selectionEnd, currText.length);
        commentBox.focus();

        if (range) {
            commentBox.setSelectionRange(pos2, pos2);
        } else {
            commentBox.setSelectionRange(pos1, pos1);
        }
    };

    /**
     * Generiert ein Tag und gibt es zurück.
     * @param img
     * @param text
     * @param tag
     * @param attr
     * @param endTag
     * @returns {string}
     * @private
     */
    var _makeTag = function (img, text, tag, attr, endTag) {
        return '<a href="" class="rmus-control-btn" data-btype="tag" data-params="' + tag + ',' + attr + ',' + endTag + '"><img style="vertical-align: text-top;" src="' + img + '" alt="' + text + '" title="' + text + '" /></a>';
    };

    /**
     * Generiert die Toolbar als HTML, fügt also alle Bestandteile zusammen
     * und gibt sie anschließend zurück.
     * @returns {string}
     * @private
     */
    var _getToolbarHtml = function () {
        var colorButtons    = '';
        var btnTags         = '';

        $.each(_colorSet, function (index, color) {
            colorButtons += (index > 0 ? '&thinsp;' : '') + _makeTag(color[1], color[0], 'color', color[0], true);
        });

        $.each(_toolbarButtonTags, function (index, btnTag) {
            btnTags += _makeTag(btnTag[0], btnTag[1], btnTag[2], btnTag[3]) + '&nbsp;';
        });

        return  '<div id="rmus-container" style="text-align: left; color: #fff; font-weight: bold; padding-left: 5px; font-size: 11px;">Text' +
                '<div id="rmus-toolbar" style="margin-right: 12px; float: right;">' +
                '<div id="rmus-toolbar-main" style="margin-bottom: 1px;text-align:right;">' +
                btnTags + '&emsp;' +
                colorButtons +
                _ubbHelp +
                '</div></div></div>' +
                '<div style="clear: right;"></div></div>';
    };
}