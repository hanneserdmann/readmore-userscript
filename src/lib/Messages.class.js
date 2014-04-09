/**
 * Messages
 * ========
 *
 * Pseudoklasse für PMs. Zeigt an wenn eine neue Nachricht eingegangen ist.
 * Zusätzlich werden desktop notifications (notify.js) bereitgestellt.
 */

function Messages(_options) {
    /**
     * Link zum Icon
     * @type {string}
     */
    var ICON_URL = 'http://readmore.thextor.de/userscript/img/msg-notification-icon.png';

    /**
     * Anzahl an Nachrichten
     * @type {number}
     * @private
     */
    var _messageCount = 0;

    /**
     * Gibt das den Link zum Icon zurück.
     * @returns {string}
     */
    this.getIcon = function () {
        return ICON_URL;
    };

    /**
     * Checkt ob neue Nachrichten eingegangen sind und löst ggf.
     * die Benachrichtigung für den User aus.
     */
    this.checkForNewMessages = function () {
        $.ajax({
            type: 'POST',
            async: true,
            cache: false,
            url: 'http://www.readmore.de/index.php?cont=msg',
            contentType: 'text/html; charset=iso-8859-1;',
            dataType: 'html',
            success: function (data) {
                var newMsgCount = $('div#content table.p0:first td.ofhidden.bold', data).length;
                var currentMsgCount = 0;
                var currentLinkNode = _getUserBarItem();

                if (currentLinkNode.length === 1) {
                    currentMsgCount = parseInt(currentLinkNode.text().match(/\d+/g)[0]);

                    if (newMsgCount !== currentMsgCount) {
                        _messageCount = newMsgCount;

                        if (newMsgCount > currentMsgCount) {
                            var msgsReceived = newMsgCount - currentMsgCount;

                            _changeUserBar(newMsgCount, true);
                            _notifyUser(msgsReceived);
                        } else if (newMsgCount < currentMsgCount) {
                            _changeUserBar(newMsgCount, newMsgCount > 0);
                        }
                    }
                }
            }
        });
    };

    var _getUserBarItem = function (ns) {
        if (!ns) {
            ns = $('body > div.user_band');
        }

        return $('div.floatl.vcenter > a[href="index.php?cont=msg"]', ns);
    };

    var _changeUserBar = function (msgCount, showImg) {
        // Standard Animation für die User-Navi
        var node = _getUserBarItem();
        var nodeParent = node.parent('div');

        nodeParent.animate({
            'margin-top': '-12px'
        }, 333, function () {
            nodeParent.css('margin-top', '32px');
            node.text('Nachrichten: ' + msgCount);
            var msgImg = $('img', nodeParent);

            if (true === showImg) {
                if (msgImg.length === 0) {
                    node.html(node.text() + ' <img src="http://images.readmore.de/img/icons/newmsgs.gif" alt="Neue Nachrichten">');
                }
            } else {
                if (msgImg.length > 0) {
                    msgImg.remove();
                }
            }

            nodeParent.animate({
                'margin-top': '11px'
            }, 333);
        });
    };

    var _notifyUser = function (msgsReceived) {
        var title, msg;

        if (msgsReceived > 1) {
            title = 'Neue Readmore Nachrichten!';
            msg = 'Du hast ' + msgsReceived + ' neue Nachrichten erhalten!';
        } else {
            title = 'Neue Readmore Nachricht!';
            msg = 'Du hast eine neue Nachricht erhalten!';
        }

        if (_options.getOption('miscellaneous_reloadMessages_desktopNotifications') == 'checked') {
            _createDesktopNotification(title, msg);
        }

        if (_options.getOption('miscellaneous_reloadMessages_alertBox') == 'checked') {
            alert(msg);
        }

        if (_options.getOption('miscellaneous_reloadMessages_playSound') == 'checked') {
            _playSound();
        }
    };

    var _createDesktopNotification = function (title, msg, options) {
        var defaultOptions = {
            icon: ICON_URL,
            body: msg
        };

        var opts = $.extend(defaultOptions, (typeof options === 'object' ? options : {}));
        var notification = new Notify(title, opts);

        if (!notification.isSupported()) {
            return;
        }

        notification.show();
    };

    var _playSound = function () {
        var audioUrl = _options.getOption('miscellaneous_reloadMessages_playSoundUrl');

        if (audioUrl) {
            try {
                var audioElement = new Audio(audioUrl);
                audioElement.pause();
                audioElement.play();
            }
            catch (e) {
            }
        }
    }
}