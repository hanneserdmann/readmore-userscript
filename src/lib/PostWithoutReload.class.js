/**
 * PostWithoutReload
 * =================
 *
 * Klasse um einen Beitrag im Forum zu schreiben ohne die Seite neuladen zu
 * müssen.
 */

function PostWithoutReload($, _options,_reloadPosts){
    var _$form          = [];
    var _$inputField    = [];
    var _$submitButton  = [];
    var _crypt          = '';


    this.init = function(){
        _$form           = $('#c_content form:last');
        _$inputField     = _$form.find('#post_text_0');
        _$submitButton   = _$form.find('input[type=submit]');
        _crypt           = _$form.find('input[name=crypt]').val();

        // Prüfen ob input Feld und Submitbutton gefunden wurden
        if (_$inputField.length && _$submitButton.length){
            _addEventListener();

            // Prüfen ob reloadPosts aktiv ist, sonst initialisieren (ohne intervall)
            if (!_options.getOption('middleColumn_forum_reloadPosts_readNewPosts')){
                _reloadPosts.init(false);
            }
        }
    };

    var _addEventListener = function(){
        _$submitButton.on('click', function(e){
            e.preventDefault();
            _postMEssage();
        });
    };

    var _postMEssage = function(){
        var postData = {
            'post':         1,
            'crypt':        _crypt,
            'post_text_0':  _$inputField.val()
        };

        // Button und Field sperren, damit nicht versehentlich noch mehr abgeschickt wird
        _$inputField.prop('disabled', true);
        _$submitButton.prop('disabled', true);

        // Posten
        var postRequest = $.post(document.location.pathname, postData);
            // Bei einem Fehler eine simple Meldung ausgeben
            postRequest.fail(function(){
                alert('Der Post konnte nicht abgeschickt werden, bitte lade die Seite neu und versiche es erneut!');
            });
            // Post ist durchgelaufen, kann aber trotzdem fehlerhaft sein
            // Mindestanzahl an Zeichen oder Readmore-Interne Probleme
            postRequest.done(function(returnData){
                var $returnElement  = $(returnData);
                var postError       = _detectErrors($returnElement);

                // Fehler ausgeben
                if (postError !== ''){
                    alert(postError);
                }
                // Post erfolgreich, neue crypt Value auslesen und Reload anstoßen
                else{
                    _crypt = $returnElement.find('#c_content form:last input[name=crypt]').val();
                    _reloadPosts.readPosts();

                    // Input field leeren
                    _$inputField.val('');
                }
            });
            // Elemente wieder entsperren
            postRequest.always(function(){
                _$inputField.prop('disabled', false);
                _$submitButton.prop('disabled', false);
            });
    };

    var _detectErrors = function($element){
        var errorMessage    = '';
        var $errorDiv       = $element.find('#c_content div.module_notice.error');

        if ($errorDiv.length){
            errorMessage = $errorDiv.text().replace(/\s+/g, ' ').trim();
        }

        return errorMessage;
    };
};