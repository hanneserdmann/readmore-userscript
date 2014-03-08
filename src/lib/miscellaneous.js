RMUS.miscellaneous = {
    // Blendet einen Button zum Runterscrollen ein
    buttonScrollDown : function () {
        $('.floatr.m2:first').append('<img onclick="window.scrollTo(0, $(\'td.ten.vtop:last\').offset().top-50);" style="top: 0; height: 13px; padding-right: 2px; cursor: pointer;" alt="scroll down" src="http://readmore.thextor.de/userscript/img/arrow_down_alt1_16x16.png" />');
        return false;
    },

    // Blendet einen Button zum Hochscrollen ein
    buttonScrollUp : function () {
        $('.floatl.m2.elf:last').css('width', '100%');
        $('.floatl.m2.elf:last').append('<img onclick="window.scrollTo(0,0)" style="float: right; height: 13px; padding-right: 10px; cursor: pointer;" alt="scroll up" src="http://readmore.thextor.de/userscript/img/arrow_up_alt1_16x16.png" />');
        return false;
    },

    // Sortiert den Titel um
    reSortTitle : function () {
        var title = $('title').text(),
            pieces = title.split('\u00BB');	// Bei den Doppelpfeilen trennen

        title = pieces[2] + ' ' + '\u00BB' + pieces[1] + '\u00BB' + ' ' + pieces[0];
        $('title').text(title);
        return false;
    },

    // Wandelt Bilder-URLs in eigentliche Bilder um
    convertImageLinks: function() {
    	$('a[href$=".png"], a[href$=".jpg"], a[href$=".gif"], a[href$=".bmp"]').each(function() {
    	    $(this).html('<img src="' + $(this).attr('href') + '" class="center" style="max-width: 98%; border: 1px solid #CDCDCD" />');
    	});
    },

    // Zum letzten Post springen
    lastPageJumpToLastPost : function () {
        var lastpage = document.location.href.match(/pagenum=lastpage/);
        if (lastpage != null) {
            if (lastpage[0] == 'pagenum=lastpage') {
                window.scrollTo(0, $('td.ten.vtop:last').offset().top - 50);
            }
        }

        return false;
    },

    createFixedToolbar: function () {
        $('body > div.user_band').css({
            'position': 'fixed',
            'width': '100%'
        });
        $('div#wrapper').css('margin-top', '34px');
    },

    // Erweiterung des RM BBCodes um weitere Buttons/Quicklinks
    extrabuttons: {
        getToolbar: function () {
            var form = RMUS.miscellaneous.extrabuttons.getForm(),
                toolbar,
                container;

            if (content.news || content.matches || content.profile) {
                container = form.parent('div.center');

                if ($('div.headline_bg', container).length === 0) {
                    toolbar = $('<div class="headline_bg" />');
                    toolbar.css('padding', '3px 0px');
                    container.prepend(toolbar);
                }

                return $('div.headline_bg', container);
            } else if (content.forum_thread || content.forum_edit || content.forum_newtopic) {
                return $('div.headline_bg', RMUS.miscellaneous.extrabuttons.getForm());
            } else if (content.msg) {
                container = RMUS.miscellaneous.extrabuttons.getCommentBox().parent();

                if ($('div.headline_bg', container).length === 0) {
                    toolbar = $('<div class="headline_bg" />');
                    toolbar.css('padding', '3px 0px');
                    container.prepend(toolbar);
                }

                return $('div.headline_bg', container);
            } else if (content.groups_show_group) {
                // First Post im Thread?
                if ($('input[name="threadtitle"]').length === 1) {
                    container = $('<div/>').insertBefore(RMUS.miscellaneous.extrabuttons.getCommentBox());
                } else {
                    container = RMUS.miscellaneous.extrabuttons.getCommentBox().parent();
                }

                if ($('div.headline_bg', container).length === 0) {
                    toolbar = $('<div class="headline_bg" />');
                    toolbar.css('padding', '3px 0px');
                    container.prepend(toolbar);
                }

                return $('div.headline_bg', container);
            }

            return null;
        },
        getForm: function () {
            if (content.news || content.matches || content.profile) {
                return $('form[name=form_comment]');
            } else if (content.forum_thread || content.forum_newtopic) {
                return $('form[name=submitpost]');
            } else if (content.forum_edit) {
                return $('form[name=submiteditthread]');
            } else if (content.msg) {
                return $('td.text_h1_j form');
            } else if (content.groups_show_group) {
                if (action === 'threadedit') {
                    return $('form[name="submiteditthread"]');
                }

                return $('div.elf form[name="submitpost"]');
            }

            return null;
        },
        getCommentBox: function () {
            if (content.profile) {
                return $('textarea[name=comment]', RMUS.miscellaneous.extrabuttons.getForm());
            } else if (content.msg) {
                return $('textarea[name=msg]', RMUS.miscellaneous.extrabuttons.getForm());
            } else if (content.groups_show_group) {
                if (action === 'threadedit') {
                return $('textarea[name=new_comment].form', RMUS.miscellaneous.extrabuttons.getForm());
                }

                return $('textarea[name=comment].form', RMUS.miscellaneous.extrabuttons.getForm());
            }

            return $('textarea#c_comment', RMUS.miscellaneous.extrabuttons.getForm());
        },
        insertTag: function (tname, attr, endTag) {
            if ('url' === tname) {
                attr = prompt('Bitte gib den gewünschten Link an: ', 'http://');
            }

            var commentBox = RMUS.miscellaneous.extrabuttons.getCommentBox().get(0),
                currText = commentBox.value,
                pos1 = commentBox.selectionStart + tname.length + 2 + (attr != 0 ? (attr.length + 1) : 0),
                pos2 = commentBox.selectionEnd + tname.length + 2 + (attr != 0 ? (attr.length + 1) : 0) + (endTag ? (tname.length + 3) : 0),
                range = (commentBox.selectionStart != commentBox.selectionEnd);

            commentBox.value = currText.substring(0, commentBox.selectionStart) + '[' + tname + (attr != 0 ? '=' + attr + '' : '') + ']' + (endTag ? currText.substring(commentBox.selectionStart, commentBox.selectionEnd) + '[/' + tname + ']' : '') + currText.substring(commentBox.selectionEnd, currText.length);
            commentBox.focus();

            if (range) {
                commentBox.setSelectionRange(pos2, pos2);
            } else {
                commentBox.setSelectionRange(pos1, pos1);
            }
        },
        insertText: function (text) {
            var commentBox = RMUS.miscellaneous.extrabuttons.getCommentBox().get(0),
                currText = commentBox.value,
                pos = commentBox.selectionStart + text.length;

            commentBox.value = currText.substring(0, commentBox.selectionStart) + text + currText.substring(commentBox.selectionEnd, currText.length);
            commentBox.focus();
            commentBox.setSelectionRange(pos, pos);
        },
        makeTag: function (img, text, tag, attr, endTag) {
            return '<a href="" class="rmus-control-btn" data-btype="tag" data-params="' + tag + ',' + attr + ',' + endTag + '"><img style="vertical-align: text-top;" src="' + img + '" alt="' + text + '" title="' + text + '" /></a>';
        },
        colorSet:	[["#ff0000", "http://readmore.thextor.de/userscript/img/extrabuttons/yK4UQ.png"],
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
                    ["#ffffff", "http://readmore.thextor.de/userscript/img/extrabuttons/uq9mG.png"]],

        toolbarButtonTags:	[["http://images.readmore.de/img/icons/ubb/b.png", "fett", "b", 0, true],
                            ["http://images.readmore.de/img/icons/ubb/i.png", "kursiv", "i", 0, true],
                            ["http://images.readmore.de/img/icons/ubb/u.png", "unterstrichen", "u", 0, true],
                            ["http://images.readmore.de/img/icons/ubb/s.png", "durchgestrichen", "s", 0, true],
                            ["http://readmore.thextor.de/userscript/img/extrabuttons//yPNsn.png", "zentriert", "center", 0, true],
                            ["http://readmore.thextor.de/userscript/img/extrabuttons//74lEI.png", "hr", "hr", 0, false],
                            ["http://images.readmore.de/img/icons/ubb/url2.png", "url", "url", 0, true],
                            ["http://images.readmore.de/img/icons/ubb/quote.png", "quote", "quote", 0, true],
                            ["http://images.readmore.de/img/icons/ubb/spoil.png", "spoiler", "spoiler", 0, true],
                            ["http://images.readmore.de/img/icons/ubb/youtube.png", "youtube", "youtube", 0, true],
                            ["http://readmore.thextor.de/userscript/img/extrabuttons/ZQ5jN.png", "img", "img", 0, true]],

        ubbHelp: '<a onclick="window.open(\'http://www.readmore.de/mod/ubb.mod.php\', \'UBB Hilfe\', \'scrollbars=1,width=600,height=490,left=100,top=200\');return false;" href="/index.php?cont=ubb" style="font-weight:bold; color:#fff; margin-left: 8px; font-size: 11px;" class="ten hgray">?</a>',

        getToolbarHtml: function () {
            var colorButtons = '',
                btnTags = '';

            $.each(RMUS.miscellaneous.extrabuttons.colorSet, function (index, color) {
                colorButtons += (index > 0 ? '&thinsp;' : '') + RMUS.miscellaneous.extrabuttons.makeTag(color[1], color[0], 'color', color[0], true);
            });

            $.each(RMUS.miscellaneous.extrabuttons.toolbarButtonTags, function (index, btnTag) {
                btnTags += RMUS.miscellaneous.extrabuttons.makeTag(btnTag[0], btnTag[1], btnTag[2], btnTag[3]) + '&nbsp;';
            });

            return '<div id="rmus-container" style="text-align: left; color: #fff; font-weight: bold; padding-left: 5px; font-size: 11px;">Text' +
            '<div id="rmus-toolbar" style="margin-right: 12px; float: right;">' +
            '<div id="rmus-toolbar-main" style="margin-bottom: 1px;text-align:right;">' +

            btnTags + '&emsp;' +
            colorButtons +
            this.ubbHelp +

            '</div></div></div>' +
            '<div style="clear: right;"></div></div>';
        },
        init: function () {
            try {
                RMUS.miscellaneous.extrabuttons.getToolbar().css('height', 'auto').html(RMUS.miscellaneous.extrabuttons.getToolbarHtml());
            } catch (e) {}

            $('a.rmus-control-btn').click(function (e) {
                e.preventDefault();

                var btype = $(this).attr('data-btype'),
                    params = $(this).attr('data-params');

                switch(btype) {
                    case 'tag':
                        params = params.split(',');
                        RMUS.miscellaneous.extrabuttons.insertTag(params[0], params[1], params[2]);
                        break;
                }
            });
        }
    },

    reloadMainpageData : {
        mainpageData : '',

        readPage : function() {
            $.ajax({
                type: 'POST',
                async: true,
                cache: false,
                url: 'http://www.readmore.de/index.php?cont=userstream_overview',
                contentType: 'text/html; charset=iso-8859-1;',
                dataType: 'html',
                success: function (data) {
                    var pageData = data;

                    if(pageData != null){
                        // Prüft auf Fehler beim Laden der Seite
                        if (pageData.search('<div class="error">') != -1) {
                            RMUS.miscellaneous.reloadMainpageData.readPage();
                        } else {
                            RMUS.miscellaneous.reloadMainpageData.mainpageData = pageData.replace(/(\r\n|\n|\r)/gm,' ').replace(/\s+/g," ");
                        }
                    }
                },
                beforeSend: function(jqXHR) {
                    jqXHR.overrideMimeType('text/html;charset=iso-8859-1');
                }
            });

            return false;
        }
    },

    stopAvatarAnimation : {
        isGifImage : function(i){
            return /^(?!data:).*?\/user.*?\.gif/i.test(i.src);
        },

        freeze_gif : function (i) {
            var c = document.createElement('canvas');
            var w = c.width = i.width;
            var h = c.height = i.height;
            c.getContext('2d').drawImage(i, 0, 0, w, h);
            try {
                i.src = c.toDataURL("image/gif");
            } catch(e) {
                for (var j = 0, a; a = i.attributes[j]; j++)
                    c.setAttribute(a.name, a.value);
                i.parentNode.replaceChild(c, i);
            }

            return false;
        },

        stopAnimation : function (){
            [].slice.apply(document.images).filter(RMUS.miscellaneous.stopAvatarAnimation.isGifImage).map(RMUS.miscellaneous.stopAvatarAnimation.freeze_gif);
            return false;
        }
    },

    convertYoutube : function(){
        $('iframe[width=380][height=270][frameborder=0]').each(function() {
            var link = 'http://www.youtube.com/watch?v=' + String($(this).attr('src')).trim().replace('http://www.youtube.com/embed/', '');
            $(this).after('<a href="' + link + '">' + link + '</a>');
            $(this).remove();
        });

        return false;
    },

    ignoreUser : {
        user : [],
        ignoreCount : 0,

        setUser : function(){
            var user = [];
            $(String(Options.getOption('miscellaneous_ignoreUser_usernames')).split(',')).each(function(index, value){
                user.push(value.trim());
            });

            RMUS.miscellaneous.ignoreUser.user = user;
            return false;
        },

        doIgnore : function(thread, ticker, profile) {
            if (RMUS.miscellaneous.ignoreUser.user.length == 0) {
                RMUS.miscellaneous.ignoreUser.setUser();
            }

            if (thread) {
                $(RMUS.miscellaneous.ignoreUser.user).each(function(index, value) {
                    $('tr[class*=post_]:has(a[title="' + value + '"]) td').each(function() {

                        if (this.innerHTML.match(/ignored_/) == null){
                            if (RMUS.miscellaneous.ignoreUser.ignoreCount % 2){
                                RMUS.miscellaneous.ignoreUser.ignoreCount--;
                                $(this).html('<div style="display:none;" class="ignored_' + RMUS.miscellaneous.ignoreUser.ignoreCount + '">' + $(this).html() + '</div>');
                                RMUS.miscellaneous.ignoreUser.ignoreCount = RMUS.miscellaneous.ignoreUser.ignoreCount + 2;
                            }
                            else{
                                $(this).html('<a style="font-size: 9px;" href="javascript:void(0)" onclick="$(\'.ignored_' + RMUS.miscellaneous.ignoreUser.ignoreCount + '\').toggle(); if(this.innerHTML == \'Beitrag einblenden\'){this.innerHTML = \'Beitrag ausblenden\';}else{this.innerHTML = \'Beitrag einblenden\';}">Beitrag einblenden</a><br/>' + '<br/><div style="display:none;" class="ignored_' + RMUS.miscellaneous.ignoreUser.ignoreCount + '">' + $(this).html() + '</div>');
                                RMUS.miscellaneous.ignoreUser.ignoreCount++;
                            }
                        }
                    });
                });
            }

            if (ticker || profile) {
                $(RMUS.miscellaneous.ignoreUser.user).each(function(index, value) {
                    $('div .elf.cmt_kopf:has(a.cmt_head:contains(' + value + '))').next().each(function(){
                        $(this).html('<a href="javascript:void(0)" onclick="$(\'.ignored_' + RMUS.miscellaneous.ignoreUser.ignoreCount + '\').toggle();">Beitrag einblenden</a><br/>' + '<br/><div style="display:none;" class="ignored_' + RMUS.miscellaneous.ignoreUser.ignoreCount + '">' + $(this).html() + '</div>');
                        RMUS.miscellaneous.ignoreUser.ignoreCount++;
                    });
                });
            }

            return false;
        }
    },
    note : {
        notenumber : 0,
        initialize : function() {
            $('tr[class*=post_]>td:even:not(:has(textarea))').each(function(){
                var br = '<br />';
                var user = String($(this).find('a.bml').attr('title'));
                var notenr = RMUS.miscellaneous.note.notenumber++;

                if ($($(this).html()).length > 0) br = '<br /><br />';
                $(this).append(br + '<center><a href="javascript:void(o);" name="note_' + user + '_' + notenr + '">Notiz</a><br /><br /><textarea style="display:none;height:100px;width:98%" name="note_' + user + '_' + notenr + '"></textarea></center>');

                $('a[name="note_' + user + '_' + notenr + '"]').click(function () {
                    var notes = JSON.parse(localStorage.getItem('userscriptNote')),
                        note = $('textarea[name="note_' + user + '_' + notenr + '"]'),
                        closing = note.is(':visible');

                    if (notes == null) notes = {};

                    if (true === closing) {
                        notes[user] = String(note.val()).trim();
                    } else {
                        note.val(notes[user]);
                    }

                    note.toggle();
                    localStorage.setItem('userscriptNote', JSON.stringify(notes));
                });
            });

            return false;
        }
    }
};