RMUS.middleColumn = {

/************************
*	FORUM		*
*************************/
    forum : {

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
                                    if (Options.getOption('miscellaneous_ignoreUser') == 'checked') IgnoreUser.ignore(true, false, false);
                                    // Notzizen einblenden
                                    if(Options.getOption('miscellaneous_note') == 'checked') Notes.init(false);
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
        }
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