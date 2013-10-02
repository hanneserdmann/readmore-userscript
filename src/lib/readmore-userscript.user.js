var RMUS = {

	browser: {
		_browser: null,
		getBrowser: function () {
			if (null === RMUS.browser._browser) {
				RMUS.browser._detect();
			}

			return RMUS.browser._browser;
		},
		_detect: function () {
			var browser = 'unknown';

			if ($.browser.webkit) {
				browser = 'webkit';
			} else if ($.browser.mozilla) {
				browser = 'mozilla';
			} else if ($.browser.opera) {
				browser = 'opera';
			} else if ($.browser.msie) {
				browser = 'msie';
			}

			RMUS.browser._browser = browser;
		}
	},

	options: {

		version : '2.1.5',
		options : {},

		// Fügt den Link zum öffnen der Optionen ein
		insertOptionsLink : function () {
			$('div.floatl.vcenter.elf.dgray:last').after('<div class="floatl vcenter" style="padding-top:4px;"><img src="http://images.readmore.de/img/header/line.jpg" alt="" style="height:25px; width:2px;"></div><div class="floatl vcenter elf dgray" style="margin:11px 10px;"><a id="openUserscriptOptions" href="#" class="black">Userscript</a></div>');
			return false;
		},

		// Speichert die Optionen im LocalStorage
		saveOptions : function () {
			var userscriptOptions = {},
				response;

			// Alle Checkboxen
			$('input[type=checkbox].userscriptOptions').each(function () {
				var attr = $(this).attr('checked');
				if (attr == true || attr == 'checked') {
					userscriptOptions[$(this).attr('name')] = 'checked';
				}
			});

			// Alle Textfelder
			$('input.userscriptOptions[type!=checkbox]').each(function () {
				userscriptOptions[$(this).attr('name')] = $(this).val();
			});

			// Alle Selectfelder
			$('select.userscriptOptions').each(function () {
				userscriptOptions[$(this).attr('name')] = $(this).val();
			});

			// Json-Speichern
			localStorage.setItem('userscriptOptions', JSON.stringify(userscriptOptions));
			response = 'Die Optionen wurden erfolgreich gespeichert!';

			// Rückmeldung
			alert(response);
		},

		// Optionen laden
		loadOptions : function () {
			var type = '',
				userscriptOptions = JSON.parse(localStorage.getItem('userscriptOptions'));

			if (userscriptOptions != null) {
				$.each(userscriptOptions, function (index, value) {
					type = $('[name=' + index + ']').attr('type');
					if (type == 'checkbox') {
						// Checkboxen setzen
						if (value == 'checked') {
							$('[name=' + index + ']').attr('checked', true);
							return true;
						}
					}

					if (type == 'text' || type == null) {
						// Textfelder füllen
						$('[name=' + index + ']').val(value);
						return true;
					}

					// Selectboxen auswählen
					if (index.match('rightColumn_forum_hideForum_') != null) {
						$('[name=' + index + ']').val(value);
						return true;
					}
				});
			}

			return false;
		},

		// Optionen auslesen
		readOptions : function () {
			// Json auslesen und in Objekt umwandeln
			RMUS.options.options = JSON.parse(localStorage.getItem('userscriptOptions'));

			if (RMUS.options.options == null) {
				RMUS.options.options = [];
			}

			return false;
		}
	},

	miscellaneous: {
		// Blendet einen Button zum Runterscrollen ein
		buttonScrollDown : function () {
			$('.floatr.m2:first').append('<img onclick="window.scrollTo(0, $(\'td.ten.vtop:last\').offset().top-50);" style="top: 0; height: 13px; padding-right: 2px; cursor: pointer;" alt="scroll down" src="http://readmore.thextor.de/userscript/img/arrow_down_alt1_16x16.png" />');
			return false;
		},

		// Blendet einen Button zum Hochscrollen ein
		buttonScrollUp : function () {
			$('.floatl.m2.elf:last').css('width', '100%');
			$('.floatl.m2.elf:last').append('<img onclick="window.scrollTo(0,0)" style="float: right; height: 13px; padding-right: 10px; cursor: pointer;" alt="scroll up" src="http://readmore.thextor.de/userscript/img/arrow_up_alt1_16x16.png" />');
			return false;
		},

		// Sortiert den Titel um
		reSortTitle : function () {
			var title = $('title').text(),
				pieces = title.split('\u00BB');	// Bei den Doppelpfeilen trennen

			title = pieces[2] + ' ' + '\u00BB' + pieces[1] + '\u00BB' + ' ' + pieces[0];
			$('title').text(title);
			return false;
		},

		// Prüft, ob eine neue Version des Scriptes verfügbar ist
		checkVersion : function () {
			var today = new Date(),
			    lastVersionCheck = localStorage.getItem('lastVersionCheck'),
			    getRawVersion = function (version) {
				return version.replace(/[^0-9]/g, '');
			    },
			    showUpdateMsg = function () {
				$('div.floatl.vcenter.elf.dgray:last').append('<a style="color: #F00; margin-left: 10px;" href="/index.php?cont=forum/thread&threadid=111239&pagenum=1">(Update verf&uuml;gbar!)</a>');
			    };

			if (lastVersionCheck) {
				lastVersionCheck = JSON.parse(localStorage.getItem('lastVersionCheck'));

				if (lastVersionCheck.checkDate) {
				    var lastCheck = new Date(Date.parse(lastVersionCheck.checkDate));

				    // Älter als 1 Tag?
				    lastCheck.setDate(lastCheck.getDate() + 1);

				    if (lastCheck > today) {
					var currentRawVersion = getRawVersion(RMUS.options.version);

					// Ist die cached Version neuer als die aktuelle Version?
					if (lastVersionCheck.version > currentRawVersion) {
					    showUpdateMsg();
					}

					return;
				    }
				}

				// Cleanup
				localStorage.removeItem('lastVersionCheck');
			}

			$.ajax({
			    type: 'POST',
			    async: true,
			    cache: true,
			    url: 'index.php?cont=forum/thread&threadid=111239&pagenum=1',
			    contentType: 'text/html; charset=iso-8859-1;',
			    dataType: 'html',
			    success: function (data) {
				    var posts = data.match(/\<tr class=\"post\_[^"]+\"\>[^]+?\<\/tr\>/g);

				    if (posts != null) {
					    var version = $.trim(posts[0].match(/<span class="i">-(.+?)-<\/span>/)[1]),
						rawVersion = getRawVersion(version);

					    if (getRawVersion(RMUS.options.version) < rawVersion) {
						    showUpdateMsg();
					    }

					    today.setHours(6);
					    today.setMinutes(0);
					    today.setSeconds(0);

					    localStorage.setItem('lastVersionCheck', JSON.stringify({
						version: rawVersion,
						prettyVersion: version,
						checkDate: today.toUTCString()
					    }));
				    }
			    }
			});
		},

		// Zum letzten Post springen
		lastPageJumpToLastPost : function () {
			var lastpage = document.location.href.match(/pagenum=lastpage/);
			if (lastpage != null) {
				if (lastpage[0] == 'pagenum=lastpage') {
					window.scrollTo(0, $('td.ten.vtop:last').offset().top - 50);					
				}
			}
			
			return false;
		},

		createFixedToolbar: function () {
			$('body > div.user_band').css({
				'position': 'fixed',
				'width': '100%'
			});
			$('div#wrapper').css('margin-top', '34px');
		},

		messages: {
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
							currentLinkNode = RMUS.miscellaneous.messages.getUserBarItem();

						if (currentLinkNode.length === 1) {
							currentMsgCount = parseInt(currentLinkNode.text().match(/\d+/g)[0]);

							if (newMsgCount !== currentMsgCount) {
								RMUS.miscellaneous.messages.messageCount = newMsgCount;

								if (newMsgCount > currentMsgCount) {
									var msgsReceived = newMsgCount - currentMsgCount;

									RMUS.miscellaneous.messages.changeUserBar(newMsgCount, true);
									RMUS.miscellaneous.messages.notifyUser(msgsReceived);
								} else if (newMsgCount < currentMsgCount) {
									RMUS.miscellaneous.messages.changeUserBar(newMsgCount, (newMsgCount > 0) ? true : false);
								}
							}
						}
					}
				});
			},
			changeUserBar: function (msgCount, showImg) {
				// Standard Animation für die User-Navi
				var node = RMUS.miscellaneous.messages.getUserBarItem(),
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
						'margin-top': '10px'
					}, 333);
				});
			},
			notifyUser: function (msgsReceived) {
				// Browserspezifisches Melden von neuen Nachrichten
				switch (RMUS.browser.getBrowser()) {
					case 'webkit':
						if (RMUS.options.options.miscellaneous_reloadMessages_desktopNotifications == 'checked'
							&& window.webkitNotifications && window.webkitNotifications.checkPermission() == 0) {

							window.webkitNotifications.createNotification(
								'http://readmore.thextor.de/userscript/img/msg-notification-icon.png',
								'Neue Nachricht!',
								'Du hast eine neue Readmore Nachricht erhalten!'
							).show();
						}
					case 'mozilla':
					case 'opera':
					case 'msie':
						if (RMUS.options.options.miscellaneous_reloadMessages_alertBox == 'checked') {
							if (msgsReceived === 1) {
								alert('Du hast eine neue Nachricht erhalten!');
							} else {
								alert('Du hast ' + msgsReceived + ' neue Nachrichten erhalten!');
							}
						}
						break;

					case 'unknown':
						// what is going on here!?
				}

				if (RMUS.options.options.miscellaneous_reloadMessages_playSound == 'checked') {
					RMUS.miscellaneous.messages.playSound();
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
			}
		},

		// Erweiterung des RM BBCodes um weitere Buttons/Quicklinks
		extrabuttons: {
			getToolbar: function () {
				var form = RMUS.miscellaneous.extrabuttons.getForm(),
					toolbar,
					container;

				if (content.news || content.matches || content.profile) {
					container = form.parent('div.center');

					if ($('div.headline_bg', container).length === 0) {
						toolbar = $('<div class="headline_bg" />');
						toolbar.css('padding', '3px 0px');
						container.prepend(toolbar);
					}

					return $('div.headline_bg', container);
				} else if (content.forum_thread || content.forum_edit || content.forum_newtopic) {
					return $('div.headline_bg', RMUS.miscellaneous.extrabuttons.getForm());
				} else if (content.msg) {
					container = RMUS.miscellaneous.extrabuttons.getCommentBox().parent();

					if ($('div.headline_bg', container).length === 0) {
						toolbar = $('<div class="headline_bg" />');
						toolbar.css('padding', '3px 0px');
						container.prepend(toolbar);
					}

					return $('div.headline_bg', container);
				} else if (content.groups_show_group) {
					// First Post im Thread?
					if ($('input[name="threadtitle"]').length === 1) {
					    container = $('<div/>').insertBefore(RMUS.miscellaneous.extrabuttons.getCommentBox());
					} else {
					    container = RMUS.miscellaneous.extrabuttons.getCommentBox().parent();
					}

					if ($('div.headline_bg', container).length === 0) {
						toolbar = $('<div class="headline_bg" />');
						toolbar.css('padding', '3px 0px');
						container.prepend(toolbar);
					}

					return $('div.headline_bg', container);
				}

				return null;
			},
			getForm: function () {
				if (content.news || content.matches || content.profile) {
					return $('form[name=form_comment]');
				} else if (content.forum_thread || content.forum_newtopic) {
					return $('form[name=submitpost]');
				} else if (content.forum_edit) {
					return $('form[name=submiteditthread]');
				} else if (content.msg) {
					return $('td.text_h1_j form');
				} else if (content.groups_show_group) {
					if (action === 'threadedit') {
					    return $('form[name="submiteditthread"]');
					}

					return $('div.elf form[name="submitpost"]');
				}

				return null;
			},
			getCommentBox: function () {
				if (content.profile) {
					return $('textarea[name=comment]', RMUS.miscellaneous.extrabuttons.getForm());
				} else if (content.msg) {
					return $('textarea[name=msg]', RMUS.miscellaneous.extrabuttons.getForm());
				} else if (content.groups_show_group) {
				    if (action === 'threadedit') {
					return $('textarea[name=new_comment].form', RMUS.miscellaneous.extrabuttons.getForm());
				    }

				    return $('textarea[name=comment].form', RMUS.miscellaneous.extrabuttons.getForm());
				}

				return $('textarea#c_comment', RMUS.miscellaneous.extrabuttons.getForm());
			},
			insertTag: function (tname, attr, endTag) {
				if ('url' === tname) {
					attr = prompt('Bitte gib den gewünschten Link an: ', 'http://');
				}

				var commentBox = RMUS.miscellaneous.extrabuttons.getCommentBox().get(0),
					currText = commentBox.value,
					pos1 = commentBox.selectionStart + tname.length + 2 + (attr != 0 ? (attr.length + 1) : 0),
					pos2 = commentBox.selectionEnd + tname.length + 2 + (attr != 0 ? (attr.length + 1) : 0) + (endTag ? (tname.length + 3) : 0),
					range = (commentBox.selectionStart != commentBox.selectionEnd);

				commentBox.value = currText.substring(0, commentBox.selectionStart) + '[' + tname + (attr != 0 ? '=' + attr + '' : '') + ']' + (endTag ? currText.substring(commentBox.selectionStart, commentBox.selectionEnd) + '[/' + tname + ']' : '') + currText.substring(commentBox.selectionEnd, currText.length);
				commentBox.focus();

				if (range) {
					commentBox.setSelectionRange(pos2, pos2);
				} else {
					commentBox.setSelectionRange(pos1, pos1);
				}
			},
			insertText: function (text) {
				var commentBox = RMUS.miscellaneous.extrabuttons.getCommentBox().get(0),
					currText = commentBox.value,
					pos = commentBox.selectionStart + text.length;

				commentBox.value = currText.substring(0, commentBox.selectionStart) + text + currText.substring(commentBox.selectionEnd, currText.length);
				commentBox.focus();
				commentBox.setSelectionRange(pos, pos);
			},
			makeTag: function (img, text, tag, attr, endTag) {
				return '<a href="" class="rmus-control-btn" data-btype="tag" data-params="' + tag + ',' + attr + ',' + endTag + '"><img style="vertical-align: text-top;" src="' + img + '" alt="' + text + '" title="' + text + '" /></a>';
			},
			colorSet:	[["#ff0000", "http://readmore.thextor.de/userscript/img/extrabuttons/yK4UQ.png"],
						["#ff8000", "http://readmore.thextor.de/userscript/img/extrabuttons/xdj9r.png"],
						["#ffff00", "http://readmore.thextor.de/userscript/img/extrabuttons/cQrl0.png"],
						["#80ff00", "http://readmore.thextor.de/userscript/img/extrabuttons/KTpVX.png"],
						["#00ff00", "http://readmore.thextor.de/userscript/img/extrabuttons/NhpYN.png"],
						["#00ff80", "http://readmore.thextor.de/userscript/img/extrabuttons/D4JCR.png"],
						["#00ffff", "http://readmore.thextor.de/userscript/img/extrabuttons/jA74E.png"],
						["#0080ff", "http://readmore.thextor.de/userscript/img/extrabuttons/cQpDh.png"],
						["#0000ff", "http://readmore.thextor.de/userscript/img/extrabuttons/7DXlk.png"],
						["#8000ff", "http://readmore.thextor.de/userscript/img/extrabuttons/t79Yf.png"],
						["#ff00ff", "http://readmore.thextor.de/userscript/img/extrabuttons/IwKL1.png"],
						["#ff0080", "http://readmore.thextor.de/userscript/img/extrabuttons/cKrre.png"],
						["#000000", "http://readmore.thextor.de/userscript/img/extrabuttons/eeX1k.png"],
						["#333333", "http://readmore.thextor.de/userscript/img/extrabuttons/B4ToQ.png"],
						["#666666", "http://readmore.thextor.de/userscript/img/extrabuttons/OuClO.png"],
						["#999999", "http://readmore.thextor.de/userscript/img/extrabuttons/gc8Za.png"],
						["#cccccc", "http://readmore.thextor.de/userscript/img/extrabuttons/TwNb6.png"],
						["#ffffff", "http://readmore.thextor.de/userscript/img/extrabuttons/uq9mG.png"]],

			toolbarButtonTags:	[["http://images.readmore.de/img/icons/ubb/b.png", "fett", "b", 0, true],
								["http://images.readmore.de/img/icons/ubb/i.png", "kursiv", "i", 0, true],
								["http://images.readmore.de/img/icons/ubb/u.png", "unterstrichen", "u", 0, true],
								["http://images.readmore.de/img/icons/ubb/s.png", "durchgestrichen", "s", 0, true],
								["http://readmore.thextor.de/userscript/img/extrabuttons//yPNsn.png", "zentriert", "center", 0, true],
								["http://readmore.thextor.de/userscript/img/extrabuttons//74lEI.png", "hr", "hr", 0, false],
								["http://images.readmore.de/img/icons/ubb/url2.png", "url", "url", 0, true],
								["http://images.readmore.de/img/icons/ubb/quote.png", "quote", "quote", 0, true],
								["http://images.readmore.de/img/icons/ubb/spoil.png", "spoiler", "spoiler", 0, true],
								["http://images.readmore.de/img/icons/ubb/youtube.png", "youtube", "youtube", 0, true],
								["http://readmore.thextor.de/userscript/img/extrabuttons/ZQ5jN.png", "img", "img", 0, true]],

			getToolbarHtml: function () {
				var colorButtons = '',
					btnTags = '';

				$.each(RMUS.miscellaneous.extrabuttons.colorSet, function (index, color) {
					colorButtons += (index > 0 ? '&thinsp;' : '') + RMUS.miscellaneous.extrabuttons.makeTag(color[1], color[0], 'color', color[0], true);
				});

				$.each(RMUS.miscellaneous.extrabuttons.toolbarButtonTags, function (index, btnTag) {
					btnTags += RMUS.miscellaneous.extrabuttons.makeTag(btnTag[0], btnTag[1], btnTag[2], btnTag[3]) + '&nbsp;';
				});

				return '<div id="rmus-container" style="text-align: left; color: #fff; font-weight: bold; padding-left: 5px; font-size: 11px;">Text' +
				'<div id="rmus-toolbar" style="margin-right: 12px; float: right;">' +
				'<div id="rmus-toolbar-main" style="margin-bottom: 1px;text-align:right;">' +

				btnTags + '&emsp;' +
				colorButtons +

				'</div></div></div>' +
				'<div style="clear: right;"></div></div>';
			},
			init: function () {
				try {
					RMUS.miscellaneous.extrabuttons.getToolbar().css('height', 'auto').html(RMUS.miscellaneous.extrabuttons.getToolbarHtml());
				} catch (e) {}

				$('a.rmus-control-btn').click(function (e) {
					e.preventDefault();

					var btype = $(this).attr('data-btype'),
						params = $(this).attr('data-params');

					switch(btype) {
						case 'tag':
							params = params.split(',');
							RMUS.miscellaneous.extrabuttons.insertTag(params[0], params[1], params[2]);
							break;
					}
				});
			}
		},
		
		reloadMainpageData : {
			mainpageData : '',

			readPage : function() {
				$.ajax({
					type: 'POST',
					async: true,
					cache: false,
					url: 'http://www.readmore.de/index.php?cont=userstream_overview',
					contentType: 'text/html; charset=iso-8859-1;', 
					dataType: 'html',
					success: function (data) {
						var pageData = data;
						
						if(pageData != null){
							// Prüft auf Fehler beim Laden der Seite
							if (pageData.search('<div class="error">') != -1) {
								RMUS.miscellaneous.reloadMainpageData.readPage();
							} else {
								RMUS.miscellaneous.reloadMainpageData.mainpageData = pageData.replace(/(\r\n|\n|\r)/gm,' ').replace(/\s+/g," ");
							}
						}
					}
				});

				return false;
			}
		},
		
		stopAvatarAnimation : {
			isGifImage : function(i){
				return /^(?!data:).*?\/user.*?\.gif/i.test(i.src);
			},
			
			freeze_gif : function (i) {
				var c = document.createElement('canvas');
				var w = c.width = i.width;
				var h = c.height = i.height;
				c.getContext('2d').drawImage(i, 0, 0, w, h);
				try {
					i.src = c.toDataURL("image/gif");
				} catch(e) {
					for (var j = 0, a; a = i.attributes[j]; j++)
						c.setAttribute(a.name, a.value);
					i.parentNode.replaceChild(c, i);
				}

				return false;
			},
			
			stopAnimation : function (){
				[].slice.apply(document.images).filter(RMUS.miscellaneous.stopAvatarAnimation.isGifImage).map(RMUS.miscellaneous.stopAvatarAnimation.freeze_gif);
				return false;
			}
		},
		
		convertYoutube : function(){
			$('iframe[width=380][height=270][frameborder=0]').each(function() {
				var link = 'http://www.youtube.com/watch?v=' + String($(this).attr('src')).trim().replace('http://www.youtube.com/embed/', '');
				$(this).after('<a href="' + link + '">' + link + '</a>');
				$(this).remove();
			});		
			
			return false;
		},
		
		ignoreUser : {
			user : [],
			ignoreCount : 0,
			
			setUser : function(){
				var user = [];
				$(String(RMUS.options.options.miscellaneous_ignoreUser_usernames).split(',')).each(function(index, value){					
					user.push(value.trim());
				});
					
				RMUS.miscellaneous.ignoreUser.user = user;
				return false;
			},
			
			doIgnore : function(thread, ticker, profile) {
				if (RMUS.miscellaneous.ignoreUser.user.length == 0) {
					RMUS.miscellaneous.ignoreUser.setUser();
				}
				
				if (thread) {					
					$(RMUS.miscellaneous.ignoreUser.user).each(function(index, value) {
						$('tr[class*=post_]:has(a[title="' + value + '"]) td').each(function() {

							if (this.innerHTML.match(/ignored_/) == null){
								if (RMUS.miscellaneous.ignoreUser.ignoreCount % 2){
									RMUS.miscellaneous.ignoreUser.ignoreCount--;
									$(this).html('<div style="display:none;" class="ignored_' + RMUS.miscellaneous.ignoreUser.ignoreCount + '">' + $(this).html() + '</div>');
									RMUS.miscellaneous.ignoreUser.ignoreCount = RMUS.miscellaneous.ignoreUser.ignoreCount + 2;
								} 
								else{
									$(this).html('<a style="font-size: 9px;" href="javascript:void(0)" onclick="$(\'.ignored_' + RMUS.miscellaneous.ignoreUser.ignoreCount + '\').toggle(); if(this.innerHTML == \'Beitrag einblenden\'){this.innerHTML = \'Beitrag ausblenden\';}else{this.innerHTML = \'Beitrag einblenden\';}">Beitrag einblenden</a><br/>' + '<br/><div style="display:none;" class="ignored_' + RMUS.miscellaneous.ignoreUser.ignoreCount + '">' + $(this).html() + '</div>');
									RMUS.miscellaneous.ignoreUser.ignoreCount++;
								}	
							}
						});
					});					
				}
				
				if (ticker || profile) {
					$(RMUS.miscellaneous.ignoreUser.user).each(function(index, value) {
						$('div .elf.cmt_kopf:has(a.cmt_head:contains(' + value + '))').next().each(function(){
							$(this).html('<a href="javascript:void(0)" onclick="$(\'.ignored_' + RMUS.miscellaneous.ignoreUser.ignoreCount + '\').toggle();">Beitrag einblenden</a><br/>' + '<br/><div style="display:none;" class="ignored_' + RMUS.miscellaneous.ignoreUser.ignoreCount + '">' + $(this).html() + '</div>');
							RMUS.miscellaneous.ignoreUser.ignoreCount++;
						});
					});					
				}
				
				return false;
			}
		},
		note : {
			notenumber : 0,
			initialize : function() {
				$('tr[class*=post_]>td:even:not(:has(textarea))').each(function(){
					var br = '<br />';
					var user = String($(this).find('a.bml').attr('title'));
					var notenr = RMUS.miscellaneous.note.notenumber++;

					if ($($(this).html()).length > 0) br = '<br /><br />';						
					$(this).append(br + '<center><a href="javascript:void(o);" name="note_' + user + '_' + notenr + '">Notiz</a><br /><br /><textarea style="display:none;height:100px;width:98%" name="note_' + user + '_' + notenr + '"></textarea></center>');

					$('a[name="note_' + user + '_' + notenr + '"]').click(function () {
						var notes = JSON.parse(localStorage.getItem('userscriptNote')),
							note = $('textarea[name="note_' + user + '_' + notenr + '"]'),
							closing = note.is(':visible');

						if (notes == null) notes = {};

						if (true === closing) {
							notes[user] = String(note.val()).trim();
						} else {
							note.val(notes[user]);
						}

						note.toggle();
						localStorage.setItem('userscriptNote', JSON.stringify(notes));
					});
				});

				return false;
			}
		}
	},

	leftColumn: {

		www : {
			// Wer Wohin Warum ausblenden
			hideWww : function () {
				$('#leftc>div.block:eq(0), div.line2:eq(0), div.line2:eq(1)').css('display', 'none');
				return false;
			}
		},

		streams : {
			// Array in dem die Stream-Images gepusht werden
			streamsToHide : [],

			// Alle Streams ausblenden
			hideStreams : function () {
				$('#leftc>div.block:eq(1), #leftc>div.block:eq(2), #leftc>div.block:eq(4), .line2:eq(1), .line2:eq(2), .line2:eq(0)').css('display', 'none');			
				return false;
			},
			
			// Forennavigation neuladen
			reloadStreams : function(){
				var caster = '';
				var player = '';
				var user = '';
				
				caster = $(RMUS.miscellaneous.reloadMainpageData.mainpageData).find('div.frontpage_stream:first').html();
				player = $(RMUS.miscellaneous.reloadMainpageData.mainpageData).find('div.frontpage_stream:last').html();
				user   = $(RMUS.miscellaneous.reloadMainpageData.mainpageData).find('#profilestream').html();
				
				$('div.frontpage_stream:first').html(caster);
				$('div.frontpage_stream:last').html(player);
				$('#profilestream').html(user);
								
				return false;
			}
		}
	},

	middleColumn: {

	/************************
	*	FORUM		*
	*************************/
		forum : {

			threadlink : '',
			page : '',	

			// Link zum Thread ohne Seitenzahl ermitteln
			readThreadlink : function () {
				RMUS.middleColumn.forum.threadlink = $(location).attr('href').replace(/\&pagenum=.+$/, '');
				return false;
			},

			// Aktuelle Seite ermitteln
			readPage : function () {
				RMUS.middleColumn.forum.page = parseInt($('div.floatl.m2.elf').html().match(/<b>(.+?)<\/b>/)[1], 10);
				return false;
			},

	/************************
	*	 RELOAD POSTS	*
	*************************/
			reloadPosts : {
				postcount : 0,
				waitUntilReload : 5,
				finishedPages : 0,
				oldLimit : 0,
				markPostColor : '#EEEEEE',                  // Hellgrau
				markPostColorRgb : 'rgb(238, 238, 238)',    // Hellgrau
				oldTitle : '',
				unseenPosts : [],

				// Anzhal der aktuellen Posts ermitteln
				readPostcount : function () {
					RMUS.middleColumn.forum.reloadPosts.postcount = $('[class^=post_]').length;
					return false;
				},

				// Neue Posts nachladen und einfügen
				readNewPosts : function () {
					// Nur wenn wir uns auf der letzten seite befinden
					var lastpage = $.trim($('div.floatl.m2.elf').html());
					
					if (lastpage.substr(lastpage.length-4) == '</b>'){
						// Seiten endlos erweitern
						if (RMUS.options.options.middleColumn_forum_reloadPosts_endlessPage == 'checked') {
							RMUS.middleColumn.forum.reloadPosts.endlessPage();
						} 

						// Der eigentliche Reload
						$.ajax({
							type: 'POST',
							async: true,
							cache: false,
							url: RMUS.middleColumn.forum.threadlink + '&pagenum=' + RMUS.middleColumn.forum.page,
							contentType: 'text/html; charset=iso-8859-1;', 
							dataType: 'html',
							success: function (data) {
								var posts = data.match(/\<tr class=\"post\_[^"]+\"\>[^]+?\<\/tr\>/g);
								if (posts != null) {
									var footer = data.match(/\<tr class=\"cellheadercolor footer\_[^"]+\"\>[^]+?\<\/tr\>/g),
										oldPosts = (25 * RMUS.middleColumn.forum.reloadPosts.finishedPages),
										postNumber = posts.length + oldPosts,
										userid = $('div.floatl.vcenter.elf.dgray:eq(1)').html().match(/id=(.+?)"/)[1],
										i = RMUS.middleColumn.forum.reloadPosts.postcount;

									for (i; i < postNumber; i++) {
										$('table.elf.forum.p2.bogray2').append(posts[i-oldPosts]);
										$('table.elf.forum.p2.bogray2').append(footer[i-oldPosts]);
										
										RMUS.middleColumn.forum.reloadPosts.unseenPosts.push(parseInt($('[class^=post_]:last').offset().top, 10));  // Zum markieren der neuen Posts
										RMUS.middleColumn.forum.reloadPosts.postcount++;
									}

									RMUS.middleColumn.forum.reloadPosts.oldLimit = window.pageYOffset + (window.innerHeight * 0.55);
									// Beiträge aus den neuen Posts ignorieren
									if (RMUS.options.options.miscellaneous_ignoreUser == 'checked') RMUS.miscellaneous.ignoreUser.doIgnore(true, false, false);									
									// Edit vorbereiten
									if (RMUS.options.options.middleColumn_forum_editPost == 'checked') RMUS.middleColumn.forum.editPost.initializeEvent();	
									// Notzizen einblenden
									if(RMUS.options.options.miscellaneous_note == 'checked') RMUS.miscellaneous.note.initialize();
									// Edit vorbereiten	
									if (RMUS.options.options.middleColumn_forum_editPost == 'checked') RMUS.middleColumn.forum.editPost.initializeEvent();	
									// Youtubeplayer ersetzen
									if(RMUS.options.options.miscellaneous_convertYoutube == 'checked') RMUS.miscellaneous.convertYoutube();									
								}
							}
						});

						// Rausfinden ob eine neue Seite existiert
						if (RMUS.options.options.middleColumn_forum_reloadPosts_endlessPage != 'checked') RMUS.middleColumn.forum.reloadPosts.checkForNewPage();
						return false;
					}					
				},

				// Neue Posts markieren
				markNewPosts : function () {
					var numberOfNewPosts = RMUS.middleColumn.forum.reloadPosts.unseenPosts.length,
						i = 1;

					for(i; i <= numberOfNewPosts; i++) {
						// Überprüfen ob der Posts bereits markiert ist, wenn ja die Schleife verlassen
						if ($.trim(($('[class^=post_]:eq(' + (RMUS.middleColumn.forum.reloadPosts.postcount - i) + ')').css('background-color'))) == RMUS.middleColumn.forum.reloadPosts.markPostColorRgb) {
							break;
						}
						$('[class^=post_]:eq(' + (RMUS.middleColumn.forum.reloadPosts.postcount - i) + ')').css('background-color', RMUS.middleColumn.forum.reloadPosts.markPostColor);
					}

					// Demarkieren starten
					RMUS.middleColumn.forum.reloadPosts.unmarkNewPosts();
					return false;
				},

				// Entfernt die Markierung von (ehemals) neuen Posts
				unmarkNewPosts : function() {
					var i = 0,
						limit = window.pageYOffset + (window.innerHeight * 0.55),
						deleteArray = [];

					$(RMUS.middleColumn.forum.reloadPosts.unseenPosts).each(function (index, value) {
						// Nur demarkieren, wenn wir das Limit überschritten und uns bewegt / gescrollt haben
						if(value < limit && limit != RMUS.middleColumn.forum.reloadPosts.oldLimit) {
							$('[class^=post_]:eq(' + (RMUS.middleColumn.forum.reloadPosts.postcount - (RMUS.middleColumn.forum.reloadPosts.unseenPosts.length) + i) + ')').css('background-color', '#FFF');
							i++;
							deleteArray.push(index);						
						}
					});

					$(deleteArray).each(function (index, value) {
						RMUS.middleColumn.forum.reloadPosts.unseenPosts.splice(value, 1);   // Unmarkierte / Gelesene Posts aus dem Array entfernen
					});

					return false;
				},

				// Anzahl der ungelesenen Posts im Titel / Tab anzeigen
				showNewPostsTitle : function () {
					if (RMUS.middleColumn.forum.reloadPosts.oldTitle == '') {
						RMUS.middleColumn.forum.reloadPosts.oldTitle = $('title').text();
					}

					var title = RMUS.middleColumn.forum.reloadPosts.oldTitle;					
					if (RMUS.middleColumn.forum.reloadPosts.unseenPosts.length) title = '(' + RMUS.middleColumn.forum.reloadPosts.unseenPosts.length + ') ' + title;
					
					$('title').text(title);	
					return false;
				},

				// Ändert das Favicon wenn ungelesene Posts vorhanden sind
				changeFavicon : function () {
					var currentIcon = $('head>link[rel="shortcut icon"]').attr('href');
					if (RMUS.middleColumn.forum.reloadPosts.unseenPosts.length > 0 && currentIcon == '/favicon.ico') {
						$('head>link[rel="shortcut icon"]').remove();
						$('head').append('<link rel="shortcut icon" type="image/png" href="http://readmore.thextor.de/userscript/img/favicon.png">');
					} 
					if (RMUS.middleColumn.forum.reloadPosts.unseenPosts.length == 0 && currentIcon == 'http://readmore.thextor.de/userscript/img/favicon.png') {
						$('head>link[rel="shortcut icon"]').remove();
						$('head').append('<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">');
					} 
					return false;
				},

				// Setzt die Farbe (HEX + GRB) in der die neuen Posts markiert werden
				setMarkPostColor : function () {
					// Nur wenn eine HEX-Zahl eingegeben wurde
					if (RMUS.options.options.middleColumn_forum_reloadPosts_markPostColor[0] == '#' && RMUS.options.options.middleColumn_forum_reloadPosts_markPostColor.length == 7) {
						RMUS.middleColumn.forum.reloadPosts.markPostColor = RMUS.options.options.middleColumn_forum_reloadPosts_markPostColor;
						RMUS.middleColumn.forum.reloadPosts.markPostColorRgb = "rgb(" + parseInt(RMUS.middleColumn.forum.reloadPosts.markPostColor.substr(1, 2), 16).toString() + ", " + parseInt(RMUS.middleColumn.forum.reloadPosts.markPostColor.substr(3, 2), 16).toString() + ", " + parseInt(RMUS.middleColumn.forum.reloadPosts.markPostColor.substr(5, 2), 16).toString() + ")";
					}
					return false;
				},

				// Ermöglicht das unbegrenzte Erweitern einer Seite
				endlessPage : function () {
					if (RMUS.middleColumn.forum.reloadPosts.postcount == (25 + (25 * RMUS.middleColumn.forum.reloadPosts.finishedPages))) {
						RMUS.middleColumn.forum.reloadPosts.finishedPages++;
						RMUS.middleColumn.forum.page++;
					}

					return false;
				},
				
				// Prüft ob eine neue Seite im Forum vorhanden ist
				checkForNewPage : function () {
					if (RMUS.options.options.middleColumn_forum_reloadPosts_checkForNewPage == 'checked'){
						if (RMUS.middleColumn.forum.reloadPosts.postcount == (25 + (25 * RMUS.middleColumn.forum.reloadPosts.finishedPages)) && $('#userscriptNewPage').length < 1) {

							$.ajax({
								type: 'POST',
								async: true,
								cache: false,
								url: RMUS.middleColumn.forum.threadlink + '&pagenum=' + (RMUS.middleColumn.forum.page + 1),
								contentType: 'text/html; charset=iso-8859-1;', 
								dataType: 'html',
								success: function (data) {
									var posts = data.match(/\<tr class=\"post\_[^"]+\"\>[^]+?\<\/tr\>/g);
									if (posts != null) {
										$('table.elf.forum.p2:last').after('<br/><div id="userscriptNewPage" style="width:520px; height: 23px; background-color: #2B91FF; text-align: right; vertical-align:middle; display:table-cell"><a style="color: #fff; font-weight: bold; padding-right: 10px;" href="' + RMUS.middleColumn.forum.threadlink + '&pagenum=' + (RMUS.middleColumn.forum.page + 1) + '">Zur n&auml;chsten Seite</a></div>');
									}
								}
							});
						}
					}

					return false;
				},
				
				// Zu neuen Posts scrollen
				jumpToNewPosts :{
					waitUntilNextJump : 5,
					oldmimit : 0,
					
					setWaitUntilNextJump : function(){
						var timeToWait = parseInt(RMUS.options.options.middleColumn_forum_reloadPosts_jumpToNewPosts_waitUntilNextJump, 10);
						if (timeToWait > 0){
							RMUS.middleColumn.forum.reloadPosts.jumpToNewPosts.waitUntilNextJump = timeToWait;
						}
						return false;
					},
					
					jump : function(){						
						if (RMUS.middleColumn.forum.reloadPosts.unseenPosts.length > 0){
							if ($('#userscript_enable_jump').attr('checked') == 'checked'){
								var jumpto = RMUS.middleColumn.forum.reloadPosts.unseenPosts[0] - (window.innerHeight * 0.55) + 25;								
								if (jumpto <= RMUS.middleColumn.forum.reloadPosts.jumpToNewPosts.oldmimit) jumpto = RMUS.middleColumn.forum.reloadPosts.jumpToNewPosts.oldmimit + 25;
								window.scrollTo(0, jumpto);
								RMUS.middleColumn.forum.reloadPosts.jumpToNewPosts.oldmimit = jumpto;
							}
						}
						return false;
					}
				}
			},

			// Vorschau für Forenposts
			preview : {
				userid : 0,
				username : '',
				previewIsEnabled : false,

				// HTML injizieren
				insertPreviewHtml : function () {
					$('<br /><table border="0" id="previewtable" style="display: none"><tr><td valign="top" id="previewleft" style="border: solid 1px #dddddd; border-right: none; width:110px; height:auto; min-height: 150px;"></td><td valign="top" id="preview" style="font-size: 11px; border: solid 1px #dddddd; width:408px; height:auto; min-height: 150px;"></td><td><img style="border: none; marin: 0, padding: 0;" src="http://readmore.thextor.de/userscript/img/minheight150.gif"></img></td></tr><tr><td colspan="2" style="border: solid 1px #dddddd; border-top: none; background-color: #DEDEDE; height: 12px;"></td><td style="border: none;"></td></table>').insertAfter('.center:last');
					$('<input type="button" value="Vorschau ein-/ausblenden" class="form" id="triggerPreview" style="margin-left: 10px;">').appendTo('.center:last');
				},

				// Grundgerüst des Preview (ohne den eigentlichen Post)
				initializePreview : function () {
					var d = new Date(),
						timedata = {};

					timedata.day = d.getDate();
					timedata.month = (d.getMonth() + 1);
					timedata.year = d.getFullYear();
					timedata.hours = d.getHours();
					timedata.minutes = d.getMinutes();

					$.each(timedata, function (key, value) {
						if (String(value).length == 1) {
							timedata[key] = '0' + value;
						}
					});

					RMUS.middleColumn.forum.preview.readUserid();	// User-ID auslesen
					RMUS.middleColumn.forum.preview.readUsername();	// Usernamen auslesen

					var firstRow = '<span style="font-size: 10px;"><a href="javascript:void(0)">#1337</a></span><br>',
						secontRow = '<span style="font-size: 10px;">' + timedata.day + '.' + timedata.month + '.' + timedata.year + ', ' + timedata.hours + ':' + timedata.minutes + '</span><br>',
						thirdRow = '<span style="font-size: 11px;"><img style="height: 11px;" src="http://images.readmore.de/img/icons/online.gif"><img src="http://readmore.thextor.de/userscript/img/space.gif" style="border: none; height: 1px; width: 5px;"><a class="bml" href="index.php?cont=profile&amp;id=' + RMUS.middleColumn.forum.preview.userid + '" title="' + RMUS.middleColumn.forum.preview.username + '">' + RMUS.middleColumn.forum.preview.username + '</a></span><br><br>',
						fourthRow = '<span style="font-size: 10px;">Beitr&auml;ge: 1337</span><br><br>',
						fifthRow = '<a href="index.php?cont=profile&amp;id=' + RMUS.middleColumn.forum.preview.userid + '" title="' + RMUS.middleColumn.forum.preview.username + '"><img src="' + $('.floatl.vcenter.elf.dgray.vcenter:first').html().match(/src="(.+?)" alt/)[1] + '"></a>';

					$('#previewleft').html(firstRow + secontRow + thirdRow + fourthRow + fifthRow);	
					return false;
				},

				// User-ID auslesen
				readUserid : function () {
					RMUS.middleColumn.forum.preview.userid = $('div.floatl.vcenter.elf.dgray:eq(1)').html().match(/id=(.+?)"/)[1];
				},

				// Usernamen auslesen
				readUsername : function () {
					RMUS.middleColumn.forum.preview.username = $('div.floatl.vcenter.elf.dgray:eq(1)').html().match(/">(.+?)<\/a>/)[1]
				},

				// Den Post in die Preview umwandeln
				convertToPreview : function (raw_post) {
					var previewTags = {};
					previewTags['\\[b\\]'] = '<b>';
					previewTags['\\[/b\\]'] = '</b>';
					previewTags['\\[i\\]'] = '<i>';
					previewTags['\\[/i\\]'] = '</i>';
					previewTags['\\[u\\]'] = '<u>';
					previewTags['\\[/u\\]'] = '</u>';
					previewTags['\\[s\\]'] = '<s>';
					previewTags['\\[/s\\]'] = '</s>';
					previewTags['\\[hr\\]'] = '<hr style="margin:0; padding:0;">';
					previewTags['\\[center\\]'] = '<center>';
					previewTags['\\[/center\\]'] = '</center>';
					previewTags['\\[spoiler\\]'] = '<div><a href="#" onclick="spoiler(this);return false;" class="spoiler-link" style="background-image: url(http://images.readmore.de/img/icons/plus.jpg);">Spoiler</a><div class="spoiler-cont" style="display: none; ">';
					previewTags['\\[/spoiler\\]'] = '</div></div>';
					previewTags['\\[youtube]'] = '<iframe width="380" height="270" src="http://www.youtube.com/embed/';
					previewTags['\\[/youtube]'] = '" frameborder="0" allowfullscreen></iframe><br>';
					previewTags['\\[img]'] = '<img src="';
					previewTags['\\[/img]'] = '" alt="" title="" class="center" style="max-width:98%; border: 1px solid #CDCDCD;">';
					previewTags['\\[image]'] = '<img src="';
					previewTags['\\[/image]'] = '" alt="" title="" class="center" style="max-width:98%; border: 1px solid #CDCDCD;">';
					previewTags['\\[url]'] = '<a>';
					previewTags['\\[/url]'] = '</a>';
					previewTags['\\[/color]'] = '</span>';
					previewTags['\\[list]'] = '<ul style="margin: 0; padding: 0; padding-left: 20px;">';
					previewTags['\\[/list]'] = '</ul>';
					previewTags['\\[\\*]'] = '<li style="margin: 0; padding: 0; list-style-image: url(http://images.readmore.de/img/icons/else.png);">';

					var text = raw_post;

					// BB-Code ersetzen
					$.each(previewTags, function (key, value) {
						var regEx = new RegExp(key, 'g');
						text = text.replace(regEx, value);
					});

					// URL mit Link
					var urlPreview = text.match(/\[url=[^\]]+/g);
					if (urlPreview) {
						$.each(urlPreview, function (key) {
							var link = urlPreview[key].replace(/\[url=/, '').replace(/http:\/\//, '').replace(/https:\/\//, ''),
								regEx = new RegExp('\\' + urlPreview[key].replace(/\(/g, '\\(').replace(/\)/g, '\\)').replace(/\?/g, '\\?') + '\\]'); 
							text = text.replace(regEx, '<a href="http://' + link + '">');
						});
					}

					// color
					var colorPreview = text.match(/\[color=[^\]]+/g);
					if (colorPreview) {
						$.each(colorPreview, function (key) {
							var color = text.match(/\[color=(.+?)\]/)[1],
								regEx = new RegExp('\\' + colorPreview[key] + '\\]'); 
							text = text.replace(regEx, '<span style="color: ' + color + ';">');
						});
					}

					// Quote
					var quotes = text.match(/\[quot(.*?)\]/g);

					if (quotes != null) {
						$.each(quotes, function (index, value) {
							var quoteHead = '<div class="bggray2 bogray2 quote_titel">Zitat',
								name = value.match(/\[quote=(.*?)\]/);

							if (name != null) {
								quoteHead = quoteHead + ' von ' + name[1];
							}
							quoteHead = quoteHead + ':</div>';
							text = text.replace(value, quoteHead + '<div class="bogray2 quote">');
						});
					}

					text = text.replace(/\[\/quote\]/g, '</div>');				
					return text;
				},
				
				// Preview darstellen
				showPreview: function(){
					$('#preview').html(RMUS.middleColumn.forum.preview.convertToPreview(String($('#c_comment').val().replace(/(\r\n|\n|\r)/gm, '<br />'))));
				},

				// Preview starten / Ein- und ausblenden
				triggerPreview : function () {
					if(RMUS.middleColumn.forum.preview.previewIsEnabled == true) {
						// Ausblenden
						$('#previewtable').css('display', 'none');
						$('#c_comment').unbind("keyup", RMUS.middleColumn.forum.preview.showPreview);
						$('#c_comment').unbind("focus", RMUS.middleColumn.forum.preview.showPreview);
						RMUS.middleColumn.forum.preview.previewIsEnabled = false;
					} else {
						// Einblenden
						RMUS.middleColumn.forum.preview.initializePreview();
						RMUS.middleColumn.forum.preview.showPreview();

						$('#previewtable').css('display', 'block');
						$('#c_comment').keyup(RMUS.middleColumn.forum.preview.showPreview);
						$('#c_comment').focus(RMUS.middleColumn.forum.preview.showPreview);
						RMUS.middleColumn.forum.preview.previewIsEnabled = true;
					}
				}
			},
			
			replaceSpecialChars : function(text){
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
				
				replacePost['%E2%82%AC'] = '%80';		// €				
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
			},

			// Post im Hintergrund
			postPerAjax : function () {
				var post = $('form[name=submitpost]').serialize();
				
				// Sonderzeichen ersetzen
				 post = String(RMUS.middleColumn.forum.replaceSpecialChars(post));
				
				// Während der Wartezeiten den Submit-Knopf ausblenden
				$('.center:last').css('display', 'none');

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
							RMUS.middleColumn.forum.reloadPosts.readNewPosts();
						}
						
						// Submit-Knopf wieder einblenden
						$('.center:last').css('display', 'block');
					},
					error: function (){
						// Submit-Knopf wieder einblenden
						$('.center:last').css('display', 'block');
					}
				});
								
				return false;
			},
			
			scrollForNewPage : {
				oldPosts : 0,
				insertPosts : function (){
					var limit = parseInt($('#c_comment').offset().top, 10) - 190;
					var position = window.pageYOffset + (window.innerHeight * 0.55);
					if (position >= limit){
						// Der eigentliche Reload
						$.ajax({
							type: 'POST',
							async: false,
							cache: false,
							url: String(RMUS.middleColumn.forum.threadlink + '&pagenum=' + (RMUS.middleColumn.forum.page + 1)),
							contentType: 'text/html; charset=iso-8859-1;', 
							dataType: 'html',
							success: function (data) {
								var posts = data.match(/\<tr class=\"post\_[^"]+\"\>[^]+?\<\/tr\>/g);
								if (posts != null) {
									var postCharLenth = JSON.stringify(posts).length;
									if (postCharLenth !== RMUS.middleColumn.forum.scrollForNewPage.oldPosts){
										RMUS.middleColumn.forum.scrollForNewPage.oldPosts = postCharLenth;
										
										var footer = data.match(/\<tr class=\"cellheadercolor footer\_[^"]+\"\>[^]+?\<\/tr\>/g);
										for (i = 0, k = parseInt(posts.length, 10); i < k; i++) {
											$('table.elf.forum.p2.bogray2').append(posts[i]);
											$('table.elf.forum.p2.bogray2').append(footer[i]);
										}
										
										RMUS.middleColumn.forum.page++;
										// Beiträge aus den neuen Posts ignorieren
										if (RMUS.options.options.miscellaneous_ignoreUser == 'checked') RMUS.miscellaneous.ignoreUser.doIgnore(true, false, false);
										// Notzizen einblenden
										if(RMUS.options.options.miscellaneous_note == 'checked') RMUS.miscellaneous.note.initialize();
									}										
								}
							}
						});
					}
					
					return false;
				}
			},
			
			// Edit ohne Reload
			editPost : {
				
				originalPosts : [],
			
				initializeEvent : function(){
					$('tr[class*=footer_]>td>a[href*=edit]').click(function () {
						var hrefParts = String($(this).attr('href')).match(/postid=(.*)/);

						if (null !== hrefParts) {
							var postid = parseInt(hrefParts[1], 10);	
							$(this).attr('href', 'javascript:void(0);');

							RMUS.middleColumn.forum.editPost.loadPost(postid);
							RMUS.middleColumn.forum.editPost.showEditMenu(postid);
						}
					});
					
					return false;
				},
				
				loadPost : function(postid){
					var height = $('tr[class=post_' + postid + ']>td:last').css('height');
					RMUS.middleColumn.forum.editPost.originalPosts[postid] = $('tr[class=post_' + postid + ']>td:last').html();
					
					$('tr[class=post_' + postid + ']>td:last').html('');
					$('tr[class=post_' + postid + ']>td:last').append('<textarea style="width: 100%; height: ' + height + '; padding: 0; margin: 0;"></textarea>');
					
					$.ajax({
						type: 'POST',
						async: true,
						cache: false,
						url: 'index.php?cont=forum/edit&postid=' + postid,
						contentType: 'text/html; charset=iso-8859-1;',
						dataType: 'html',
						success: function (data) {
							$('tr[class=post_' + postid + ']>td:last textarea').val(data.replace(/(\r\n|\n|\r)/gm,'[newline]').match(/<textarea(.*?)>(.*?)<\/textarea>/)[2].replace(/\[newline\]/g, '\r\n'));
						}
					});
					
					return false;
				},
				
				showEditMenu : function(postid){					
					var submit = '<a class="edit_submit_' + postid + '" href="javascript:void(0);" style="margin-right: 4px;">Edit absenden</a>';
					var cancel = '<a class="edit_cancel_' + postid + '"href="javascript:void(0);" style="color: gray;">Edit abrechen</a>&nbsp;|&nbsp;';
					$('tr[class*=footer_' + postid + ']>td').append('<div>' + cancel + submit + '</div>');
					
					$('tr[class*=footer_' + postid + ']>td>div>a:first').click(function () {
						RMUS.middleColumn.forum.editPost.cancelEdit(postid);
					});
					
					$('tr[class*=footer_' + postid + ']>td>div>a:last').click(function () {
						RMUS.middleColumn.forum.editPost.submitEdit(postid);
					});
					
					return false;
				},
				
				cancelEdit : function(postid){
					$('tr[class*=footer_' + postid + ']>td>div').remove();
					$('tr[class=post_' + postid + ']>td:last').html('');
					$('tr[class*=footer_' + postid + ']>td>a:eq(1)').attr('href', 'http://www.readmore.de/index.php?cont=forum/edit&postid=' + postid);
					
					$('tr[class=post_' + postid + ']>td:last').html(RMUS.middleColumn.forum.editPost.originalPosts[postid]);
					RMUS.middleColumn.forum.editPost.originalPosts[postid] = null;				
					
					$('tr[class*=footer_' + postid + ']>td>div>a:first').off('click');
					$('tr[class*=footer_' + postid + ']>td>div>a:last').off('click');
					$('tr[class*=footer_' + postid + ']>td>a:eq(1)').off('click');
					RMUS.middleColumn.forum.editPost.initializeEvent();
					return false;
				},
				
				submitEdit : function(postid){	
					var newpost = '';
					var postdata = '';
					
					$.ajax({
						type: 'POST',
						async: false,
						cache: false,
						url: 'http://www.readmore.de/index.php?cont=forum/edit&postid=' + postid,
						contentType: 'text/html; charset=iso-8859-1;', 
						dataType: 'html',
						success: function (datafirst) {
							var f_uid = $(datafirst).find('input[name="f_uid"]').val();
							var boardid = $(datafirst).find('input[name="thread[boardid]"]').val();
							var threadid = $(datafirst).find('input[name="thread[threadid]"]').val();
							var postidedit = $(datafirst).find('input[name="post[postid]"]').val();
							var threadtopic = $(datafirst).find('input[name="thread[threadtopic]"]').val();
														
							newpost = $('tr[class=post_' + postid + ']>td:last textarea').val();
							postdata = 'f_uid=' + f_uid + '&thread[boardid]=' + boardid + '&thread[threadid]=' + threadid + '&post[postid]=' + postidedit + '&postnew_newposttext=' + encodeURI(newpost).replace(/&amp;/g, '&').replace(/&/g, '%26');
							if (threadtopic != null){
								if (threadtopic.trim().length > 0) postdata += '&thread[threadtopic]=' + encodeURI(threadtopic).replace(/&amp;/g, '&').replace(/&/g, '%26');
							} 
							postdata = RMUS.middleColumn.forum.replaceSpecialChars(postdata);
							
							$.ajax({
								type: 'POST',
								async: false,
								cache: false,
								url: 'http://www.readmore.de/index.php?cont=forum/do_edit',	
								data: postdata,
								contentType: 'application/x-www-form-urlencoded; charset=iso-8859-1;', 
								dataType: 'html',
								success: function (response) {
									var content = $(response).find('#content').html();
									if(content.match(/Fehler/)){
										alert('Es ist leider ein Fehler aufgetreten. Bitte lade die Seite neu!');
									}
								},
								error: function (){
									alert('Es ist leider ein Fehler aufgetreten. Bitte lade die Seite neu!');
								}
							});								
						}
					});
					
					$('tr[class*=footer_' + postid + ']>td>div>a:first').off('click');
					$('tr[class*=footer_' + postid + ']>td>div>a:last').off('click');
					$('tr[class*=footer_' + postid + ']>td>a:eq(1)').off('click');
					
					$('tr[class*=footer_' + postid + ']>td>div').remove();
					$('tr[class=post_' + postid + ']>td:last').html(RMUS.middleColumn.forum.preview.convertToPreview(newpost.replace(/(\r\n|\n|\r)/gm, '<br />')));
					$('tr[class*=footer_' + postid + ']>td>a:eq(1)').attr('href', 'http://www.readmore.de/index.php?cont=forum/edit&postid=' + postid);					
					RMUS.middleColumn.forum.editPost.initializeEvent();
					
					return false;
				}
			}
		},
		
		searchJumpToLastpage : {
			displayLink : function(){
				$('#content a[href^="index.php?cont=forum/thread&threadid="]').each(function(){
					var link = $(this).attr('href').replace('&page=1', '&pagenum=lastpage');
					$(this).parent().append('<a href="' + link + '" class="floatr" title="Last Page"><img src="http://images.readmore.de/img/icons/high_next.gif" height="9" width="11" alt=""></a>');
				});
				
				return false;
			}
		}
	},

	rightColumn: {

	/************************
	*	TICKER		*
	*************************/
		ticker : {
			// Blendet den Ticker komplett aus
			hideTicker : function () {
				$('#tickr, div.line3:eq(0), div.line3:eq(1)').css('display','none');
				return false;
			},
			
			reloadTicker : function(){
				var reloadData = '';
				reloadData = $(RMUS.miscellaneous.reloadMainpageData.mainpageData).find('#nav_matchticker').html();

				if (reloadData && reloadData.length > 0) {
					$('#nav_matchticker').html(reloadData);
				}
				
				return false;
			}
		},

	/************************
	*	HEADLINES	*
	*************************/
		headlines : {
			// Blendet die Schlagzeilen komplett aus
			hideHeadlines : function () {
				document.getElementById('headlines').style.display = "none";
				return false;
			},

			// Blendet Counterstrike aus
			hideCounterstrike : function () {
				for (var i = 0; i < 8; i++) {
					document.getElementById('nav_schlagzeilen').children[i].style.display = "none";
				}
				return false;
			},

			// Blendet Starcraft aus
			hideStarcraft : function () {
				for (var i = 8; i < 16; i++) {
					document.getElementById('nav_schlagzeilen').children[i].style.display = "none";
				}
				return false;
			},

			// Blendet Dota aus
			hideDefenseOfTheAncients : function () {
				for (var i = 16; i < 23; i++) {
					document.getElementById('nav_schlagzeilen').children[i].style.display = "none";
				}
				return false;
			},

			// Blendet LoL aus
			hideLeagueOfLegends : function () {
				for (var i = 23; i < 29; i++) {
					document.getElementById('nav_schlagzeilen').children[i].style.display = "none";
				}
				return false;
			},

			// Blendet Warcraft aus
			hideWarcraft3 : function () {
				for (var i = 29; i < 34; i++) {
					document.getElementById('nav_schlagzeilen').children[i].style.display = "none";
				}
				return false;
			},

			// Blendet Sonstiges aus
			hideSonstiges : function () {
				for (var i = 34; i < 43; i++) {
					document.getElementById('nav_schlagzeilen').children[i].style.display = "none";
				}
				return false;
			}
		},

	/************************
	*	FORUM		*
	*************************/
		forum : {
			// Startet das umsortieren des Forums
			initializeForum : function () {
				var html = '';
				var sortForum = [RMUS.options.options.rightColumn_forum_hideForum_0, RMUS.options.options.rightColumn_forum_hideForum_1, RMUS.options.options.rightColumn_forum_hideForum_2, RMUS.options.options.rightColumn_forum_hideForum_3, RMUS.options.options.rightColumn_forum_hideForum_4];	       
				var menuItems	= document.getElementsByClassName('cont_box')[1].children;
				var sections	= ['','','','',''];
				
				// Alle Menueinträge durchgehen
				for (var j = 0, k = menuItems.length, l = -1, item = ''; j < k; j++){
					// HTML-Auslesen
					item = menuItems[j].outerHTML;						
					// Sektionen hochzählen
					if (item.indexOf('class="bml"') !== -1)	l++;  
					// Bilder in der "Featured Thread" Sektion anpassen
					if (l === 0) item = item.replace('" height="11px"', '" height="11px" class="userscript11px" ');				
					// Eintrag zur Sektion hinzufügen
					sections[l] += item;
				}
				
				// Leerzeilen entfernen
				for (var n = 0, o = sections.length; n < o; n++){
					sections[n] = sections[n].replace(/(<div class="spacer_s"><\/div>)|(<br>)|(<br \/>)/g, '');
				}
       
				// Reihenfolge der Sektionen entsprechen den Optionen anpassen
				for (var i = 0, m = sections.length; i < m; i++) {
					switch (sortForum[i]){
						case 'featuredthreads':	html += sections[0] + '<br>';
									break;
						case 'esportforen':	html += sections[1] + '<br>';
									break;
						case 'technik':		html += sections[2] + '<br>';
									break;
						case 'offtopicforen':	html += sections[3] + '<br>';
									break;
						case 'spiele':		html += sections[4] + '<br>';
									break;									
					}
				}
				
				// Einfügen
				document.getElementsByClassName('cont_box')[1].innerHTML = html
				
				// Größte der Bilder anpassen
				$('.userscript11px').css('height', '11px');
				$('.userscript11px').css('width', '11px');
				
				return false;
			},
			
			// Forennavigation neuladen
			reloadForum : function() {
				var reloadData = '';
				reloadData = $(RMUS.miscellaneous.reloadMainpageData.mainpageData).find('div.cont_box:last').html();

				if (reloadData && reloadData.length > 0) {
					$('.cont_box:last').html(reloadData);
					if (RMUS.options.options.rightColumn_forum_sections == 'checked') RMUS.rightColumn.forum.initializeForum();
				}
				
				return false;
			},
			
			// Forennavigation manuell neuladen
			reloadForumPerClick : {
				addimage : function (){
					$('a.headline_link[href="index.php?cont=forum/forum"]').parent().append('<span style="float: right;"><img id="userscript_reloadForumButton" src="http://readmore.thextor.de/userscript/img/refresh.png" style="height: 13px; padding-top: 2px; cursor: pointer;">&nbsp;</span>');
					return false;
				},
				
				reload : function(){
					RMUS.miscellaneous.reloadMainpageData.readPage();
					window.setTimeout(function () {RMUS.rightColumn.forum.reloadForum();}, 1500);
				}
			},

			// Blendet das Forum komplett aus
			hideForum : function () {
				$('div.headline_bg:last, div.cont_box:last').css('display','none');			
				return false;
			}
		}
	}

}


/********************************
*	Funktionen aktivieren	*
*********************************/

// Bereich auf der Readmore.de Seite rausfinden
var cont = '',
    action = document.location.search.match(/action=([a-zA-Z]+)/i),
    getVars = document.location.search.replace(/[?]/g, '').replace(/[&]/g, '=').split('=');

if (action && action[1]) {
    action = action[1];
} else {
    action = null;
}

$.each(getVars, function (index, value) {
	if (value == 'cont') {
		cont = getVars[index+1];
	}
});

content = {
	mainpage                : false,
	profile			: false,
	groups_new		: false,
	groups_group_list       : false,
	groups_show_group       : false,
	msg                     : false,
	news_archive            : false,
	headlines_overview      : false,
	www                     : false,
	widget_create_ticker    : false,
	guides                  : false,
	articles                : false,
	news                    : false,
	search                  : false,
	match_overview          : false,
	db                      : false,
	coverages               : false,
	demo_overview_pov       : false,
	demo_overview_hltv      : false,
	demo_overview           : false,
	video_overview          : false,
	gallery_sets            : false,
	forum_forum             : false,
	forum_board             : false,
	forum_thread            : false,
	forum_edit              : false,
	forum_newtopic          : false,
	community               : false,
	blog                    : false,
	poll_archive            : false,
	rules                   : false,
	team                    : false,
	imprint                 : false,
	userstream              : false,
	gallery_images          : false,
	matches                 : false
};

switch (cont) {
	case '':
		content.mainpage = true;
		break;
	case 'profile':
		content.profile = true;
		break;
	case 'forum/thread':
		content.forum_thread = true;
		break;
	case 'forum/forum':
		content.forum_forum = true;
		break;
	case 'forum/board':
		content.forum_board = true;
		break;
	case 'forum/edit':
		content.forum_edit = true;
		break;
	case 'matches':
		content.matches = true;
		break;
	case 'www':
		content.www = true;
		break;
	case 'userstream':
		content.userstream = true;
		break;
	case 'groups/new':
		content.groups_new = true;
		break;
	case 'groups/group_list':
		content.groups_group_list = true;
		break;
	case 'groups/show_group':
		content.groups_show_group = true;
		break;
	case 'msg':
		content.msg = true;
		break;
	case 'news_archive':
		content.news_archive = true;
		break;
	case 'headlines_overview':
		content.headlines_overview = true;
		break;
	case 'widget/create_ticker':
		content.widget_create_ticker = true;
		break;
	case 'guides':
		content.guides = true;
		break;
	case 'articles':
		content.articles = true;
		break;
	case 'news':
		content.news = true;
		break;
	case 'search':
		content.search = true;
		break;
	case 'match_overview':
		content.match_overview = true;
		break;
	case 'db':
		content.db = true;
		break;
	case 'coverages':
		content.coverages = true;
		break;
	case 'demo_overview_pov':
		content.demo_overview_pov = true;
		break;
	case 'demo_overview_hltv':
		content.demo_overview_hltv = true;
		break;
	case 'demo_overview':
		content.demo_overview = true;
		break;
	case 'video_overview':
		content.video_overview = true;
		break;
	case 'gallery_sets':
		content.gallery_sets = true;
		break;
	case 'forum/newtopic':
		content.forum_newtopic = true;
		break;
	case 'community':
		content.community = true;
		break;
	case 'blog':
		content.blog = true;
		break;
	case 'poll_archive':
		content.poll_archive = true;
		break;
	case 'rules':
		content.rules = true;
		break;
	case 'team':
		content.team = true;
		break;
	case 'imprint':
		content.imprint = true;
		break;
	case 'gallery_images':
		content.gallery_images = true;
		break;
	default:
		content.mainpage = true;
		break;
}

// Optionen laden und Link in der Usereiste einfügen
RMUS.options.readOptions();
RMUS.options.insertOptionsLink();

if (RMUS.options.options.miscellaneous_fixedToolbar) {
	RMUS.miscellaneous.createFixedToolbar();	
}

// WWW, Streams, Galerie, Ergebnisticker, Schlagzeilen und Forum angezeigt
if (!content.profile && !content.guides) {
	// WWW ausblenden
	if (RMUS.options.options.leftColumn_www_hideWww === 'checked') RMUS.leftColumn.www.hideWww();

	// Streams ausblenden
	if (RMUS.options.options.leftColumn_streams_hideStreams === 'checked') {
		RMUS.leftColumn.streams.hideStreams();
	} 

	// Ticker ausblenden
	if (RMUS.options.options.rightColumn_ticker_hideTicker === 'checked') RMUS.rightColumn.ticker.hideTicker();

	// Schlagzeilen ausblenden
	if (RMUS.options.options.rightColumn_headlines_hideHeadlines === 'checked') RMUS.rightColumn.headlines.hideHeadlines();  // Alle
	else{	// Individuell
		if (RMUS.options.options.rightColumn_headlines_hideCounterstrike === 'checked') RMUS.rightColumn.headlines.hideCounterstrike();
		if (RMUS.options.options.rightColumn_headlines_hideStarcraft === 'checked') RMUS.rightColumn.headlines.hideStarcraft();
		if (RMUS.options.options.rightColumn_headlines_hideDefenseOfTheAncients === 'checked') RMUS.rightColumn.headlines.hideDefenseOfTheAncients();
		if (RMUS.options.options.rightColumn_headlines_hideLeagueOfLegends === 'checked') RMUS.rightColumn.headlines.hideLeagueOfLegends();
		if (RMUS.options.options.rightColumn_headlines_hideWarcraft3 === 'checked') RMUS.rightColumn.headlines.hideWarcraft3();
		if (RMUS.options.options.rightColumn_headlines_hideSonstiges === 'checked') RMUS.rightColumn.headlines.hideSonstiges();
		
		// Fixt die Größe des Bildes
		$('#nav_schlagzeilen img[alt=activity]').css('height', '11px');
		$('#nav_schlagzeilen img[alt=activity]').css('width', '11px');
	}

	// Forum ausblenden
	if (RMUS.options.options.rightColumn_forum_hideForum === 'checked')	RMUS.rightColumn.forum.hideForum();	// Komplett ausblenden
	else{	// Individuell
		if (RMUS.options.options.rightColumn_forum_sections === 'checked') {
			RMUS.rightColumn.forum.initializeForum();
		}
	}
	
	// Neuladen der Forannavigation beziehungsweise der Streams oder Ticker	
	if (RMUS.options.options.rightColumn_forum_reloadForum === 'checked' || RMUS.options.options.leftColumn_streams_reloadStreams === 'checked' || RMUS.options.options.rightColumn_ticker_reloadTicker === 'checked'){
		RMUS.miscellaneous.reloadMainpageData.readPage();
	}
		
	// Button um die Forennavigation zu aktualisieren
	RMUS.rightColumn.forum.reloadForumPerClick.addimage();
	$('#userscript_reloadForumButton').click(function () { RMUS.rightColumn.forum.reloadForumPerClick.reload(); });
}

	// Sprung zur letzten Seite in den Suchergebnissen
	if (content.search){
		if (RMUS.options.options.middleColumn_search_jump_to_last_page === 'checked') RMUS.middleColumn.searchJumpToLastpage.displayLink();
	}

// Nur im Forum (Threadansicht) aktivieren
if (content.forum_thread) {
	
	// Link zum Thread und Seite herausfinden
	RMUS.middleColumn.forum.readThreadlink();
	RMUS.middleColumn.forum.readPage();
	
	// Wenn Lastpage gesetzt ist, zum letzten Post springen
	if (RMUS.options.options.miscellaneous_lastPageJumpToLastPost === 'checked') RMUS.miscellaneous.lastPageJumpToLastPost();
	
	// Knopf zum hochscrollen
	if (RMUS.options.options.miscellaneous_buttonScrollUp === 'checked') RMUS.miscellaneous.buttonScrollUp();
	
	// Knopf zum runterscrollen
	if (RMUS.options.options.miscellaneous_buttonScrollDown === 'checked') RMUS.miscellaneous.buttonScrollDown();
	
	// Titel umsortieren
	if (RMUS.options.options.miscellaneous_reSortTitle === 'checked') RMUS.miscellaneous.reSortTitle();
	  
	// Vorschau
	if (RMUS.options.options.middleColumn_forum_preview === 'checked') {
		RMUS.middleColumn.forum.preview.insertPreviewHtml();
		$('#triggerPreview').click(RMUS.middleColumn.forum.preview.triggerPreview);
	}
	
	// Posten im Hintergrund
	if (RMUS.options.options.middleColumn_forum_postPerAjax === 'checked') {
		$('input[name=submit_thread]').click(function (event) {
			event.preventDefault();
			RMUS.middleColumn.forum.postPerAjax();
		});
	}

	// Posts nachladen
	if (RMUS.options.options.middleColumn_forum_reloadPosts_readNewPosts === 'checked') {
		RMUS.middleColumn.forum.reloadPosts.readPostcount();

		// Ungelesene Posts markieren		
		if (RMUS.options.options.middleColumn_forum_reloadPosts_markNewPosts === 'checked') {
			// Farbe zum markieren setzen
			if (RMUS.options.options.middleColumn_forum_reloadPosts_markPostColor &&
				RMUS.options.options.middleColumn_forum_reloadPosts_markPostColor.length){

				RMUS.middleColumn.forum.reloadPosts.setMarkPostColor();
			}
		}

		if (RMUS.options.options.middleColumn_forum_reloadPosts_jumpToNewPosts === 'checked' && RMUS.options.options.middleColumn_forum_reloadPosts_endlessPage === 'checked'){
			$('a.bookmark').after('<input style="margin-left: 2px;" type="checkbox" id="userscript_enable_jump" name="userscript_enable_jump">');
			RMUS.middleColumn.forum.reloadPosts.jumpToNewPosts.setWaitUntilNextJump();
			window.setInterval(function () {
				RMUS.middleColumn.forum.reloadPosts.jumpToNewPosts.jump();
			}, parseInt(RMUS.middleColumn.forum.reloadPosts.jumpToNewPosts.waitUntilNextJump, 10) * 1000);	
		}
	}	

	// Avataranimationen stoppen
	if (RMUS.options.options.miscellaneous_stopAvatarAnimation === 'checked') {
		RMUS.miscellaneous.stopAvatarAnimation.stopAnimation();
	}
	
	// Notzizen einblenden
	if(RMUS.options.options.miscellaneous_note === 'checked') {
		RMUS.miscellaneous.note.initialize();
	}
	
	// Edit vorbereiten	
	if (RMUS.options.options.middleColumn_forum_editPost === 'checked'){
		RMUS.middleColumn.forum.editPost.initializeEvent();
	}

	// Youtubeplayer ersetzen
	if(RMUS.options.options.miscellaneous_convertYoutube === 'checked') {
		RMUS.miscellaneous.convertYoutube();
	}
}

// User ignorieren
if (RMUS.options.options.miscellaneous_ignoreUser === 'checked'){
	RMUS.miscellaneous.ignoreUser.doIgnore(content.forum_thread, content.matches, content.profile);
}

// Extrabuttons in den entsprechenden Seiten initialisieren
if (content.forum_thread || content.forum_newtopic || content.forum_edit || content.matches || content.msg || content.profile || content.groups_show_group) {
	if (RMUS.options.options.miscellaneous_extraButtons === 'checked') {
		RMUS.miscellaneous.extrabuttons.init();
	}
}

// HTML für die Optionen injekten und Eventhandler für das Menu setzen
$('body').append(('{{optionshtml}}').replace('{{version}}', RMUS.options.version, 'g'));

// Fix image jumping in forum box between requests
$('head').append('<style type="text/css">div#nav_schlagzeilen div.listing > a > img {width: 11px; height: 11px;} div.cont_box div.listing > img {width: 5px; height: 7px;}</style>');

$('#saveUserscriptOptions').click(function () {
	RMUS.options.saveOptions();
});
$('#openUserscriptOptions').click(function () {
	RMUS.options.loadOptions();
});
$('#openUserscriptOptions').click(function () {
	$('#userscriptOptions').toggle();
});
$('#closeUserscriptOptions').click(function () {
	$('#userscriptOptions').toggle();
});

// Click Handler für Desktop-Notifications um die Berechtigung einzuholen
if(RMUS.options.options.miscellaneous_reloadMessages === 'checked') {
	$('input#miscellaneous_reloadMessages_desktopNotifications').click(function () {
		if ($(this).is(':checked')) {
			if (window.webkitNotifications) {
				// const unsigned int PERMISSION_ALLOWED = 0;
				// const unsigned int PERMISSION_NOT_ALLOWED = 1;
				// const unsigned int PERMISSION_DENIED = 2;

				switch (window.webkitNotifications.checkPermission()) {
					case 1:
						window.webkitNotifications.requestPermission();
						break;
					case 2:
						alert('Es scheint als hättest Du Desktop-Notifications für readmore.de geblockt. Du kannst diese jedoch einfach in den Einstellungen deines Browsers widerrufen.');
						break;
					default:
						// Permission liegt bereits vor (0). <Nothing to do here...>
				}
			} else {
				alert('Diese Funktion funktioniert derzeit nur in Verbindung mit dem Google Chrome Browser');
				$(this).attr('checked', false);
			}
		}
	});
}

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

// Icon fuer das Auf- und Zuklappen anpassen
$('[id*=toggle_sub]').click(function(){
	var img = $(this).attr('src').trim();
	if (img == 'http://readmore.thextor.de/userscript/img/plus_alt_16x16.png') $(this).attr('src', 'http://readmore.thextor.de/userscript/img/minus_alt_16x16.png');
	else $(this).attr('src', 'http://readmore.thextor.de/userscript/img/plus_alt_16x16.png');
});

// Prüfen ob eine neue Version erschienen ist
RMUS.miscellaneous.checkVersion();

// content in den LocalStorage speichern
var seen = [];
localStorage.setItem('userscriptContent', 
	JSON.stringify(content, function(key, val) {
		if (typeof val == "object") {
			if (seen.indexOf(val) >= 0) {
				return undefined
			}
			seen.push(val);
		}

		return val;
	})
);

// Im Hintergrund ausgeführte Aktionen starten (zeitunkritisch)
window.setInterval(function(){

	// content auslesen
	if (!content){
		content = JSON.parse(localStorage.getItem('userscriptContent'));
	}

	// Wenn wir uns in einem Thread befinden
	if (content.forum_thread) {

		// Posts nachladen
		if (RMUS.options.options.middleColumn_forum_reloadPosts_readNewPosts === 'checked') {
			RMUS.middleColumn.forum.reloadPosts.readNewPosts();
		}		

		// Avataranimationen stoppen
		if (RMUS.options.options.miscellaneous_stopAvatarAnimation === 'checked') {
			RMUS.miscellaneous.stopAvatarAnimation.stopAnimation();
		}
	}	
}, (parseInt(RMUS.options.options.sub_middleColumn_forum_reloadPosts_timeToWait, 10) > 2) ? parseInt(RMUS.options.options.sub_middleColumn_forum_reloadPosts_timeToWait, 10) * 1000 : 3000);

// Im Hintergrund ausgeführte Aktionen starten (3x in der Sekunde, sehr zeitkritisch)
window.setInterval(function(){

	// Content auslesen
	if (!content){
		content = JSON.parse(localStorage.getItem('userscriptContent'));
	}

	if (content.forum_thread) {
		if (RMUS.options.options.middleColumn_forum_reloadPosts_readNewPosts === 'checked') {
			if (RMUS.options.options.middleColumn_forum_reloadPosts_markNewPosts === 'checked') {
				// (de)-Markieren
				RMUS.middleColumn.forum.reloadPosts.markNewPosts();			

				// Favicon verändern
				if (RMUS.options.options.middleColumn_forum_reloadPosts_changeFavicon === 'checked'){
					RMUS.middleColumn.forum.reloadPosts.changeFavicon();
				}

				// Postanzahl im Tab anzeigen
				if (RMUS.options.options.middleColumn_forum_reloadPosts_showNewPostsTitle === 'checked') {
					RMUS.middleColumn.forum.reloadPosts.showNewPostsTitle();
				}
			}
		}
	
		// Beim ereichen des letzten Posts ggf. die nächste Seite nachladen. Nur wenn wir uns nicht auf der letzten Seite befinden!
		if (RMUS.options.options.middleColumn_forum_scrollForNewPage === 'checked' && $.trim($('div.floatl.m2.elf').html()).substr($.trim($('div.floatl.m2.elf').html()).length-4) != '</b>') {
			RMUS.middleColumn.forum.scrollForNewPage.insertPosts();
		}		
	}
}, 500);

// Im Hintergrund ausgeführte Aktionen starten (Nur alle 15 Sekunden)
window.setInterval(function(){

	// Außer auf dem Profil und der Guides
	if (!content.profile && !content.guides) {

		// Streams und Forennavigation nachladen (Nur, wenn auch eingeblendet)
		if (RMUS.options.options.rightColumn_forum_reloadForum === 'checked' && RMUS.options.options.rightColumn_forum_hideForum != 'checked'
			|| RMUS.options.options.leftColumn_streams_reloadStreams === 'checked' && RMUS.options.options.leftColumn_streams_hideStreams != 'checked'
			|| RMUS.options.options.rightColumn_ticker_reloadTicker === 'checked' && RMUS.options.options.rightColumn_ticker_hideTicker != 'checked') {

			RMUS.miscellaneous.reloadMainpageData.readPage();

			// Forennavigation
			if (RMUS.options.options.rightColumn_forum_hideForum !== 'checked'
				&& RMUS.options.options.rightColumn_forum_reloadForum === 'checked') {

				// Lag im FF vermindern
				window.setTimeout(RMUS.rightColumn.forum.reloadForum(), 2000);					
			}

			// Streams
			if (RMUS.options.options.leftColumn_streams_hideStreams != 'checked'
				&& RMUS.options.options.leftColumn_streams_reloadStreams === 'checked') {

				// Lag im FF vermindern
				window.setTimeout(RMUS.leftColumn.streams.reloadStreams(), 4000);			
			}
			
			// Ticker
			if (RMUS.options.options.rightColumn_ticker_hideTicker != 'checked'
				&& RMUS.options.options.rightColumn_ticker_reloadTicker === 'checked') {

				// Lag im FF vermindern
				window.setTimeout(RMUS.rightColumn.ticker.reloadTicker(), 6000);
			}
		}
	}

	// PMs auf jeder Seite überprüfen (Usernavi buggy, daher nicht Teil der mainPageData)
	if(RMUS.options.options.miscellaneous_reloadMessages === 'checked') {
		RMUS.miscellaneous.messages.checkForNewMessages();
	}
	
}, 15000);