/**
 * RMUSContent
 * ===========
 *
 * Simple Klasse um auszulesen wo wir uns auf der Readmore.de Seite befinden.
 * Dadurch werden Funktionen des Userscriptes gesteuert.
 */
function RMUSContent(){

    /**
     * Property in dem alle content Möglichkeiten aufgelistet sind. Default sind alle falsch, die _init Methode
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
     * Aktuelle Seite auf der wir uns befinden
     * @type {string}
     * @private
     */
    var _currentPage = '';

    _init = function(){

        _readCurrentPage();

        switch (_currentPage) {
            case '':
                _content.mainpage = true;
                break;
            case 'profile':
                _content.profile = true;
                break;
            case 'forum/thread':
                _content.forum_thread = true;
                break;
            case 'forum/forum':
                _content.forum_forum = true;
                break;
            case 'forum/board':
                _content.forum_board = true;
                break;
            case 'forum/edit':
                _content.forum_edit = true;
                break;
            case 'matches':
                _content.matches = true;
                break;
            case 'www':
                _content.www = true;
                break;
            case 'userstream':
                _content.userstream = true;
                break;
            case 'groups/new':
                _content.groups_new = true;
                break;
            case 'groups/group_list':
                _content.groups_group_list = true;
                break;
            case 'groups/show_group':
                _content.groups_show_group = true;
                break;
            case 'msg':
                _content.msg = true;
                break;
            case 'news_archive':
                _content.news_archive = true;
                break;
            case 'headlines_overview':
                _content.headlines_overview = true;
                break;
            case 'widget/create_ticker':
                _content.widget_create_ticker = true;
                break;
            case 'guides':
                _content.guides = true;
                break;
            case 'articles':
                _content.articles = true;
                break;
            case 'news':
                _content.news = true;
                break;
            case 'search':
                _content.search = true;
                break;
            case 'match_overview':
                _content.match_overview = true;
                break;
            case 'db':
                _content.db = true;
                break;
            case 'coverages':
                _content.coverages = true;
                break;
            case 'demo_overview_pov':
                _content.demo_overview_pov = true;
                break;
            case 'demo_overview_hltv':
                _content.demo_overview_hltv = true;
                break;
            case 'demo_overview':
                _content.demo_overview = true;
                break;
            case 'video_overview':
                _content.video_overview = true;
                break;
            case 'gallery_sets':
                _content.gallery_sets = true;
                break;
            case 'forum/newtopic':
                _content.forum_newtopic = true;
                break;
            case 'community':
                _content.community = true;
                break;
            case 'blog':
                _content.blog = true;
                break;
            case 'poll_archive':
                _content.poll_archive = true;
                break;
            case 'rules':
                _content.rules = true;
                break;
            case 'team':
                _content.team = true;
                break;
            case 'imprint':
                _content.imprint = true;
                break;
            case 'gallery_images':
                _content.gallery_images = true;
                break;
            default:
                _content.mainpage = true;
                break;
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
     * Liest aus der URL (codument.location) Parameter aus und extrahiert den Content-Part,
     * damit wir wissen, auf welcher Seite wir und momentan befinden.
     * @private
     */
    _readCurrentPage = function(){
        var getVars = document.location.search.replace(/[?]/g, '').replace(/[&]/g, '=').split('=');
        var curPage = '';

        $.each(getVars, function (index, value) {
            if (value == 'cont') {
                curPage = getVars[index+1];
            }
        });

        _currentPage = curPage;
    };

    /**
     * Init Methode starten
     */
    _init();
}