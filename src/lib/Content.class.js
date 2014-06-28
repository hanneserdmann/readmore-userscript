/**
 * Blablabla kommt Morgen, bin müde und will gleich pennen :D
 */

function Content($){

    var _self = this;

    /**
     * Hier werden die verschiedenen Möglichkeiten zum Abfragen definiert.
     * Denke elements und selector sind selbsterklärend.
     * @type {{forumPosts: {selector: string, elements: Array}}}
     * @private
     */
    var _content = {
        'forumNavigation': {
            'selector': 'div#forums_list',
            'function': '',
            'elements': []
        },
        'forumPosts': {
            'selector': 'div.forum_post',
            'function': '',
            'elements': []
        },
        'headlines': {
            'selector': '#headlines_list',
            'function': '',
            'elements': []
        },
        'tickerMatches': {
            'selector': '#matches_list',
            'function': '',
            'elements': []
        },
        'tickerComplete': {
            'selector': '',
            'function': 'tickerComplete',
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
                // Einfachen Selector oder Funktion nutzen
                returnValue = (_content[name].function ? _selectElementFunction(name, context) : _selectElement(name, context));

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
        return (context === ''  ? $(_content[name].selector)
                                : $(context).find(_content[name].selector));
    };

    var _selectElementFunction = function(name, context){
        var $element = (context === '' ? $(document) : $.parseHTML(context));
        return _functionContainer[_content[name].function]($element);
    };

    /**
     * Container für die Funktionen.
     * @type {{tickerComplete: tickerComplete}}
     * @private
     */
    var _functionContainer = {
        tickerComplete: function($element){
            var returnValue = $element.find('#c_right').find('#matches_control, .matches_filter, #matches_list, a.control');
            if (returnValue.length){
                returnValue = $.merge(returnValue, returnValue.last().next());
                returnValue = $.merge(returnValue, returnValue.first().next());
            }
            return returnValue;
        }
    };
};