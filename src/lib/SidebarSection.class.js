/**
 * Sidebar Section
 * ======
 *
 * Klasse für das Verwalten von Sidebar Sektionen (Foren/Headlines)
 */

function SidebarSection($, section) {

    var _self = this,
        _section = section;

    /**
     * Gibt den Link mit dem übergebenen Namen zurück
     *
     * @param name
     * @private
     */
    this._getTarget = function (name) {
        var target = $("div.headlines_cat a:contains('" + name + "')", _section);

        return target.length === 1 ? target : null;
    };

    /**
     * Komplette Sektion ausblenden
     */
    this.hideAll = function () {
        var title = _section.prev('h3');
        title.hide().prev('hr').hide();
        _section.hide();
    };

    /**
     * Einzelne Einträge einer Sektion ausblenden
     *
     * @param name
     */
    this.hideSingle = function (name) {
        var target = this._getTarget(name);

        if (target) {
            target.parents('div.headlines_cat:first').hide().next('ul').hide();
        }
    };

    /**
     * Neusortieren der Sektionen
     *
     * @param sections
     */
    this.resortSections = function (sections) {
        var html = '';

        sections.forEach(function (sectionItem) {
            var target = _self._getTarget(sectionItem.title);

            if (target === null) {
                return;
            }

            var headline = target.parents('div.headlines_cat:first'),
                content = headline.next('ul');

            html += headline[0].outerHTML + content[0].outerHTML;
        });

        _section.html(html);
    };

    /**
     * Optionen anwenden, umsortieren
     *
     * @param optionSections
     * @param mappings
     */
    this.process = function (optionSections, mappings) {
        var resortable = [];

        for (var section in optionSections) {
            if (!optionSections.hasOwnProperty(section)) {
                continue;
            }

            var raw = section.split('_').pop(),
                mapped = mappings[raw];

            if (optionSections[section] === '0') {
                this.hideSingle(mapped);
            } else {
                var sort = parseInt(optionSections[section]);
                resortable[sort] = {
                    raw: raw,
                    title: mapped,
                    sort: sort
                }
            }
        }

        if (resortable.length > 0) {
            this.resortSections(resortable);
        }
    }
}
