RMUS.start = function () {
    /********************************
    *	Funktionen aktivieren	*
    *********************************/

    // Bereich auf der Readmore.de Seite rausfinden
    var cont = '',
        action = document.location.search.match(/action=([a-zA-Z]+)/i),
        getVars = document.location.search.replace(/[?]/g, '').replace(/[&]/g, '=').split('=');

    if (action && action[1]) {
        action = action[1];
    } else {
        action = null;
    }

    $.each(getVars, function (index, value) {
        if (value == 'cont') {
            cont = getVars[index+1];
        }
    });

    content = {
        mainpage                : false,
        profile                 : false,
        groups_new              : false,
        groups_group_list       : false,
        groups_show_group       : false,
        msg                     : false,
        news_archive            : false,
        headlines_overview      : false,
        www                     : false,
        widget_create_ticker    : false,
        guides                  : false,
        articles                : false,
        news                    : false,
        search                  : false,
        match_overview          : false,
        db                      : false,
        coverages               : false,
        demo_overview_pov       : false,
        demo_overview_hltv      : false,
        demo_overview           : false,
        video_overview          : false,
        gallery_sets            : false,
        forum_forum             : false,
        forum_board             : false,
        forum_thread            : false,
        forum_edit              : false,
        forum_newtopic          : false,
        community               : false,
        blog                    : false,
        poll_archive            : false,
        rules                   : false,
        team                    : false,
        imprint                 : false,
        userstream              : false,
        gallery_images          : false,
        matches                 : false
    };

    switch (cont) {
        case '':
            content.mainpage = true;
            break;
        case 'profile':
            content.profile = true;
            break;
        case 'forum/thread':
            content.forum_thread = true;
            break;
        case 'forum/forum':
            content.forum_forum = true;
            break;
        case 'forum/board':
            content.forum_board = true;
            break;
        case 'forum/edit':
            content.forum_edit = true;
            break;
        case 'matches':
            content.matches = true;
            break;
        case 'www':
            content.www = true;
            break;
        case 'userstream':
            content.userstream = true;
            break;
        case 'groups/new':
            content.groups_new = true;
            break;
        case 'groups/group_list':
            content.groups_group_list = true;
            break;
        case 'groups/show_group':
            content.groups_show_group = true;
            break;
        case 'msg':
            content.msg = true;
            break;
        case 'news_archive':
            content.news_archive = true;
            break;
        case 'headlines_overview':
            content.headlines_overview = true;
            break;
        case 'widget/create_ticker':
            content.widget_create_ticker = true;
            break;
        case 'guides':
            content.guides = true;
            break;
        case 'articles':
            content.articles = true;
            break;
        case 'news':
            content.news = true;
            break;
        case 'search':
            content.search = true;
            break;
        case 'match_overview':
            content.match_overview = true;
            break;
        case 'db':
            content.db = true;
            break;
        case 'coverages':
            content.coverages = true;
            break;
        case 'demo_overview_pov':
            content.demo_overview_pov = true;
            break;
        case 'demo_overview_hltv':
            content.demo_overview_hltv = true;
            break;
        case 'demo_overview':
            content.demo_overview = true;
            break;
        case 'video_overview':
            content.video_overview = true;
            break;
        case 'gallery_sets':
            content.gallery_sets = true;
            break;
        case 'forum/newtopic':
            content.forum_newtopic = true;
            break;
        case 'community':
            content.community = true;
            break;
        case 'blog':
            content.blog = true;
            break;
        case 'poll_archive':
            content.poll_archive = true;
            break;
        case 'rules':
            content.rules = true;
            break;
        case 'team':
            content.team = true;
            break;
        case 'imprint':
            content.imprint = true;
            break;
        case 'gallery_images':
            content.gallery_images = true;
            break;
        default:
            content.mainpage = true;
            break;
    }

    // Optionen laden und Link in der Usereiste einfügen
    RMUS.options.readOptions();
    RMUS.options.insertOptionsLink();

    if (RMUS.options.options.miscellaneous_fixedToolbar) {
        RMUS.miscellaneous.createFixedToolbar();	
    }

    // WWW, Streams, Galerie, Ergebnisticker, Schlagzeilen und Forum angezeigt
    if (!content.profile && !content.guides) {
        // WWW ausblenden
        if (RMUS.options.options.leftColumn_www_hideWww === 'checked') RMUS.leftColumn.www.hideWww();

        // Streams ausblenden
        if (RMUS.options.options.leftColumn_streams_hideStreams === 'checked') {
            RMUS.leftColumn.streams.hideStreams();
        } 

        // Ticker ausblenden
        if (RMUS.options.options.rightColumn_ticker_hideTicker === 'checked') RMUS.rightColumn.ticker.hideTicker();

        // Schlagzeilen ausblenden
        if (RMUS.options.options.rightColumn_headlines_hideHeadlines === 'checked') RMUS.rightColumn.headlines.hideHeadlines();  // Alle
        else{	// Individuell
            if (RMUS.options.options.rightColumn_headlines_hideCounterstrike === 'checked') RMUS.rightColumn.headlines.hideCounterstrike();
            if (RMUS.options.options.rightColumn_headlines_hideStarcraft === 'checked') RMUS.rightColumn.headlines.hideStarcraft();
            if (RMUS.options.options.rightColumn_headlines_hideDefenseOfTheAncients === 'checked') RMUS.rightColumn.headlines.hideDefenseOfTheAncients();
            if (RMUS.options.options.rightColumn_headlines_hideLeagueOfLegends === 'checked') RMUS.rightColumn.headlines.hideLeagueOfLegends();
            if (RMUS.options.options.rightColumn_headlines_hideWarcraft3 === 'checked') RMUS.rightColumn.headlines.hideWarcraft3();
            if (RMUS.options.options.rightColumn_headlines_hideSonstiges === 'checked') RMUS.rightColumn.headlines.hideSonstiges();

            // Fixt die Größe des Bildes
            $('#nav_schlagzeilen img[alt=activity]').css('height', '11px');
            $('#nav_schlagzeilen img[alt=activity]').css('width', '11px');
        }

        // Forum ausblenden
        if (RMUS.options.options.rightColumn_forum_hideForum === 'checked')	RMUS.rightColumn.forum.hideForum();	// Komplett ausblenden
        else{	// Individuell
            if (RMUS.options.options.rightColumn_forum_sections === 'checked') {
                RMUS.rightColumn.forum.initializeForum();
            }
        }

        // Neuladen der Forannavigation beziehungsweise der Streams oder Ticker	
        if (RMUS.options.options.rightColumn_forum_reloadForum === 'checked' || RMUS.options.options.leftColumn_streams_reloadStreams === 'checked' || RMUS.options.options.rightColumn_ticker_reloadTicker === 'checked'){
            RMUS.miscellaneous.reloadMainpageData.readPage();
        }

        // Button um die Forennavigation zu aktualisieren
        RMUS.rightColumn.forum.reloadForumPerClick.addimage();
        $('#userscript_reloadForumButton').click(function () { RMUS.rightColumn.forum.reloadForumPerClick.reload(); });
    }

        // Sprung zur letzten Seite in den Suchergebnissen
        if (content.search){
            if (RMUS.options.options.middleColumn_search_jump_to_last_page === 'checked') RMUS.middleColumn.searchJumpToLastpage.displayLink();
        }

    // Nur im Forum (Threadansicht) aktivieren
    if (content.forum_thread) {

        // Link zum Thread und Seite herausfinden
        RMUS.middleColumn.forum.readThreadlink();
        RMUS.middleColumn.forum.readPage();

        // Wenn Lastpage gesetzt ist, zum letzten Post springen
        if (RMUS.options.options.miscellaneous_lastPageJumpToLastPost === 'checked') RMUS.miscellaneous.lastPageJumpToLastPost();

        // Knopf zum hochscrollen
        if (RMUS.options.options.miscellaneous_buttonScrollUp === 'checked') RMUS.miscellaneous.buttonScrollUp();

        // Knopf zum runterscrollen
        if (RMUS.options.options.miscellaneous_buttonScrollDown === 'checked') RMUS.miscellaneous.buttonScrollDown();

        // Titel umsortieren
        if (RMUS.options.options.miscellaneous_reSortTitle === 'checked') RMUS.miscellaneous.reSortTitle();

        // Vorschau
        if (RMUS.options.options.middleColumn_forum_preview === 'checked') {
            RMUS.middleColumn.forum.preview.insertPreviewHtml();
            $('#triggerPreview').click(RMUS.middleColumn.forum.preview.triggerPreview);
        }

        // Posten im Hintergrund
        if (RMUS.options.options.middleColumn_forum_postPerAjax === 'checked') {
            $('input[name=submit_thread]').click(function (event) {
                event.preventDefault();
                RMUS.middleColumn.forum.postPerAjax();
            });
        }

        // Posts nachladen
        if (RMUS.options.options.middleColumn_forum_reloadPosts_readNewPosts === 'checked') {
            RMUS.middleColumn.forum.reloadPosts.readPostcount();

            // Ungelesene Posts markieren		
            if (RMUS.options.options.middleColumn_forum_reloadPosts_markNewPosts === 'checked') {
                // Farbe zum markieren setzen
                if (RMUS.options.options.middleColumn_forum_reloadPosts_markPostColor &&
                    RMUS.options.options.middleColumn_forum_reloadPosts_markPostColor.length){

                    RMUS.middleColumn.forum.reloadPosts.setMarkPostColor();
                }
            }

            if (RMUS.options.options.middleColumn_forum_reloadPosts_jumpToNewPosts === 'checked' && RMUS.options.options.middleColumn_forum_reloadPosts_endlessPage === 'checked'){
                $('a.bookmark').after('<input style="margin-left: 2px;" type="checkbox" id="userscript_enable_jump" name="userscript_enable_jump">');
                RMUS.middleColumn.forum.reloadPosts.jumpToNewPosts.setWaitUntilNextJump();
                window.setInterval(function () {
                    RMUS.middleColumn.forum.reloadPosts.jumpToNewPosts.jump();
                }, parseInt(RMUS.middleColumn.forum.reloadPosts.jumpToNewPosts.waitUntilNextJump, 10) * 1000);	
            }
        }	

        // Avataranimationen stoppen
        if (RMUS.options.options.miscellaneous_stopAvatarAnimation === 'checked') {
            RMUS.miscellaneous.stopAvatarAnimation.stopAnimation();
        }

        // Notzizen einblenden
        if(RMUS.options.options.miscellaneous_note === 'checked') {
            RMUS.miscellaneous.note.initialize();
        }

        // Edit vorbereiten	
        if (RMUS.options.options.middleColumn_forum_editPost === 'checked'){
            RMUS.middleColumn.forum.editPost.initializeEvent();
        }

        // Youtubeplayer ersetzen
        if(RMUS.options.options.miscellaneous_convertYoutube === 'checked') {
            RMUS.miscellaneous.convertYoutube();
        }
        
        // Editbox verschieben
        if (RMUS.options.options.middleColumn_forum_hideForum_editboxTop){
            RMUS.middleColumn.forum.scrollForNewPage.editboxTop();
        }
    }

    // User ignorieren
    if (RMUS.options.options.miscellaneous_ignoreUser === 'checked'){
        RMUS.miscellaneous.ignoreUser.doIgnore(content.forum_thread, content.matches, content.profile);
    }

    // Extrabuttons in den entsprechenden Seiten initialisieren
    if (content.forum_thread || content.forum_newtopic || content.forum_edit || content.matches || content.msg || content.profile || content.groups_show_group) {
        if (RMUS.options.options.miscellaneous_extraButtons === 'checked') {
            RMUS.miscellaneous.extrabuttons.init();
        }
    }

    // HTML für die Optionen injekten und Eventhandler für das Menu setzen
    $('body').append('{{optionshtml}}');

    // Fix image jumping in forum box between requests
    $('head').append('<style type="text/css">div#nav_schlagzeilen div.listing > a > img {width: 11px; height: 11px;} div.cont_box div.listing > img {width: 5px; height: 7px;}</style>');

    $('#saveUserscriptOptions').click(function () {
        RMUS.options.saveOptions();
    });
    $('#openUserscriptOptions').click(function () {
        RMUS.options.loadOptions();
    });
    $('#openUserscriptOptions').click(function () {
        $('#userscriptOptions').toggle();
    });
    $('#closeUserscriptOptions').click(function () {
        $('#userscriptOptions').toggle();
    });

    // Click Handler für Desktop-Notifications um die Berechtigung einzuholen
    if(RMUS.options.options.miscellaneous_reloadMessages === 'checked') {
        $('input#miscellaneous_reloadMessages_desktopNotifications').click(function () {
            if ($(this).is(':checked')) {
                if (window.webkitNotifications) {
                    // const unsigned int PERMISSION_ALLOWED = 0;
                    // const unsigned int PERMISSION_NOT_ALLOWED = 1;
                    // const unsigned int PERMISSION_DENIED = 2;

                    switch (window.webkitNotifications.checkPermission()) {
                        case 1:
                            window.webkitNotifications.requestPermission();
                            break;
                        case 2:
                            alert('Es scheint als hättest Du Desktop-Notifications für readmore.de geblockt. Du kannst diese jedoch einfach in den Einstellungen deines Browsers widerrufen.');
                            break;
                        default:
                            // Permission liegt bereits vor (0). <Nothing to do here...>
                    }
                } else {
                    alert('Diese Funktion funktioniert derzeit nur in Verbindung mit dem Google Chrome Browser');
                    $(this).attr('checked', false);
                }
            }
        });
    }

    // Auf- und Einklappen von Unterkategorien
    $('#toggle_sub_middleColumn_forum_reloadPosts_readNewPosts').click(function () {
        $('.sub_middleColumn_forum_reloadPosts_readNewPosts').toggle();
        $('.sub_middleColumn_forum_reloadPosts_markNewPosts').css('display', 'none');
        $('.sub_middleColumn_forum_reloadPosts_endlessPage').css('display', 'none');
    });
    $('#toggle_sub_middleColumn_forum_reloadPosts_endlessPage').click(function () {
        $('.sub_middleColumn_forum_reloadPosts_endlessPage').toggle();
    });
    $('#toggle_sub_middleColumn_forum_reloadPosts_markNewPosts').click(function () {
        $('.sub_middleColumn_forum_reloadPosts_markNewPosts').toggle();
    });
    $('#toggle_sub_rightColumn_headlines_hideHeadlines').click(function () {
        $('.sub_rightColumn_headlines_hideHeadlines').toggle();
    });
    $('#toggle_sub_rightColumn_forum_hideForum').click(function () {
        $('.sub_rightColumn_forum_hideForum').toggle();
        $('.sub_rightColumn_forum_sections').css('display', 'none');
    });
    $('#toggle_sub_rightColumn_forum_sections').click(function () {
        $('.sub_rightColumn_forum_sections').toggle();
    });
    $('#toggle_sub_miscellaneous_reloadMessages').click(function () {
        $('.sub_miscellaneous_reloadMessages').toggle();
    });
    $('#toggle_sub_miscellaneous_ignoreUser').click(function () {
        $('.sub_miscellaneous_ignoreUser').toggle();
    });
    $('#toggle_sub_middleColumn_forum_scrollForNewPage').click(function () {
        $('.sub_middleColumn_forum_scrollForNewPage').toggle();
    });

    // Icon fuer das Auf- und Zuklappen anpassen
    $('[id*=toggle_sub]').click(function(){
        var img = $(this).attr('src').trim();
        if (img == 'http://readmore.thextor.de/userscript/img/plus_alt_16x16.png') $(this).attr('src', 'http://readmore.thextor.de/userscript/img/minus_alt_16x16.png');
        else $(this).attr('src', 'http://readmore.thextor.de/userscript/img/plus_alt_16x16.png');
    });

    // Prüfen ob eine neue Version erschienen ist
    RMUS.miscellaneous.checkVersion();

    // content in den LocalStorage speichern
    var seen = [];
    localStorage.setItem('userscriptContent', 
        JSON.stringify(content, function(key, val) {
            if (typeof val == "object") {
                if (seen.indexOf(val) >= 0) {
                    return undefined
                }
                seen.push(val);
            }

            return val;
        })
    );

    // Im Hintergrund ausgeführte Aktionen starten (zeitunkritisch)
    window.setInterval(function(){

        // content auslesen
        if (!content){
            content = JSON.parse(localStorage.getItem('userscriptContent'));
        }

        // Wenn wir uns in einem Thread befinden
        if (content.forum_thread) {

            // Posts nachladen
            if (RMUS.options.options.middleColumn_forum_reloadPosts_readNewPosts === 'checked') {
                RMUS.middleColumn.forum.reloadPosts.readNewPosts();
            }		

            // Avataranimationen stoppen
            if (RMUS.options.options.miscellaneous_stopAvatarAnimation === 'checked') {
                RMUS.miscellaneous.stopAvatarAnimation.stopAnimation();
            }
        }	
    }, (parseInt(RMUS.options.options.sub_middleColumn_forum_reloadPosts_timeToWait, 10) > 2) ? parseInt(RMUS.options.options.sub_middleColumn_forum_reloadPosts_timeToWait, 10) * 1000 : 3000);

    // Im Hintergrund ausgeführte Aktionen starten (3x in der Sekunde, sehr zeitkritisch)
    window.setInterval(function(){

        // Content auslesen
        if (!content){
            content = JSON.parse(localStorage.getItem('userscriptContent'));
        }

        if (content.forum_thread) {
            if (RMUS.options.options.middleColumn_forum_reloadPosts_readNewPosts === 'checked') {
                if (RMUS.options.options.middleColumn_forum_reloadPosts_markNewPosts === 'checked') {
                    // (de)-Markieren
                    RMUS.middleColumn.forum.reloadPosts.markNewPosts();			

                    // Favicon verändern
                    if (RMUS.options.options.middleColumn_forum_reloadPosts_changeFavicon === 'checked'){
                        RMUS.middleColumn.forum.reloadPosts.changeFavicon();
                    }

                    // Postanzahl im Tab anzeigen
                    if (RMUS.options.options.middleColumn_forum_reloadPosts_showNewPostsTitle === 'checked') {
                        RMUS.middleColumn.forum.reloadPosts.showNewPostsTitle();
                    }
                }
            }

            // Beim ereichen des letzten Posts ggf. die nächste Seite nachladen. Nur wenn wir uns nicht auf der letzten Seite befinden!
            if (RMUS.options.options.middleColumn_forum_scrollForNewPage === 'checked' && $.trim($('div.floatl.m2.elf').html()).substr($.trim($('div.floatl.m2.elf').html()).length-4) != '</b>') {
                RMUS.middleColumn.forum.scrollForNewPage.insertPosts();
            }           
        }
    }, 500);

    // Im Hintergrund ausgeführte Aktionen starten (Nur alle 15 Sekunden)
    window.setInterval(function(){

        // Außer auf dem Profil und der Guides
        if (!content.profile && !content.guides) {

            // Streams und Forennavigation nachladen (Nur, wenn auch eingeblendet)
            if (RMUS.options.options.rightColumn_forum_reloadForum === 'checked' && RMUS.options.options.rightColumn_forum_hideForum != 'checked'
                || RMUS.options.options.leftColumn_streams_reloadStreams === 'checked' && RMUS.options.options.leftColumn_streams_hideStreams != 'checked'
                || RMUS.options.options.rightColumn_ticker_reloadTicker === 'checked' && RMUS.options.options.rightColumn_ticker_hideTicker != 'checked') {

                RMUS.miscellaneous.reloadMainpageData.readPage();

                // Forennavigation
                if (RMUS.options.options.rightColumn_forum_hideForum !== 'checked'
                    && RMUS.options.options.rightColumn_forum_reloadForum === 'checked') {

                    // Lag im FF vermindern
                    window.setTimeout(RMUS.rightColumn.forum.reloadForum(), 2000);					
                }

                // Streams
                if (RMUS.options.options.leftColumn_streams_hideStreams != 'checked'
                    && RMUS.options.options.leftColumn_streams_reloadStreams === 'checked') {

                    // Lag im FF vermindern
                    window.setTimeout(RMUS.leftColumn.streams.reloadStreams(), 4000);			
                }

                // Ticker
                if (RMUS.options.options.rightColumn_ticker_hideTicker != 'checked'
                    && RMUS.options.options.rightColumn_ticker_reloadTicker === 'checked') {

                    // Lag im FF vermindern
                    window.setTimeout(RMUS.rightColumn.ticker.reloadTicker(), 6000);
                }
            }
        }

        // PMs auf jeder Seite überprüfen (Usernavi buggy, daher nicht Teil der mainPageData)
        if(RMUS.options.options.miscellaneous_reloadMessages === 'checked') {
            RMUS.miscellaneous.messages.checkForNewMessages();
        }

    }, 15000);  
};