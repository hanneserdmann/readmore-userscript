/**
 * ForumNavigation
 * ==============
 *
 * Sorgt für das Umsortieren (TODO) und das Neuladen der Forumnavigation.
 */

function ForumNavigation(_options, _reloadPageData, _misc) {

    var _self = this;

    /**
     * Lädt die Forennavigation neu.
     * @return {[type]} [description]
     */
    this.reloadForum = function() {
        var reloadData = $(_reloadPageData.getPageData()).find("div#forums_list");

        if (reloadData && reloadData.length > 0) {
            $("div#forums_list").html(reloadData);
        }

        // Nachdem das Forum neugeladen wurde, müssen die Pfeile eventuell wieder angepasst werden
        if (_options.getOption("miscellaneous_lastPageJumpToLastPost")) {
            _misc.changeForumArrowBehavior();
        }
    };

    /**
     * Fügt das Bild, mit dem man das Forum manuell neuladen kann, ein.
     */
    this.addReloadImage = function() {
        return $("h3 > a[href$='/forums']").parent().append('<span style="float: right;"><img id="userscript_reloadForumButton" src="http://i.imgur.com/oPFco8X.png" style="height: 16px; padding-top: 2px; cursor: pointer;">&nbsp;</span>');
    }

    this.reloadForumManually = function() {
        _reloadPageData.readPage();
        setTimeout(function() {
            _self.reloadForum();
        }, 500);
    }

}
