/**
 * RMUSNotes
 * =========
 *
 * Notizfunktion um Text zu Usern zu verfassen.
 * Unter dem Avatar in Posts wird eine Textarea eingeblendet.
 */

function RMUSNotes(){

    /**
     * Object aus dem Localstorage
     * @type {{}}
     * @private
     */
    var _notes = {};

    /**
     * Fügt eine Textarea unter dem User-Avatar ein. Übergeben wird das TD und die
     * Userid des Benutzers/Posts.
     * @param $element {{}}
     * @param userid {Integer}
     * @private
     */
    var _appendTextarea = function($element, userId){
        $element.append('<textarea class="RMUSIgnoreUser" style="width: 95.5%; height: 80px;" data-userid="' + userId + '"></textarea>');
    };

    /**
     * Fügt den Text in die Textarea ein.
     * @private
     */
    var _insertNoteText = function(){
        $('textarea.RMUSIgnoreUser').each(function(){
            var $this   = $(this);
            var userId  = $this.data('userid');

            if (_notes.hasOwnProperty(userId)){
                $this.html(_notes[userId]);
            }
        });
    };

    /**
     * Fügt den Event-Handler hinzu, damit die Notizen
     * gespeichert werden.
     * @private
     */
    var _addEventHandler = function(){
        var $elements = $('textarea.RMUSIgnoreUser');

        // Alte Handler entfernen
        $elements.off('focusout');

        // Beim rausklicken abfeuern
        $elements.on('focusout', function(){
            var $this   = $(this);
            var userId  = $this.data('userid');

            // Text einlesen
            _notes[userId] = $this.val();

            // Textareas updaten
            _insertNoteText();
            _saveNotes();
        });
    };

    /**
     * Liest die Notizen aus dem Localstorage aus. Falls readFromStorage mit false übergeben wird,
     * werden die Notizen nicht aus dem localstorage geladen.
     * @param readFromStorage {Boolean}
     * @private
     */
    var _readNotes = function(){
        _notes = JSON.parse(localStorage.getItem('userscriptNote'));
    };

    /**
     * Speichert die Notes.
     * @private
     */
    var _saveNotes = function(){
        localStorage.setItem('userscriptNote', JSON.stringify(_notes));
    }

    /**
     * Starten die Notizfunktion
     * @param readFromStorage
     */
    this.init = function(readFromStorage){
        var $posts = $('tr[class*=post_]');

        readFromStorage = typeof readFromStorage !== 'undefined' ? readFromStorage : true;

        if (readFromStorage){
            _readNotes();
        }

        $posts.find('td:first').not(':has(textarea)').each(function(){
            var $this   = $(this);
            var userId  = $this.find('a.bml').attr('href').match(/&id=([0-9]+)/)[1];
            _appendTextarea($this, userId);
        });

        _addEventHandler();
        _insertNoteText();
    };
}