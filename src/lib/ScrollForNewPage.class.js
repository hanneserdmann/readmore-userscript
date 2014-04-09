/**
 * ScrollForNewPage
 * ================
 *
 * Beim Runterscrollen werden neue Seiten nachgeladen und angezeigt.
 */

function ScrollForNewPage(_reloadPosts, _ignoreUser, _notes) {
    var _oldPosts = 0;

    this.insertPosts = function () {
        var limit = parseInt($('#c_comment').offset().top, 10) - 190;
        var position = window.pageYOffset + (window.innerHeight * 0.55);
        if (position >= limit) {
            // Der eigentliche Reload
            $.ajax({
                type: 'POST',
                async: false,
                cache: false,
                url: String(_reloadPosts.getThreadlink() + '&pagenum=' + (_reloadPosts.getPostcount() + 1)),
                contentType: 'text/html; charset=iso-8859-1;',
                dataType: 'html',
                success: function (data) {
                    var posts = data.match(/\<tr class=\"post\_[^"]+\"\>[^]+?\<\/tr\>/g);
                    if (posts != null) {
                        var postCharLenth = JSON.stringify(posts).length;
                        var $postsTable = $('table.elf.forum.p2.bogray2');

                        if (postCharLenth !== _oldPosts) {
                            _oldPosts = postCharLenth;

                            var footer = data.match(/\<tr class=\"cellheadercolor footer\_[^"]+\"\>[^]+?\<\/tr\>/g);
                            for (i = 0, k = parseInt(posts.length, 10); i < k; i++) {
                                $postsTable.append(posts[i]);
                                $postsTable.append(footer[i]);
                            }

                            _reloadPosts.setPostcount(_reloadPosts.getPostcount() + 1);

                            // Beiträge aus den neuen Posts ignorieren
                            if (Options.getOption('miscellaneous_ignoreUser') == 'checked') {
                                _ignoreUser.ignore(true, false, false);
                            }
                            // Notzizen einblenden
                            if (Options.getOption('miscellaneous_note') == 'checked') {
                                _notes.init(false);
                            }
                        }
                    }
                },
                beforeSend: function (jqXHR) {
                    jqXHR.overrideMimeType('text/html;charset=iso-8859-1');
                }
            });
        }
    };

    this.editboxTop = function () {
        var $content = $('#content');

        $content.find('h1:first').after('<a id="RMUSeditboxTop" href="javascript:void(0);" style="float: right;" onclick="$(\'#content h1:first\').after($(\'form[name=submitpost]\')); $(this).css(\'display\',\'none\'); $(\'#RMUSeditboxBottom\').css(\'display\',\'\');">Editbox anzeigen<br /><br /></a>');
        $content.find('br.clear:last').after('<a id="RMUSeditboxBottom" href="javascript:void(0);" style="float: right; display: none;" onclick="$(\'#content br.clear:last\').after($(\'form[name=submitpost]\')); $(this).css(\'display\',\'none\'); $(\'#RMUSeditboxTop\').css(\'display\',\'\');">Editbox anzeigen<br /><br /></a>');
    };
}