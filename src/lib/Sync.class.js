
function Sync($, _options, _loadingScreen) {

    var _self = this;
    var _syncUrl = 'http://userscript.thextor.de/api/options/';
    var _syncOptions = JSON.parse(localStorage.getItem('userscriptSyncData'));
    var _$pwField = null;
    var _userId = 0;

    this.init = function(){
        $('#rmusSyncOptionsSave').on('click', _save);
        _$pwField = $('input[name="miscellaneous_syncOptionsPassword"]');
        _userId = _getUserId();

        // Beim Speichern der Optionen Syncen!
        $('#saveUserscriptOptions').click(function() {
            _self.sendOptionsToServer();
        });

        if (typeof _syncOptions === 'undefined' || _syncOptions == null){
            _syncOptions = {
                'lastupdate': 0,
                'lastcheck': +new Date()
            };
        }

        if (_options.getOption('miscellaneous_syncOptions')){
            if (_syncOptions.lastcheck < (+new Date()-300)){
                _self.receiveOptionsFromServer();
            }
        }
    };

    var _save = function(){
        var hash = _generateHash(_$pwField.val());

        _syncOptions.hashCode = hash;

        if (_$pwField.val().length >= 3){
            _$pwField.val(hash);

            if (_userId != 0){
                _self.receiveOptionsFromServer(true, true);
            }
            else{
                alert('Um diese Funktion zu nutzen musst du eingeloggt sein!');
            }
        }
        else{
            alert('Das Passwort muss mindestens 3 Zeichen lang sein!');
        }

    };

    var _saveSyncOptions = function(){
        localStorage.setItem('userscriptSyncData', JSON.stringify(_syncOptions));
    };

    var _generateHash = function(text){
        var hash = 0;
        if (text.length == 0) return hash;
        for (var i = 0; i < text.length; i++) {
            var char = text.charCodeAt(i);

            hash = ((hash<<5)-hash)+char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return Math.abs(hash);
    };

    var _getUserId = function(){
        var idMatches = $('#header li.ucp a:first')[0].href.match('users/([0-9]+)-.+');
        if (idMatches == null) return 0;
        return Number(idMatches[1]);
    };

    var _displayErrors = function(error){
        switch (error.type){
            case 'hash':
                alert(error.text);
                break;
            case 'userid':
                alert(error.text + ' Deine aktuellen Optionen werden deshalb nach dem Speichern mit dem Server synchonisiert.');

                break;
        }
    };

    this.sendOptionsToServer = function(){
        var type = 'PUT',
            data = {
                lastupdate: +new Date(),
                options: _options.getOptionsRaw()
            };

        // optionen wurden noch nicht synchonisiert
        if (_syncOptions.lastupdate === 0){
            type = 'POST';
            _syncOptions.lastupdate = +new Date();
        }

        $.ajax({
            url: _syncUrl + _userId + '/' + _syncOptions.hashCode,
            method: type,
            cache: false,
            dataType: 'json',
            data: data
        })
            .done(function(remoteData){
                // Kein Fehler aufgetreten
                if (typeof remoteData.error == 'undefined'){
                    _syncOptions.lastupdate = +new Date();
                }
                else{
                    _displayErrors(remoteData.error);
                }
            })
            .always(function(){
                _saveSyncOptions();
            });
    };

    this.receiveOptionsFromServer = function(showLoadingScreen, showPromt){
        showLoadingScreen = typeof showLoadingScreen === 'undefined' ? false : showLoadingScreen;
        showPromt         = typeof showPromt         === 'undefined' ? false : showPromt;

        if (showLoadingScreen){
            _loadingScreen.showLoadingScreen();
            _loadingScreen.changeLoadingMessage('Verbindung zum Server wird hergestellt, Passwort verglichen..');
        }

        var currentTime = +new Date();
        _syncOptions.lastcheck = currentTime;

        $.ajax({
            url: _syncUrl + _userId + '/' + _syncOptions.hashCode,
            method: 'GET',
            cache: false,
            dataType: 'json'
        })
            .done(function(remoteData){
                // Kein Fehler aufgetreten
                if (typeof remoteData.error == 'undefined'){
                    if (remoteData.lastupdate < currentTime && typeof remoteData.options !== 'undefined'){
                        var save = true;

                        if (showPromt){
                            save = confirm('Es wurden Optionen auf dem Server gefunden, sollen diese übernommen werden? (die aktuellen Einstellungen werden verworfen!)');
                        }

                        if (save){
                            _options.setOptionsRaw(remoteData.options);
                            // Wenn in den Optionen gespeichert wird neu laden
                            if (showPromt){
                                setTimeout(function(){
                                    location.reload();
                                }, 200);
                            }
                        }
                    }

                    _syncOptions.lastupdate = currentTime;
                }
                else{
                    _displayErrors(remoteData.error);
                }
            })
            .always(function(){
                // Sync Daten speichern
                _saveSyncOptions();

                setTimeout(function(){
                    if (showLoadingScreen)_loadingScreen.removeLoadingScreen();
                }, 150)
            });
    }
}