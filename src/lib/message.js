RMUS.messages = {

    iconUrl: 'http://readmore.thextor.de/userscript/img/msg-notification-icon.png',
    messageCount: 0,
    getUserBarItem: function (ns) {
        if (!ns) {
            ns = $('body > div.user_band');
        }

        return $('div.floatl.vcenter > a[href="index.php?cont=msg"]', ns);
    },
    checkForNewMessages: function () {
        $.ajax({
            type: 'POST',
            async: true,
            cache: false,
            url: 'http://www.readmore.de/index.php?cont=msg',
            contentType: 'text/html; charset=iso-8859-1;', 
            dataType: 'html',
            success: function (data) {
                var newMsgCount = $('div#content table.p0:first td.ofhidden.bold', data).length,
                    currentMsgCount = 0,
                    currentLinkNode = RMUS.messages.getUserBarItem();

                if (currentLinkNode.length === 1) {
                    currentMsgCount = parseInt(currentLinkNode.text().match(/\d+/g)[0]);

                    if (newMsgCount !== currentMsgCount) {
                        RMUS.messages.messageCount = newMsgCount;

                        if (newMsgCount > currentMsgCount) {
                            var msgsReceived = newMsgCount - currentMsgCount;

                            RMUS.messages.changeUserBar(newMsgCount, true);
                            RMUS.messages.notifyUser(msgsReceived);
                        } else if (newMsgCount < currentMsgCount) {
                            RMUS.messages.changeUserBar(newMsgCount, newMsgCount > 0);
                        }
                    }
                }
            }
        });
    },
    changeUserBar: function (msgCount, showImg) {
        // Standard Animation für die User-Navi
        var node = RMUS.messages.getUserBarItem(),
            nodeParent = node.parent('div');

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
    },
    notifyUser: function (msgsReceived) {
        var title, msg;

        if (msgsReceived > 1) {
            title = 'Neue Readmore Nachrichten!';
            msg = 'Du hast ' + msgsReceived + ' neue Nachrichten erhalten!';
        } else {
            title = 'Neue Readmore Nachricht!';
            msg = 'Du hast eine neue Nachricht erhalten!';
        }

        if (RMUS.options.options.miscellaneous_reloadMessages_desktopNotifications == 'checked') {
            RMUS.messages.notifications.create(title, msg);
        }

        if (RMUS.options.options.miscellaneous_reloadMessages_alertBox == 'checked') {
            alert(msg);
        }

        if (RMUS.options.options.miscellaneous_reloadMessages_playSound == 'checked') {
            RMUS.messages.playSound();
        }
    },
    playSound: function () {
        var audioUrl = RMUS.options.options.miscellaneous_reloadMessages_playSoundUrl;

        if (audioUrl) {
            try {
                if (audioElement === undefined) {
                    var audioElement = new Audio(audioUrl);
                }

                audioElement.pause();
                audioElement.play();
            } catch (e) {}
        }
    },
    notifications: {

        create: function (title, msg, options) {
            var defaultOptions = {
                icon: RMUS.messages.iconUrl,
                body: msg
            };

            var opts = $.extend(defaultOptions, (typeof options === 'object' ? options : {}));
            var notification = new Notify(title, opts);

            if (!notification.isSupported()) {
                return;
            }

            notification.show();
        }

    }

};