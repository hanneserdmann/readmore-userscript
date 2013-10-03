RMUS.rightColumn = {

/************************
*	TICKER		*
*************************/
    ticker : {
        // Blendet den Ticker komplett aus
        hideTicker : function () {
            $('#tickr, div.line3:eq(0), div.line3:eq(1)').css('display','none');
            return false;
        },

        reloadTicker : function(){
            var reloadData = '';
            reloadData = $(RMUS.miscellaneous.reloadMainpageData.mainpageData).find('#nav_matchticker').html();

            if (reloadData && reloadData.length > 0) {
                $('#nav_matchticker').html(reloadData);
            }

            return false;
        }
    },

/************************
*	HEADLINES	*
*************************/
    headlines : {
        // Blendet die Schlagzeilen komplett aus
        hideHeadlines : function () {
            document.getElementById('headlines').style.display = "none";
            return false;
        },

        // Blendet Counterstrike aus
        hideCounterstrike : function () {
            for (var i = 0; i < 8; i++) {
                document.getElementById('nav_schlagzeilen').children[i].style.display = "none";
            }
            return false;
        },

        // Blendet Starcraft aus
        hideStarcraft : function () {
            for (var i = 8; i < 16; i++) {
                document.getElementById('nav_schlagzeilen').children[i].style.display = "none";
            }
            return false;
        },

        // Blendet Dota aus
        hideDefenseOfTheAncients : function () {
            for (var i = 16; i < 23; i++) {
                document.getElementById('nav_schlagzeilen').children[i].style.display = "none";
            }
            return false;
        },

        // Blendet LoL aus
        hideLeagueOfLegends : function () {
            for (var i = 23; i < 29; i++) {
                document.getElementById('nav_schlagzeilen').children[i].style.display = "none";
            }
            return false;
        },

        // Blendet Warcraft aus
        hideWarcraft3 : function () {
            for (var i = 29; i < 34; i++) {
                document.getElementById('nav_schlagzeilen').children[i].style.display = "none";
            }
            return false;
        },

        // Blendet Sonstiges aus
        hideSonstiges : function () {
            for (var i = 34; i < 43; i++) {
                document.getElementById('nav_schlagzeilen').children[i].style.display = "none";
            }
            return false;
        }
    },

/************************
*	FORUM		*
*************************/
    forum : {
        // Startet das umsortieren des Forums
        initializeForum : function () {
            var html = '';
            var sortForum = [RMUS.options.options.rightColumn_forum_hideForum_0, RMUS.options.options.rightColumn_forum_hideForum_1, RMUS.options.options.rightColumn_forum_hideForum_2, RMUS.options.options.rightColumn_forum_hideForum_3, RMUS.options.options.rightColumn_forum_hideForum_4];	       
            var menuItems	= document.getElementsByClassName('cont_box')[1].children;
            var sections	= ['','','','',''];

            // Alle Menueinträge durchgehen
            for (var j = 0, k = menuItems.length, l = -1, item = ''; j < k; j++){
                // HTML-Auslesen
                item = menuItems[j].outerHTML;						
                // Sektionen hochzählen
                if (item.indexOf('class="bml"') !== -1)	l++;  
                // Bilder in der "Featured Thread" Sektion anpassen
                if (l === 0) item = item.replace('" height="11px"', '" height="11px" class="userscript11px" ');				
                // Eintrag zur Sektion hinzufügen
                sections[l] += item;
            }

            // Leerzeilen entfernen
            for (var n = 0, o = sections.length; n < o; n++){
                sections[n] = sections[n].replace(/(<div class="spacer_s"><\/div>)|(<br>)|(<br \/>)/g, '');
            }

            // Reihenfolge der Sektionen entsprechen den Optionen anpassen
            for (var i = 0, m = sections.length; i < m; i++) {
                switch (sortForum[i]){
                    case 'featuredthreads':	html += sections[0] + '<br>';
                                break;
                    case 'esportforen':	html += sections[1] + '<br>';
                                break;
                    case 'technik':		html += sections[2] + '<br>';
                                break;
                    case 'offtopicforen':	html += sections[3] + '<br>';
                                break;
                    case 'spiele':		html += sections[4] + '<br>';
                                break;									
                }
            }

            // Einfügen
            document.getElementsByClassName('cont_box')[1].innerHTML = html

            // Größte der Bilder anpassen
            $('.userscript11px').css('height', '11px');
            $('.userscript11px').css('width', '11px');

            return false;
        },

        // Forennavigation neuladen
        reloadForum : function() {
            var reloadData = '';
            reloadData = $(RMUS.miscellaneous.reloadMainpageData.mainpageData).find('div.cont_box:last').html();

            if (reloadData && reloadData.length > 0) {
                $('.cont_box:last').html(reloadData);
                if (RMUS.options.options.rightColumn_forum_sections == 'checked') RMUS.rightColumn.forum.initializeForum();
            }

            return false;
        },

        // Forennavigation manuell neuladen
        reloadForumPerClick : {
            addimage : function (){
                $('a.headline_link[href="index.php?cont=forum/forum"]').parent().append('<span style="float: right;"><img id="userscript_reloadForumButton" src="http://readmore.thextor.de/userscript/img/refresh.png" style="height: 13px; padding-top: 2px; cursor: pointer;">&nbsp;</span>');
                return false;
            },

            reload : function(){
                RMUS.miscellaneous.reloadMainpageData.readPage();
                window.setTimeout(function () {RMUS.rightColumn.forum.reloadForum();}, 1500);
            }
        },

        // Blendet das Forum komplett aus
        hideForum : function () {
            $('div.headline_bg:last, div.cont_box:last').css('display','none');			
            return false;
        }
    }
};