function ReadmoreUserscript() {
    var _options = new Options();
    var _content = new Content();
    var _preview = new Preview();
    var _miscellaneous = new Miscellaneous();
    var _notes = new Notes();
    var _headlines = new Headlines();
    var _update = new Update(_options);
    var _editPosts = new EditPosts(_preview);
    var _extraButtons = new Extrabuttons(_content);
    var _reloadPageData = new ReloadPageData();
    var _ignoreUser = new IgnoreUser(_options);
    var _reloadPosts = new ReloadPosts(_options, _ignoreUser, _editPosts, _notes, _miscellaneous);
    var _ajaxPost = new AjaxPost(_preview, _reloadPosts);
    var _messages = new Messages(_options);
    var _streams = new Streams(_reloadPageData);
    var _scrollForNewPage = new ScrollForNewPage(_reloadPosts, _ignoreUser, _notes);
    var _ticker = new Ticker(_reloadPageData);
    var _forumNavigation = new ForumNavigation(_options, _reloadPageData);

    this.start = function () {
        // BC: Einmal speichern, damit auch die nicht-selektierten Checkboxen gespeichert werden.
        if (!localStorage.getItem('bcOptionsSaved')) {
            _options.saveOptions();
            localStorage.setItem('bcOptionsSaved', true);
        }

        if (_options.getOption('miscellaneous_fixedToolbar')) {
            _miscellaneous.createFixedToolbar();
        }

        // WWW, Streams, Galerie, Ergebnisticker, Schlagzeilen und Forum angezeigt
        if (!_content.getMultipleContent(['profile', 'guides'], 'OR')) {
            // WWW ausblenden
            if (_options.getOption('leftColumn_www_hideWww') === 'checked') {
                _miscellaneous.hideWww();
            }

            // Streams ausblenden
            if (_options.getOption('leftColumn_streams_hideStreams') === 'checked') {
                _streams.hideStreams();
            }

            // Ticker ausblenden
            if (_options.getOption('rightColumn_ticker_hideTicker') === 'checked') {
                _ticker.hideTicker();
            }

            // Schlagzeilen ausblenden
            if (_options.getOption('rightColumn_headlines_hideHeadlines') === 'checked') {
                _headlines.hideAllHeadlines();
            }
            // Individuell
            else {
                if (_options.getOption('rightColumn_headlines_hideCounterstrike') === 'checked') {
                    _headlines.hideCounterstrike();
                }
                if (_options.getOption('rightColumn_headlines_hideStarcraft') === 'checked') {
                    _headlines.hideStarcraft();
                }
                if (_options.getOption('rightColumn_headlines_hideDefenseOfTheAncients') === 'checked') {
                    _headlines.hideDefenseOfTheAncients();
                }
                if (_options.getOption('rightColumn_headlines_hideLeagueOfLegends') === 'checked') {
                    _headlines.hideLeagueOfLegends();
                }
                if (_options.getOption('rightColumn_headlines_hideWarcraft3') === 'checked') {
                    _headlines.hideWarcraft3();
                }
                if (_options.getOption('rightColumn_headlines_hideSonstiges') === 'checked') {
                    _headlines.hideSonstiges();
                }

                // Fixt die Größe des Bildes
                $('#nav_schlagzeilen').find('img[alt=activity]')
                    .css('height', '11px')
                    .css('width', '11px');
            }

            // Forum ausblenden
            if (_options.getOption('rightColumn_forum_hideForum') === 'checked') {
                _forumNavigation.hideForum();	// Komplett ausblenden
            }
            else {	// Individuell
                if (_options.getOption('rightColumn_forum_sections') === 'checked') {
                    _forumNavigation.initializeForum();
                }
            }

            // Neuladen der Forannavigation beziehungsweise der Streams oder Ticker
            if (_options.getOption('rightColumn_forum_reloadForum') === 'checked' || _options.getOption('leftColumn_streams_reloadStreams') === 'checked' || _options.getOption('rightColumn_ticker_reloadTicker') === 'checked') {
                _reloadPageData.readPage();
            }

            // Button um die Forennavigation zu aktualisieren
            _forumNavigation.reloadForumPerClickAddImage();
            $('#userscript_reloadForumButton').click(function () {
                _forumNavigation.reloadForumPerClickDoReload();
            });
        }

        // Sprung zur letzten Seite in den Suchergebnissen
        if (_content.getContent('search')) {
            if (_options.getOption('middleColumn_search_jump_to_last_page') === 'checked') {
                _miscellaneous.searchJumpToLastpage();
            }
        }

        // Nur im Forum (Threadansicht) aktivieren
        if (_content.getContent('forum_thread')) {

            _reloadPosts.init();

            // Wenn Lastpage gesetzt ist, zum letzten Post springen
            if (_options.getOption('miscellaneous_lastPageJumpToLastPost') === 'checked') {
                _miscellaneous.lastPageJumpToLastPost();
            }

            // Knopf zum hochscrollen
            if (_options.getOption('miscellaneous_buttonScrollUp') === 'checked') {
                _miscellaneous.buttonScrollUp();
            }

            // Knopf zum runterscrollen
            if (_options.getOption('miscellaneous_buttonScrollDown') === 'checked') {
                _miscellaneous.buttonScrollDown();
            }

            // Titel umsortieren
            if (_options.getOption('miscellaneous_reSortTitle') === 'checked') {
                _miscellaneous.reSortTitle();
            }

            // Bilderlinks umwandeln
            if (_options.getOption('miscellaneous_convertImageLinks') === 'checked') {
                _miscellaneous.convertImageLinks();
            }

            // Vorschau
            if (_options.getOption('middleColumn_forum_preview') === 'checked') {
                _preview.init();
                $('#triggerPreview').on('click', _preview.triggerPreview);
            }

            // Posten im Hintergrund
            if (_options.getOption('middleColumn_forum_postPerAjax') === 'checked') {
                _ajaxPost.init();
            }

            // Posts nachladen
            if (_options.getOption('middleColumn_forum_reloadPosts_readNewPosts') === 'checked') {
                if (_options.getOption('_options.middleColumn_forum_reloadPosts_jumpToNewPosts') === 'checked' && _options.getOption('middleColumn_forum_reloadPosts_endlessPage') === 'checked') {
                    window.setInterval(function () {
                        _reloadPosts.jumpToNewPosts();
                    }, (parseInt(_options.getOption('middleColumn_forum_reloadPosts_jumpToNewPosts_waitUntilNextJump'), 10) > 1 ? parseInt(_options.getOption('middleColumn_forum_reloadPosts_jumpToNewPosts_waitUntilNextJump'), 10) : 1) * 1000);
                }
            }

            // Avataranimationen stoppen
            if (_options.getOption('miscellaneous_stopAvatarAnimation') === 'checked') {
                _miscellaneous.stopAvatarAnimation();
            }

            // Notzizen einblenden
            if (_options.getOption('miscellaneous_note') === 'checked') {
                _notes.init();
            }

            // Edit vorbereiten
            if (_options.getOption('middleColumn_forum_editPost') === 'checked') {
                _editPosts.initializeEvent();
            }

            // Youtubeplayer ersetzen
            if (_options.getOption('miscellaneous_convertYoutube') === 'checked') {
                _miscellaneous.convertYoutube();
            }

            // Editbox verschieben
            if (_options.getOption('middleColumn_forum_hideForum_editboxTop')) {
                _scrollForNewPage.editboxTop();
            }
        }

        // User ignorieren
        if (_options.getOption('miscellaneous_ignoreUser') === 'checked') {
            _ignoreUser.ignore(_content.getContent('forum_thread'), _content.getContent('matches'), _content.getContent('profile'));
        }

        // Extrabuttons in den entsprechenden Seiten initialisieren
        if (_content.getMultipleContent(['forum_thread', 'forum_newtopic', 'forum_edit', 'matches', 'msg', 'profile', 'groups_show_group'], 'OR')) {
            if (_options.getOption('miscellaneous_extraButtons') === 'checked') {
                _extraButtons.init();
            }
        }

        // Fix image jumping in forum box between requests
        $('head').append('<style type="text/css">div#nav_schlagzeilen div.listing > a > img {width: 11px; height: 11px;} div.cont_box div.listing > img {width: 5px; height: 7px;}</style>');

        // Optionen einfügen
        $('body').append('{{optionshtml}}');
        _options.insertOptionsLink();

        // Eventhandler für die Optionen setzen
        $('#saveUserscriptOptions').click(function () {
            if (_options.saveOptions()) {
                _options.hideOptions();
            }
        });

        $('#openUserscriptOptions').click(function () {
            _options.showOptions();
        });

        $('#closeUserscriptOptions,#userscriptOptionsOverlay').click(function () {
            _options.hideOptions();
        });

        $('div#userscriptOptions input.imexp').click(function () {
            var $this = $(this),
                imexportContainer = $('div#rmus-options-imexport'),
                importBtn = $('div#rmus-options-imexport input#importUserscriptOptionsBtn'),
                helpContainer = $('div.rmus-options-imexport-help', imexportContainer),
                textarea = $('textarea', imexportContainer);

            imexportContainer.hide();

            if ($this.prop('id') === 'importUserscriptOptions') {
                importBtn.show();
                helpContainer.text('Füge den exportierten JSON-String in das Textfeld ein:');
                textarea.val('');
                textarea.focus();
            } else {
                var opts = _options.getOptionsRaw();

                if (opts === 'null') {
                    alert('Es sind keine gespeicherten Optionen zum Exportieren vorhanden. Bitte speichere deine Optionen zuerst ab.');
                    return;
                }

                importBtn.hide();
                helpContainer.text('Kopiere diesen JSON-String für den späteren Import:');
                textarea.val(opts);
            }

            imexportContainer.slideToggle(250, function () {
                textarea.select();
            });
        });
        $('#imexportUserscriptOptionsCloseBtn').click(function () {
            $('div#rmus-options-imexport').hide();
        });
        $('#importUserscriptOptionsBtn').click(function () {
            var opts = $('div#rmus-options-imexport textarea').val(),
                validJson = true;

            try {
                JSON.parse(opts);
            } catch (e) {
                validJson = false;
            }

            if (validJson) {
                _options.backupOptions();
                _options.setOptionsRaw(opts);

                // Optionen schließen, damit sie neu geladen werden beim nächsten öffnen.
                _options.hideOptions();

                alert('Die Optionen wurden erfolgreich importiert! Du musst die Seite neu laden, damit die Optionen vollständig übernommen werden.');
            } else {
                alert('Die Optionen konnten nicht importiert werden! Der eingegebene Text ist kein valider JSON-String.');
            }
        });

        // Click Handler für Desktop-Notifications um die Berechtigung einzuholen
        $('input#miscellaneous_reloadMessages_desktopNotifications').click(function () {
            var checkbox = $(this),
                uncheckBox = function () {
                    checkbox.attr('checked', false);
                };

            if (checkbox.is(':checked')) {
                var notification = new Notify('Notifications aktiviert!', {
                    //tag: 'activated-notifications',
                    icon: _messages.getIcon(),
                    body: 'Notifications sind nun für alle Nachrichten aktiviert.',
                    permissionGranted: function () {
                        notification.show();
                    },
                    permissionDenied: function () {
                        alert('Du hast die nötige Berechtigung für Notifications nicht erteilt. Bitte überprüfe, ob Notifications in deinen Browser-Einstellungen für readmore.de blockiert sind.');
                        uncheckBox();
                    }
                });

                if (!notification.isSupported()) {
                    alert('Diese Funktion wird von deinem Browser derzeit leider nicht unterstützt.');
                    uncheckBox();
                    return;
                }

                if (notification.needsPermission()) {
                    notification.requestPermission();
                    return;
                }

                notification.show();
            }
        });

        // Auf- und Einklappen von Unterkategorien
        $('#toggle_sub_middleColumn_forum_reloadPosts_readNewPosts').click(function () {
            $('.sub_middleColumn_forum_reloadPosts_readNewPosts').toggle();
            $('.sub_middleColumn_forum_reloadPosts_markNewPosts').css('display', 'none');
            $('.sub_middleColumn_forum_reloadPosts_endlessPage').css('display', 'none');
        });
        $('#toggle_sub_middleColumn_forum_reloadPosts_endlessPage').click(function () {
            $('.sub_middleColumn_forum_reloadPosts_endlessPage').toggle();
        });
        $('#toggle_sub_middleColumn_forum_reloadPosts_markNewPosts').click(function () {
            $('.sub_middleColumn_forum_reloadPosts_markNewPosts').toggle();
        });
        $('#toggle_sub_rightColumn_headlines_hideHeadlines').click(function () {
            $('.sub_rightColumn_headlines_hideHeadlines').toggle();
        });
        $('#toggle_sub_rightColumn_forum_hideForum').click(function () {
            $('.sub_rightColumn_forum_hideForum').toggle();
            $('.sub_rightColumn_forum_sections').css('display', 'none');
        });
        $('#toggle_sub_rightColumn_forum_sections').click(function () {
            $('.sub_rightColumn_forum_sections').toggle();
        });
        $('#toggle_sub_miscellaneous_reloadMessages').click(function () {
            $('.sub_miscellaneous_reloadMessages').toggle();
        });
        $('#toggle_sub_miscellaneous_ignoreUser').click(function () {
            $('.sub_miscellaneous_ignoreUser').toggle();
        });
        $('#toggle_sub_middleColumn_forum_scrollForNewPage').click(function () {
            $('.sub_middleColumn_forum_scrollForNewPage').toggle();
        });

        // Icon fuer das Auf- und Zuklappen anpassen
        $('[id*=toggle_sub]').click(function () {
            var img = $(this).attr('src').trim();
            if (img == 'http://readmore.thextor.de/userscript/img/plus_alt_16x16.png') $(this).attr('src', 'http://readmore.thextor.de/userscript/img/minus_alt_16x16.png');
            else $(this).attr('src', 'http://readmore.thextor.de/userscript/img/plus_alt_16x16.png');
        });

        // Prüfen ob eine neue Version erschienen ist
        _update.checkVersion();
    };

    this.startIntervalReloadPosts = function () {
        window.setInterval(function () {

            /*        // content auslesen
             if (!content){
             content = JSON.parse(localStorage.getItem('userscriptContent'));
             }
             */
            // Wenn wir uns in einem Thread befinden
            if (_content.getContent('forum_thread')) {

                // Posts nachladen
                if (_options.getOption('middleColumn_forum_reloadPosts_readNewPosts') === 'checked') {
                    _reloadPosts.readNewPosts();
                }

                // Avataranimationen stoppen
                if (_options.getOption('miscellaneous_stopAvatarAnimation') === 'checked') {
                    _miscellaneous.stopAvatarAnimation();
                }
            }
        }, (parseInt(_options.getOption('middleColumn_forum_reloadPosts_timeToWait'), 10) > 2) ? parseInt(_options.getOption('middleColumn_forum_reloadPosts_timeToWait'), 10) * 1000 : 3000);
    };

    this.startInvervalRapid = function () {
        window.setInterval(function () {
            if (_content.getContent('forum_thread')) {
                if (_options.getOption('middleColumn_forum_reloadPosts_readNewPosts') === 'checked') {
                    if (_options.getOption('middleColumn_forum_reloadPosts_markNewPosts') === 'checked') {
                        // (de)-Markieren
                        _reloadPosts.unmarkNewPosts();

                        // Favicon verändern
                        if (_options.getOption('middleColumn_forum_reloadPosts_changeFavicon') === 'checked') {
                            _reloadPosts.changeFavicon();
                        }

                        // Postanzahl im Tab anzeigen
                        if (_options.getOption('middleColumn_forum_reloadPosts_showNewPostsTitle') === 'checked') {
                            _reloadPosts.showNewPostsTitle();
                        }
                    }
                }

                // Beim ereichen des letzten Posts ggf. die nächste Seite nachladen. Nur wenn wir uns nicht auf der letzten Seite befinden!
                if (_options.getOption('middleColumn_forum_scrollForNewPage') === 'checked' && $.trim($('div.floatl.m2.elf').html()).substr($.trim($('div.floatl.m2.elf').html()).length - 4) != '</b>') {
                    _scrollForNewPage.insertPosts();
                }
            }
        }, 500);
    };

    this.startInvervalSlow = function () {
        window.setInterval(function () {

            // Außer auf dem Profil und der Guides
            if (!_content.getMultipleContent(['profile', 'guides'], 'OR')) {

                // Streams und Forennavigation nachladen (Nur, wenn auch eingeblendet)
                if (_options.getOption('rightColumn_forum_reloadForum') === 'checked' && _options.getOption('rightColumn_forum_hideForum') != 'checked'
                    || _options.getOption('leftColumn_streams_reloadStreams') === 'checked' && _options.getOption('options.leftColumn_streams_hideStreams') != 'checked'
                    || _options.getOption('rightColumn_ticker_reloadTicker') === 'checked' && _options.getOption('rightColumn_ticker_hideTicker') != 'checked') {

                    _reloadPageData.readPage();

                    // Forennavigation
                    if (_options.getOption('rightColumn_forum_hideForum') !== 'checked'
                        && _options.getOption('rightColumn_forum_reloadForum') === 'checked') {

                        // Lag im FF vermindern
                        window.setTimeout(_forumNavigation.reloadForum(), 2000);
                    }

                    // Streams
                    if (_options.getOption('leftColumn_streams_hideStream') != 'checked'
                        && _options.getOption('leftColumn_streams_reloadStreams') === 'checked') {

                        // Lag im FF vermindern
                        window.setTimeout(_streams.reloadStreams(), 4000);
                    }

                    // Ticker
                    if (_options.getOption('rightColumn_ticker_hideTicker') != 'checked'
                        && _options.getOption('rightColumn_ticker_reloadTicker') === 'checked') {

                        // Lag im FF vermindern
                        window.setTimeout(_ticker.reloadTicker(), 6000);
                    }
                }
            }

            // PMs auf jeder Seite überprüfen (Usernavi buggy, daher nicht Teil der mainPageData)
            if (_options.getOption('miscellaneous_reloadMessages') === 'checked') {
                _messages.checkForNewMessages();
            }

        }, 15000);
    };
}

/**
 * Funktion zum ersetzen von Sonderzeichen.
 * @param text
 * @returns {String}
 */
ReadmoreUserscript.replaceSpecialChars = function (text) {
    var replacePost = {};

    replacePost['%C3%A4'] = '%E4';		// ä
    replacePost['%C3%84'] = '%C4';		// Ä
    replacePost['%C3%B6'] = '%F6';		// ö
    replacePost['%C3%96'] = '%D6';		// Ö
    replacePost['%C3%BC'] = '%FC';		// ü
    replacePost['%C3%9C'] = '%DC';		// Ü
    replacePost['%C3%9F'] = '%DF';		// ß
    replacePost['%C3%9C'] = '%DC';		// <
    replacePost['%C3%9F'] = '%DF';		// >
    replacePost['%C2%B0'] = '%B0';		// °
    replacePost['%C2%B4'] = '%B4';		// ´
    replacePost['%C3%A1'] = '%E1';		// á
    replacePost['%C3%81'] = '%C1';		// Á
    replacePost['%C3%A2'] = '%E2';		// â
    replacePost['%C3%82'] = '%C2';		// Â
    replacePost['%C3%A9'] = '%E9';		// é
    replacePost['%C3%89'] = '%C9';		// É
    replacePost['%C3%AA'] = '%EA';		// ê
    replacePost['%C3%8A'] = '%CA';		// Ê
    replacePost['%C3%AD'] = '%ED';		// í
    replacePost['%C3%8D'] = '%CD';		// Í
    replacePost['%C3%AE'] = '%EE';		// î
    replacePost['%C3%8E'] = '%CE';		// Î
    replacePost['%C3%B3'] = '%F3';		// ó
    replacePost['%C3%93'] = '%D3';		// Ó
    replacePost['%C3%B4'] = '%F4';		// ô
    replacePost['%C3%94'] = '%D4';		// Ô
    replacePost['%C3%BA'] = '%FA';		// ú
    replacePost['%C3%9A'] = '%DA';		// Ú
    replacePost['%C3%BB'] = '%FB';		// û
    replacePost['%C3%9B'] = '%DB';		// Û
    replacePost['%C2%A7'] = '%A7';		// §

    replacePost['%E2%82%AC'] = '%80';		    // €
    replacePost['%E2%95%AF'] = '%26#9583;';		// ╯
    replacePost['%E2%96%A1'] = '%26#9633;';		// □
    replacePost['%EF%BC%89'] = '%26#65289;';	// ）
    replacePost['%EF%B8%B5'] = '%26#65077;';	// ︵
    replacePost['%E2%94%BB'] = '%26#9531;';		// ┻
    replacePost['%E2%94%81'] = '%26#9473;';		// ━

    // Sonderzeichen ersetzen
    $.each(replacePost, function (key, value) {
        var regEx = new RegExp(key, 'g');
        text = text.replace(regEx, value);
    });

    return text;
};