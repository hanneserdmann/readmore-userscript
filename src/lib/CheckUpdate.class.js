/**
 * CheckUpdate
 * ===========
 *
 * Überbrüft ob eine neue Version des Userscripts verfügbar ist.
 */

function CheckUpdate($, _options){
    var self = this;

    var updateUrl = 'http://www.readmore.de/forums/91-technik/60-software/111239-readmore-userscript',
        lastCheck = 0,
        lastVersion = '',
        timeBetweenChecks = 2*60*60*1000, // 2 Stunden
        notificationActive = false;

    this.checkUpdate = function(){
        if (!lastCheck || !lastVersion){
            _readLastCheckTime().done(function(){
                self.checkUpdate();
            })
        }
        else{
            if (lastVersion != _options.getVersion()){
                _displayNotification();
            }
        }
    };

    var _readLastCheckTime = function(){
        var dfd = new $.Deferred();

        lastCheck = Number(_options.getData('checkUpdateLastCheck'));
        lastVersion = _options.getData('checkUpdateLastVersion');

        // Ausgelesene Daten sind nicht komplett oder es sind 2 Stunden vergangen
        if (!lastCheck || !lastVersion || lastCheck + timeBetweenChecks < +new Date()){
            $.ajax({
                type: "POST",
                cache: false,
                url: updateUrl
            }).done(function(data) {
                if (data != null) {
                    var pageData = data.replace(/(\r\n|\n|\r)/gm, " ").replace(/\s+/g, " ");
                    lastVersion = $(pageData).find('div#post_4473381')[0].innerText.match(/Readmore Userscript \[v([0-9]+\.[0-9]+\.[0-9]+)\]/)[1];
                    lastCheck = +new Date();

                    _options.setData('checkUpdateLastCheck', lastCheck);
                    _options.setData('checkUpdateLastVersion', lastVersion);
                    _options.saveCurrentOptions();

                    dfd.resolve();
                }
            });
        }
        else{
            dfd.resolve();
        }

        return dfd;
    };

    var _displayNotification = function(){
        if (!notificationActive){
            var aTag = document.createElement('a');

            aTag.href = updateUrl;
            aTag.title = 'Update verfügbar!';
            aTag.text = 'Update!';
            aTag.className = "checkUpdate";

            $('#openUserscriptOptions').after(aTag);
            notificationActive = true;
        }
    };
};