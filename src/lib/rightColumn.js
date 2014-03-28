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
            var reloadData = $(ReloadPageData.getPageData()).find('#nav_matchticker').html();

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

        headlineElements: [],

        // Blendet die Schlagzeilen komplett aus
        hideHeadlines : function () {
            document.getElementById('headlines').style.display = "none";
            return false;
        },

        // Blendet Counterstrike aus
        hideCounterstrike : function () {
            if (this.headlineElements.length === 0) this.readHeadlineElements();
            $(this.headlineElements[0]).css('display', 'none');
            return false;
        },

        // Blendet Starcraft aus
        hideStarcraft : function () {
            if (this.headlineElements.length === 0) this.readHeadlineElements();
            $(this.headlineElements[1]).css('display', 'none');
            return false;
        },

        // Blendet Dota aus
        hideDefenseOfTheAncients : function () {
            if (this.headlineElements.length === 0) this.readHeadlineElements();
            $(this.headlineElements[2]).css('display', 'none');
            return false;
        },

        // Blendet LoL aus
        hideLeagueOfLegends : function () {
            if (this.headlineElements.length === 0) this.readHeadlineElements();
            $(this.headlineElements[3]).css('display', 'none');
            return false;
        },

        // Blendet Warcraft aus
        hideWarcraft3 : function () {
            if (this.headlineElements.length === 0) this.readHeadlineElements();
            $(this.headlineElements[4]).css('display', 'none');
            return false;
        },

        // Blendet Sonstiges aus
        hideSonstiges : function () {
            if (this.headlineElements.length === 0) this.readHeadlineElements();
            $(this.headlineElements[5]).css('display', 'none');
            return false;
        },

        readHeadlineElements: function(){
            var elements    = document.getElementById('nav_schlagzeilen').children;
            var count       = elements.length - 4; // Einsenden, Archiv, Übersicht

            this.headlineElements = [];

            for(var i = 0, k = -1; i < count; i++){
                if (elements[i].className === 'bml'){
                    this.headlineElements[++k] = [];
                }

                this.headlineElements[k].push(elements[i]);
            }
        }
    },

/************************
*	FORUM		*
*************************/
    forum : {
        // Startet das umsortieren des Forums
        initializeForum : function () {
            var html = '';
            var sortForum = [Options.getOption('rightColumn_forum_hideForum_0'), Options.getOption('rightColumn_forum_hideForum_1'), Options.getOption('rightColumn_forum_hideForum_2'), Options.getOption('rightColumn_forum_hideForum_3'), Options.getOption('rightColumn_forum_hideForum_4')];
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

            // Keine Featured Threads vorhanden -> rauswerfen
            if (sections[4] === ''){
                var sectionsNew = [''];
                for (var i = 0, m = sections.length; i < m; i++) {
                    if (sections[i] !== ''){
                        sectionsNew.push(sections[i]);
                    }
                }
                sections = sectionsNew;
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

            // Noch einmal prüfen ob Leerzeilen vorhanden sind, nötig wegen dem Featured Thread fix
            html = html.replace(/(<br>|<br \/>)+/gi, '<br>');

            // Einfügen
            document.getElementsByClassName('cont_box')[1].innerHTML = html;

            // Größe der Bilder anpassen
            $('.userscript11px').css('height', '11px').css('width', '11px');

            return false;
        },

        // Forennavigation neuladen
        reloadForum : function() {
            var reloadData = $(ReloadPageData.getPageData()).find('div.cont_box:last').html();

            if (reloadData && reloadData.length > 0) {
                $('.cont_box:last').html(reloadData);
                if (Options.getOption('rightColumn_forum_sections') == 'checked') RMUS.rightColumn.forum.initializeForum();
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
                ReloadPageData.readPage();
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