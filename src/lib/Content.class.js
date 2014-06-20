/**
 * Blablabla kommt Morgen, bin müde und will gleich pennen :D
 */

function Content(){

    /**
     * Hier werden die verschiedenen Möglichkeiten zum Abfragen definiert.
     * Denke elements und selector sind selbsterklärend.
     * @type {{forumPosts: {selector: string, elements: Array}}}
     * @private
     */
    var _content = {
        'forumPosts': {
            'selector': 'div.forum_post',
            'elements': []
        },
        'headlines': {
            'selector': '#headlines_list',
            'elements': []
        }
    };

    /**
     * Als Name wird hier einfach ein String übergeben, der auf die erste Ebene in dem _content Object passt. Wird KEIN
     * context Parameter übergeben, werden die Daten aus dem aktuellen DOM geladen und zwischengespeichert.
     * Mit Context (was z.B. bei übergabe von Daten die per Ajax geholt werden nützlich ist), wird nicht
     * gecached und mit $(context).find() gearbeitet.
     * @param name
     * @param context
     * @returns {Array}
     */
    this.get = function(name, context){
        context = typeof context !== 'undefined' ? context : '';

        var returnValue = [];

        if (_content.hasOwnProperty(name)){
            // Falls das Array leer ist oder ein Kontext übergeben wurde
            if (!_content[name].elements.length || context !== ''){
                // Daten auslesen
                returnValue = _selectElement(name, context);

                // Kein Kontext -> Cachen
                if (context === ''){
                    _content[name].elements = returnValue;
                }
            }
            // Kein Kontext und das Element wurde bereits selektiert
            else{
                returnValue = _content[name].elements;
            }
        }

        return returnValue;
    };

    var _selectElement = function(name, context){
        if (context === '')     return $(_content[name].selector);
        else                    return $(context).find(_content[name].selector);
    };
};