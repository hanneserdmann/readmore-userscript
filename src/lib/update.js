RMUS.update = {

    // Meldung, dass ein Update zur Verfügung steht
    showUpdateMsg: function () {
        $('div.floatl.vcenter.elf.dgray:last').append('<a style="color: #F00; margin-left: 10px;" href="/index.php?cont=forum/thread&threadid=111239&pagenum=1">(Update verf&uuml;gbar!)</a>');
    },

    // Aus '2.1.5' wird '215'
    getRawVersion: function (prettyVersion) {
        return prettyVersion.replace(/[^0-9]/g, '');
    },

    // Einmal täglich prüfen, ob es eine neue Version gibt
    refreshLatestVersion: function () {
        var self = this,
            today = new Date();

        $.ajax({
            type: 'POST',
            async: true,
            cache: true,
            url: 'index.php?cont=forum/thread&threadid=111239&pagenum=1',
            contentType: 'text/html; charset=iso-8859-1;',
            dataType: 'html',
            success: function (data) {
                var posts = data.match(/\<tr class=\"post\_[^"]+\"\>[^]+?\<\/tr\>/g);

                if (posts !== null) {
                    var latestPrettyVersion = $.trim(posts[0].match(/<span class="i">-(.+?)-<\/span>/)[1]),
                        latestRawVersion = self.getRawVersion(latestPrettyVersion),
                        currentRawVersion = self.getRawVersion(RMUS.options.version);

                    if (currentRawVersion < latestRawVersion) {
                        self.showUpdateMsg();
                    }

                    today.setHours(6);
                    today.setMinutes(0);
                    today.setSeconds(0);

                    localStorage.setItem('lastVersionCheck', JSON.stringify({
                        version: latestRawVersion,
                        prettyVersion: latestPrettyVersion,
                        checkDate: today.toUTCString()
                    }));
                }
            }
        });
    },

    // Prüft, ob eine neue Version des Scriptes verfügbar ist
    checkVersion : function () {
        var today = new Date(),
            self = this,
            lastVersionCheck = localStorage.getItem('lastVersionCheck');

        if (lastVersionCheck) {
            lastVersionCheck = JSON.parse(localStorage.getItem('lastVersionCheck'));

            if (lastVersionCheck.checkDate) {
                var lastCheck = new Date(Date.parse(lastVersionCheck.checkDate));

                // Älter als 1 Tag?
                lastCheck.setDate(lastCheck.getDate() + 1);

                if (lastCheck > today) {
                    var currentRawVersion = self.getRawVersion(RMUS.options.version);

                    // Ist die cached Version neuer als die aktuelle Version?
                    if (lastVersionCheck.version > currentRawVersion) {
                        self.showUpdateMsg();
                    }

                    return;
                }
            }
        }

        this.refreshLatestVersion();
    }
};