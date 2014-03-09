/**
 * RMUSContent
 * ===========
 *
 * Simple Klasse um auszulesen wo wir uns auf der Readmore.de Seite befinden.
 * Dadurch werden Funktionen des Userscriptes gesteuert.
 */
function RMUSContent(){

    /**
     * Property in dem alle content Möglichkeiten aufgelistet sind. Default sind alle false, die _init Methode
     * liest die aktuelle Seite aus.
     * @type {{mainpage: boolean, profile: boolean, groups_new: boolean, groups_group_list: boolean, groups_show_group: boolean, msg: boolean, news_archive: boolean, headlines_overview: boolean, www: boolean, widget_create_ticker: boolean, guides: boolean, articles: boolean, news: boolean, search: boolean, match_overview: boolean, db: boolean, coverages: boolean, demo_overview_pov: boolean, demo_overview_hltv: boolean, demo_overview: boolean, video_overview: boolean, gallery_sets: boolean, forum_forum: boolean, forum_board: boolean, forum_thread: boolean, forum_edit: boolean, forum_newtopic: boolean, community: boolean, blog: boolean, poll_archive: boolean, rules: boolean, team: boolean, imprint: boolean, userstream: boolean, gallery_images: boolean, matches: boolean}}
     * @private
     */
    var _content = {
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

    /**
     * Action Parameter in der URL
     * @type {String | Null}
     * @private
     */
    var _action = null;

    /**
     * Aktuelle Seite auf der wir uns befinden
     * @type {string}
     * @private
     */
    var _currentPage = '';

    /**
     * Methode wird bei der Instanziierung des Objektes ausgeführt. Liest sowohl den Action und die
     * aktuelle Seite aus.
     * @private
     */
    var _init = function(){

        _readAction();
        _readCurrentPage();

        if (_content.hasOwnProperty(_currentPage)){
            _content[_currentPage] = true;
        }
        else{
            _content['mainpage'] = true;
        }
    };

    /**
     * Übergeben wird welche Seite abgefragt werden soll, die Funktion liefert dann true oder falls zurück,
     * je nachdem ob wir aktuell auf der Seite sind oder nicht.
     * @param what {String}
     * @returns {Boolean}
     */
    this.getContent = function(what){
        return _content[what];
    };

    /**
     * Erlaubt es direkt mehrere Abfragen mit einer Methode zu erledigen. Ist minimal langsamer, bringt
     * meiner Meinung nach aber einen Vorteil in der Übersichtlchkeit des Codes.
     * @param what {Array}
     * @param type {String} Möglichkeiten sind AND/OR. Wird ein andere Parameter übergeben, wird OR als
     *                      Default-Wert gesetzt.
     * @returns {boolean}
     */
    this.getMultipleContent = function(what, type){
        var returnValue = false;
        var that        = this;

        switch(type){
            // AND wurde angegeben
            case 'AND':
                returnValue = true;

                $(what).each(function(index, value){
                    if (!that.getContent(value)){
                        return returnValue = false;
                    }
                });
            break;

            // OR oder ein falscher Parameter wurde angegeben
            default:
                $(what).each(function(index, value){
                    if (that.getContent(value)){
                        returnValue = true;
                        return false;
                    }
                });
            break;
        }

        return returnValue;
    };

    /**
     * Gibt den Action-Parameter zurück
     * @returns {String|Null}
     */
    this.getAction = function(){
        return _action;
    };

    /**
     * Liest aus der URL (codument.location) Parameter aus und extrahiert den Content-Part,
     * damit wir wissen, auf welcher Seite wir und momentan befinden.
     * @private
     */
    var _readCurrentPage = function(){
        var getVars = document.location.search.replace(/[?]/g, '').replace(/[&]/g, '=').split('=');
        var curPage = '';

        $.each(getVars, function (index, value) {
            if (value == 'cont') {
                curPage = getVars[index+1].replace(/\//g, '_');
            }
        });

        _currentPage = curPage;
    };

    /**
     * Liest den action Parameter aus der URL aus. Wird beispielsweise in den Gruppen gesetzt. Die Extrabuttons
     * benötigen diese Informationen.
     * @private
     */
    var _readAction = function(){
        var action = document.location.search.match(/action=([a-zA-Z]+)/i);

        if (action && action[1]) {
            action = action[1];
        } else {
            action = null;
        }

        _action = action;
    };

    /**
     * Init Methode starten
     */
    _init();
}