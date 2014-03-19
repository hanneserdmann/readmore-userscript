RMUS.middleColumn = {

/************************
*	FORUM		*
*************************/
    forum : {

        threadlink : '',
        page : '',

        // Link zum Thread ohne Seitenzahl ermitteln
        readThreadlink : function () {
            RMUS.middleColumn.forum.threadlink = $(location).attr('href').replace(/\&pagenum=.+$/, '');
            return false;
        },

        // Aktuelle Seite ermitteln
        readPage : function () {
            RMUS.middleColumn.forum.page = parseInt($('div.floatl.m2.elf').html().match(/<b>(.+?)<\/b>/)[1], 10);
            return false;
        },

/************************
*	 RELOAD POSTS	*
*************************/
        reloadPosts : {
            postcount : 0,
            waitUntilReload : 5,
            finishedPages : 0,
            oldLimit : 0,
            markPostColor : '#EEEEEE',                  // Hellgrau
            markPostColorRgb : 'rgb(238, 238, 238)',    // Hellgrau
            oldTitle : '',
            unseenPosts : [],

            // Anzhal der aktuellen Posts ermitteln
            readPostcount : function () {
                RMUS.middleColumn.forum.reloadPosts.postcount = $('[class^=post_]').length;
                return false;
            },

            // Neue Posts nachladen und einfügen
            readNewPosts : function () {
                // Nur wenn wir uns auf der letzten seite befinden
                var lastpage = $.trim($('div.floatl.m2.elf').html());

                if (lastpage.substr(lastpage.length-4) == '</b>'){
                    // Seiten endlos erweitern
                    if (Options.getOption('middleColumn_forum_reloadPosts_endlessPage') == 'checked') {
                        RMUS.middleColumn.forum.reloadPosts.endlessPage();
                    }

                    // Der eigentliche Reload
                    $.ajax({
                        type: 'POST',
                        async: true,
                        cache: false,
                        url: RMUS.middleColumn.forum.threadlink + '&pagenum=' + RMUS.middleColumn.forum.page,
                        contentType: 'text/html; charset=iso-8859-1;',
                        dataType: 'html',
                        success: function (data) {
                            var posts = data.match(/\<tr class=\"post\_[^"]+\"\>[^]+?\<\/tr\>/g);
                            if (posts != null) {
                                var footer = data.match(/\<tr class=\"cellheadercolor footer\_[^"]+\"\>[^]+?\<\/tr\>/g),
                                    oldPosts = (25 * RMUS.middleColumn.forum.reloadPosts.finishedPages),
                                    postNumber = posts.length + oldPosts,
                                    userid = $('div.floatl.vcenter.elf.dgray:eq(1)').html().match(/id=(.+?)"/)[1],
                                    i = RMUS.middleColumn.forum.reloadPosts.postcount;

                                for (i; i < postNumber; i++) {
                                    $('table.elf.forum.p2.bogray2').append(posts[i-oldPosts]);
                                    $('table.elf.forum.p2.bogray2').append(footer[i-oldPosts]);

                                    RMUS.middleColumn.forum.reloadPosts.unseenPosts.push(parseInt($('[class^=post_]:last').offset().top, 10));  // Zum markieren der neuen Posts
                                    RMUS.middleColumn.forum.reloadPosts.postcount++;
                                }

                                RMUS.middleColumn.forum.reloadPosts.oldLimit = window.pageYOffset + (window.innerHeight * 0.55);
                                // Beiträge aus den neuen Posts ignorieren
                                if (Options.getOption('miscellaneous_ignoreUser') == 'checked') RMUS.miscellaneous.ignoreUser.doIgnore(true, false, false);
                                // Edit vorbereiten
                                if (Options.getOption('middleColumn_forum_editPost') == 'checked') EditPosts.initializeEvent();
                                // Notzizen einblenden
                                if(Options.getOption('miscellaneous_note') == 'checked') RMUS.miscellaneous.note.initialize();
                                // Youtubeplayer ersetzen
                                if(Options.getOption('miscellaneous_convertYoutube') == 'checked') RMUS.miscellaneous.convertYoutube();
                            }
                        },
                        beforeSend: function(jqXHR) {
                            jqXHR.overrideMimeType('text/html;charset=iso-8859-1');
                        }
                    });

                    // Rausfinden ob eine neue Seite existiert
                    if (Options.getOption('middleColumn_forum_reloadPosts_endlessPage') != 'checked') RMUS.middleColumn.forum.reloadPosts.checkForNewPage();
                    return false;
                }
            },

            // Neue Posts markieren
            markNewPosts : function () {
                var numberOfNewPosts = RMUS.middleColumn.forum.reloadPosts.unseenPosts.length,
                    i = 1;

                for(i; i <= numberOfNewPosts; i++) {
                    // Überprüfen ob der Posts bereits markiert ist, wenn ja die Schleife verlassen
                    if ($.trim(($('[class^=post_]:eq(' + (RMUS.middleColumn.forum.reloadPosts.postcount - i) + ')').css('background-color'))) == RMUS.middleColumn.forum.reloadPosts.markPostColorRgb) {
                        break;
                    }
                    $('[class^=post_]:eq(' + (RMUS.middleColumn.forum.reloadPosts.postcount - i) + ')').css('background-color', RMUS.middleColumn.forum.reloadPosts.markPostColor);
                }

                // Demarkieren starten
                RMUS.middleColumn.forum.reloadPosts.unmarkNewPosts();
                return false;
            },

            // Entfernt die Markierung von (ehemals) neuen Posts
            unmarkNewPosts : function() {
                var i = 0,
                    limit = window.pageYOffset + (window.innerHeight * 0.55),
                    deleteArray = [];

                $(RMUS.middleColumn.forum.reloadPosts.unseenPosts).each(function (index, value) {
                    // Nur demarkieren, wenn wir das Limit überschritten und uns bewegt / gescrollt haben
                    if(value < limit && limit != RMUS.middleColumn.forum.reloadPosts.oldLimit) {
                        $('[class^=post_]:eq(' + (RMUS.middleColumn.forum.reloadPosts.postcount - (RMUS.middleColumn.forum.reloadPosts.unseenPosts.length) + i) + ')').css('background-color', '#FFF');
                        i++;
                        deleteArray.push(index);
                    }
                });

                $(deleteArray).each(function (index, value) {
                    RMUS.middleColumn.forum.reloadPosts.unseenPosts.splice(value, 1);   // Unmarkierte / Gelesene Posts aus dem Array entfernen
                });

                return false;
            },

            // Anzahl der ungelesenen Posts im Titel / Tab anzeigen
            showNewPostsTitle : function () {
                if (RMUS.middleColumn.forum.reloadPosts.oldTitle == '') {
                    RMUS.middleColumn.forum.reloadPosts.oldTitle = $('title').text();
                }

                var title = RMUS.middleColumn.forum.reloadPosts.oldTitle;
                if (RMUS.middleColumn.forum.reloadPosts.unseenPosts.length) title = '(' + RMUS.middleColumn.forum.reloadPosts.unseenPosts.length + ') ' + title;

                $('title').text(title);
                return false;
            },

            // Ändert das Favicon wenn ungelesene Posts vorhanden sind
            changeFavicon : function () {
                var currentIcon = $('head>link[rel="shortcut icon"]').attr('href');
                if (RMUS.middleColumn.forum.reloadPosts.unseenPosts.length > 0 && currentIcon == '/favicon.ico') {
                    $('head>link[rel="shortcut icon"]').remove();
                    $('head').append('<link rel="shortcut icon" type="image/png" href="http://readmore.thextor.de/userscript/img/favicon.png">');
                }
                if (RMUS.middleColumn.forum.reloadPosts.unseenPosts.length == 0 && currentIcon == 'http://readmore.thextor.de/userscript/img/favicon.png') {
                    $('head>link[rel="shortcut icon"]').remove();
                    $('head').append('<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">');
                }
                return false;
            },

            // Setzt die Farbe (HEX + GRB) in der die neuen Posts markiert werden
            setMarkPostColor : function () {
                // Nur wenn eine HEX-Zahl eingegeben wurde
                if (Options.getOption('middleColumn_forum_reloadPosts_markPostColor')[0] == '#' && Options.getOption('middleColumn_forum_reloadPosts_markPostColor').length == 7) {
                    RMUS.middleColumn.forum.reloadPosts.markPostColor = Options.getOption('middleColumn_forum_reloadPosts_markPostColor');
                    RMUS.middleColumn.forum.reloadPosts.markPostColorRgb = "rgb(" + parseInt(RMUS.middleColumn.forum.reloadPosts.markPostColor.substr(1, 2), 16).toString() + ", " + parseInt(RMUS.middleColumn.forum.reloadPosts.markPostColor.substr(3, 2), 16).toString() + ", " + parseInt(RMUS.middleColumn.forum.reloadPosts.markPostColor.substr(5, 2), 16).toString() + ")";
                }
                return false;
            },

            // Ermöglicht das unbegrenzte Erweitern einer Seite
            endlessPage : function () {
                if (RMUS.middleColumn.forum.reloadPosts.postcount == (25 + (25 * RMUS.middleColumn.forum.reloadPosts.finishedPages))) {
                    RMUS.middleColumn.forum.reloadPosts.finishedPages++;
                    RMUS.middleColumn.forum.page++;
                }

                return false;
            },

            // Prüft ob eine neue Seite im Forum vorhanden ist
            checkForNewPage : function () {
                if (Options.getOption('middleColumn_forum_reloadPosts_checkForNewPage') == 'checked'){
                    if (RMUS.middleColumn.forum.reloadPosts.postcount == (25 + (25 * RMUS.middleColumn.forum.reloadPosts.finishedPages)) && $('#userscriptNewPage').length < 1) {

                        $.ajax({
                            type: 'POST',
                            async: true,
                            cache: false,
                            url: RMUS.middleColumn.forum.threadlink + '&pagenum=' + (RMUS.middleColumn.forum.page + 1),
                            contentType: 'text/html; charset=iso-8859-1;',
                            dataType: 'html',
                            success: function (data) {
                                var posts = data.match(/\<tr class=\"post\_[^"]+\"\>[^]+?\<\/tr\>/g);
                                if (posts != null) {
                                    $('table.elf.forum.p2:last').after('<br/><div id="userscriptNewPage" style="width:520px; height: 23px; background-color: #2B91FF; text-align: right; vertical-align:middle; display:table-cell"><a style="color: #fff; font-weight: bold; padding-right: 10px;" href="' + RMUS.middleColumn.forum.threadlink + '&pagenum=' + (RMUS.middleColumn.forum.page + 1) + '">Zur n&auml;chsten Seite</a></div>');
                                }
                            },
                            beforeSend: function(jqXHR) {
                                jqXHR.overrideMimeType('text/html;charset=iso-8859-1');
                            }
                        });
                    }
                }

                return false;
            },

            // Zu neuen Posts scrollen
            jumpToNewPosts :{
                waitUntilNextJump : 5,
                oldmimit : 0,

                setWaitUntilNextJump : function(){
                    var timeToWait = parseInt(Options.getOption('middleColumn_forum_reloadPosts_jumpToNewPosts_waitUntilNextJump'), 10);
                    if (timeToWait > 0){
                        RMUS.middleColumn.forum.reloadPosts.jumpToNewPosts.waitUntilNextJump = timeToWait;
                    }
                    return false;
                },

                jump : function(){
                    if (RMUS.middleColumn.forum.reloadPosts.unseenPosts.length > 0){
                        if ($('#userscript_enable_jump').attr('checked') == 'checked'){
                            var jumpto = RMUS.middleColumn.forum.reloadPosts.unseenPosts[0] - (window.innerHeight * 0.55) + 25;
                            if (jumpto <= RMUS.middleColumn.forum.reloadPosts.jumpToNewPosts.oldmimit) jumpto = RMUS.middleColumn.forum.reloadPosts.jumpToNewPosts.oldmimit + 25;
                            window.scrollTo(0, jumpto);
                            RMUS.middleColumn.forum.reloadPosts.jumpToNewPosts.oldmimit = jumpto;
                        }
                    }
                    return false;
                }
            }
        },

        replaceSpecialChars : function(text){
            var replacePost = {};

            replacePost['%C3%A4'] = '%E4';		// ä
            replacePost['%C3%84'] = '%C4';		// Ä
            replacePost['%C3%B6'] = '%F6';		// ö
            replacePost['%C3%96'] = '%D6';		// Ö
            replacePost['%C3%BC'] = '%FC';		// ü
            replacePost['%C3%9C'] = '%DC';		// Ü
            replacePost['%C3%9F'] = '%DF';		// ß
            replacePost['%C3%9C'] = '%DC';		// <
            replacePost['%C3%9F'] = '%DF';		// >
            replacePost['%C2%B0'] = '%B0';		// °
            replacePost['%C2%B4'] = '%B4';		// ´
            replacePost['%C3%A1'] = '%E1';		// á
            replacePost['%C3%81'] = '%C1';		// Á
            replacePost['%C3%A2'] = '%E2';		// â
            replacePost['%C3%82'] = '%C2';		// Â
            replacePost['%C3%A9'] = '%E9';		// é
            replacePost['%C3%89'] = '%C9';		// É
            replacePost['%C3%AA'] = '%EA';		// ê
            replacePost['%C3%8A'] = '%CA';		// Ê
            replacePost['%C3%AD'] = '%ED';		// í
            replacePost['%C3%8D'] = '%CD';		// Í
            replacePost['%C3%AE'] = '%EE';		// î
            replacePost['%C3%8E'] = '%CE';		// Î
            replacePost['%C3%B3'] = '%F3';		// ó
            replacePost['%C3%93'] = '%D3';		// Ó
            replacePost['%C3%B4'] = '%F4';		// ô
            replacePost['%C3%94'] = '%D4';		// Ô
            replacePost['%C3%BA'] = '%FA';		// ú
            replacePost['%C3%9A'] = '%DA';		// Ú
            replacePost['%C3%BB'] = '%FB';		// û
            replacePost['%C3%9B'] = '%DB';		// Û
            replacePost['%C2%A7'] = '%A7';		// §

            replacePost['%E2%82%AC'] = '%80';		    // €
            replacePost['%E2%95%AF'] = '%26#9583;';		// ╯
            replacePost['%E2%96%A1'] = '%26#9633;';		// □
            replacePost['%EF%BC%89'] = '%26#65289;';	// ）
            replacePost['%EF%B8%B5'] = '%26#65077;';	// ︵
            replacePost['%E2%94%BB'] = '%26#9531;';		// ┻
            replacePost['%E2%94%81'] = '%26#9473;';		// ━

            // Sonderzeichen ersetzen
            $.each(replacePost, function (key, value) {
                var regEx = new RegExp(key, 'g');
                    text = text.replace(regEx, value);
            });

            return text;
        },

        scrollForNewPage : {
            oldPosts : 0,
            insertPosts : function (){
                var limit = parseInt($('#c_comment').offset().top, 10) - 190;
                var position = window.pageYOffset + (window.innerHeight * 0.55);
                if (position >= limit){
                    // Der eigentliche Reload
                    $.ajax({
                        type: 'POST',
                        async: false,
                        cache: false,
                        url: String(RMUS.middleColumn.forum.threadlink + '&pagenum=' + (RMUS.middleColumn.forum.page + 1)),
                        contentType: 'text/html; charset=iso-8859-1;',
                        dataType: 'html',
                        success: function (data) {
                            var posts = data.match(/\<tr class=\"post\_[^"]+\"\>[^]+?\<\/tr\>/g);
                            if (posts != null) {
                                var postCharLenth = JSON.stringify(posts).length;
                                if (postCharLenth !== RMUS.middleColumn.forum.scrollForNewPage.oldPosts){
                                    RMUS.middleColumn.forum.scrollForNewPage.oldPosts = postCharLenth;

                                    var footer = data.match(/\<tr class=\"cellheadercolor footer\_[^"]+\"\>[^]+?\<\/tr\>/g);
                                    for (i = 0, k = parseInt(posts.length, 10); i < k; i++) {
                                        $('table.elf.forum.p2.bogray2').append(posts[i]);
                                        $('table.elf.forum.p2.bogray2').append(footer[i]);
                                    }

                                    RMUS.middleColumn.forum.page++;
                                    // Beiträge aus den neuen Posts ignorieren
                                    if (Options.getOption('miscellaneous_ignoreUser') == 'checked') RMUS.miscellaneous.ignoreUser.doIgnore(true, false, false);
                                    // Notzizen einblenden
                                    if(Options.getOption('miscellaneous_note') == 'checked') RMUS.miscellaneous.note.initialize();
                                }
                            }
                        },
                        beforeSend: function(jqXHR) {
                            jqXHR.overrideMimeType('text/html;charset=iso-8859-1');
                        }
                    });
                }

                return false;
            },
            editboxTop : function (){
                $('#content h1:first').after('<a id="RMUSeditboxTop" href="javascript:void(0);" style="float: right;" onclick="$(\'#content h1:first\').after($(\'form[name=submitpost]\')); $(this).css(\'display\',\'none\'); $(\'#RMUSeditboxBottom\').css(\'display\',\'\');">Editbox anzeigen<br /><br /></a>');
                $('#content br.clear:last').after('<a id="RMUSeditboxBottom" href="javascript:void(0);" style="float: right; display: none;" onclick="$(\'#content br.clear:last\').after($(\'form[name=submitpost]\')); $(this).css(\'display\',\'none\'); $(\'#RMUSeditboxTop\').css(\'display\',\'\');">Editbox anzeigen<br /><br /></a>');
            }
        },
    },

    searchJumpToLastpage : {
        displayLink : function(){
            $('#content a[href^="index.php?cont=forum/thread&threadid="]').each(function(){
                var link = $(this).attr('href').replace('&page=1', '&pagenum=lastpage');
                $(this).parent().append('<a href="' + link + '" class="floatr" title="Last Page"><img src="http://images.readmore.de/img/icons/high_next.gif" height="9" width="11" alt=""></a>');
            });

            return false;
        }
    }
};