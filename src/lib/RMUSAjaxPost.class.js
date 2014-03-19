/**
 * RMUSAjaxPost
 * ============
 *
 * Ermöglicht das Posten ohne Seitenrefresh
 */

function RMUSAjaxPost(_preview){

    var _$submitForm = {};
    var _$sendButton = {};

    var _sendPost = function(){
        var post = _$submitForm.serialize();

        // Sonderzeichen ersetzen
        post = String(RMUS.middleColumn.forum.replaceSpecialChars(post));

        // Während der Wartezeiten den Submit-Knopf ausblenden
        _$sendButton.css('display', 'none');

        // Ist das Automatische neuladen deaktiviert, die nötigen Vorkehrungen dazu treffen
        if(RMUS.middleColumn.forum.reloadPosts.postcount == 0) {
            RMUS.middleColumn.forum.reloadPosts.readPostcount();
        }

        // Der eigentliche Post
        $.ajax({
            type:'POST',
            url: '?cont=forum/do_reply',
            data: post,
            async: true,
            cache: false,
            contentType: 'application/x-www-form-urlencoded; charset=iso-8859-1;',
            dataType: 'html',

            success: function (response) {
                // Prüft ob der Beitrag lang genug war
                var error = response.match('Dein Beitrag muss aus mindestens 3 Zeichen bestehen.');

                if(error != null) {
                    // Fehlermeldung ausgeben
                    alert('Dein Beitrag muss aus mindestens 3 Zeichen bestehen!');
                } else {
                    // Nachricht aus dem Feld löschen und Posts neuladen
                    $('#c_comment').val('');

                    // Falls die Preview an ist -> ausschalten
                    if (_preview.isEnabled()){
                        _preview.triggerPreview();
                    }

                    RMUS.middleColumn.forum.reloadPosts.readNewPosts();
                }

                // Submit-Knopf wieder einblenden
                _$sendButton.css('display', 'block');
            },
            error: function (){
                // Submit-Knopf wieder einblenden
                _$sendButton.css('display', 'block');

                // Fehlermeldung
                alert('Leider ist ein Fehler ist aufgetreten!');
            }
        });
    };

    /**
     * Fügt den Eventhandler hinzu und triggert so den eigentlichen
     * Post im Hintergrund
     */
    this.init = function(){
        _$submitForm = $('form[name=submitpost]');
        _$sendButton = $('.center:last');

        $('input[name=submit_thread]').click(function (event) {
            event.preventDefault();
            _sendPost();
        });
    };
}