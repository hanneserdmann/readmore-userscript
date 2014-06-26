/**
 * ForumNavigation
 * ==============
 *
 * Sorgt für das Umsortieren (TODO) und das Neuladen der Forumnavigation.
 */

function ForumNavigation($, _options, _reloadPageData, _misc, _content) {

    var _self = this;

    /**
     * Lädt die Forennavigation neu.
     * @return {[type]} [description]
     */
    this.reloadForum = function() {
        var reloadData = _content.get('forumNavigation', _reloadPageData.getPageData());

        if (reloadData.length) {
            _content.get('forumNavigation').html(reloadData.html());
        }

        // Nachdem das Forum neugeladen wurde, müssen die Pfeile eventuell wieder angepasst werden
        if (_options.getOption("miscellaneous_lastPageJumpToLastPost")) {
            _misc.changeForumArrowBehavior();
        }
    };

    /**
     * Fügt den Button ein, mit dem man das Forum manuell neuladen kann.
     */
    this.addReloadBtn = function() {
        return $("h3 > a[href$='/forums']").parent().append('<span style="float: right;"><i id="userscript_reloadForumButton" title="Forum aktualisieren" class="rmus-icon rmus-icon-arrows-cw" style="cursor: pointer;"></i></span>');
    }

    /**
     * Lädt das Forum manuell neu, wenn auf den Button geklickt wird.
     * @return {[type]} [description]
     */
    this.reloadForumManually = function() {
        _reloadPageData.readPage();
        setTimeout(function() {
            _self.reloadForum();
        }, 500);
    }

    /**
     * Sortiert den Thread-Titel um, sodass dieser an erster Stelle steht.
     */
    this.resortTitle = function () {
        var title = $('head').find('title').text();
        var pieces = title.split(' \u00BB Thread: ');

        document.title = pieces.reverse().join(' \u00BB ');
    }
}
