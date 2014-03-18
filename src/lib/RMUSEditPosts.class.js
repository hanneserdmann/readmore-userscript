/**
 * RMUSEditPosts
 * =============
 *
 * Ermöglicht das Editieren von Posts ohne Reload.
 */
function RMUSEditPosts(_preview){

    /**
     * Array mit den original Posts, damit sie wiederhergestellt werden
     * können.
     * @type {Array}
     * @private
     */
    var _originalPosts = [];

    /**
     * Fügt den Event-Handler ein um das Editieren für einen Post zu starten.
     */
    this.initializeEvent = function(){
        $('tr[class*=footer_] a:contains("editieren")').on('click', function () {
            var $this   = $(this);
            var postid  = 0;

            if ($this.data('postid') !== undefined){
                postid = $this.data('postid');
            }
            else{
                var hrefParts = String($this.attr('href')).match(/postid=(.*)/);
                $this.attr('href', 'javascript:void(0);');

                if (null !== hrefParts) {
                    postid = parseInt(hrefParts[1], 10);
                    $this.attr('href', 'javascript:void(0);');
                    $this.data('postid', postid);
                }
            }

            if (postid){
                _loadPost(postid);
                _showEditMenu(postid);
            }
        });
    };

    /**
     * Lädt den Post per AJAX nach
     * @param postid {integer}
     * @private
     */
    var _loadPost = function(postid){
        var height = $('tr[class=post_' + postid + ']>td:last').css('height');
        _originalPosts[postid] = $('tr[class=post_' + postid + ']>td:last').html();

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
            },
            beforeSend: function(jqXHR) {
                jqXHR.overrideMimeType('text/html;charset=iso-8859-1');
            }
        });
    };

    /**
     * Zeigt die zusätzlichen Knöpfe für den Edit
     * @param postid {integer}
     * @private
     */
    var _showEditMenu = function(postid){
        var submit = '<a class="edit_submit_' + postid + '" href="javascript:void(0);" style="margin-right: 4px;">Edit absenden</a>';
        var cancel = '<a class="edit_cancel_' + postid + '"href="javascript:void(0);" style="color: gray;">Edit abrechen</a>&nbsp;|&nbsp;';

        $('tr[class*=footer_' + postid + ']>td').append('<div>' + cancel + submit + '</div>');

        $('tr[class*=footer_' + postid + ']>td>div>a:first').on('click', function () {
            _cancelEdit(postid);
        });

        $('tr[class*=footer_' + postid + ']>td>div>a:last').on('click', function () {
            _submitEdit(postid);
        });
    };

    /**
     * Bricht den Edit ab
     * @param postid {integer}
     * @private
     */
    var _cancelEdit = function(postid){
        $('tr[class*=footer_' + postid + ']>td>div>a:first').off('click');
        $('tr[class*=footer_' + postid + ']>td>div>a:last').off('click');

        $('tr[class*=footer_' + postid + ']>td>div').remove();
        $('tr[class=post_' + postid + ']>td:last').html(_originalPosts[postid]);

        _originalPosts[postid] = null;
    };

    /**
     * Feuert den Ajax Request ab um den Edit durchzuführen
     * @param postid {integer}
     * @private
     */
    var _submitEdit = function(postid){
        var newpost     = '';
        var postdata    = '';

        $.ajax({
            type: 'POST',
            async: false,
            cache: false,
            url: 'http://www.readmore.de/index.php?cont=forum/edit&postid=' + postid,
            contentType: 'text/html; charset=iso-8859-1;',
            dataType: 'html',
            success: function (datafirst) {
                var $datafirst  = $(datafirst);
                var f_uid       = $datafirst.find('input[name="f_uid"]').val();
                var boardid     = $datafirst.find('input[name="thread[boardid]"]').val();
                var threadid    = $datafirst.find('input[name="thread[threadid]"]').val();
                var postidedit  = $datafirst.find('input[name="post[postid]"]').val();
                var threadtopic = $datafirst.find('input[name="thread[threadtopic]"]').val();

                newpost = $('tr[class=post_' + postid + ']>td:last textarea').val();
                postdata = 'f_uid=' + f_uid + '&thread[boardid]=' + boardid + '&thread[threadid]=' + threadid + '&post[postid]=' + postidedit + '&postnew_newposttext=' + encodeURI(newpost).replace(/&amp;/g, '&').replace(/&/g, '%26');
                if (threadtopic != null){
                    if (threadtopic.trim().length > 0) postdata += '&thread[threadtopic]=' + encodeURI(threadtopic).replace(/&amp;/g, '&').replace(/&/g, '%26');
                }

                // REPLACE ME
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
            },
            beforeSend: function(jqXHR) {
                jqXHR.overrideMimeType('text/html;charset=iso-8859-1');
            }
        });

        $('tr[class*=footer_' + postid + ']>td>div>a:first').off('click');
        $('tr[class*=footer_' + postid + ']>td>div>a:last').off('click');
        $('tr[class*=footer_' + postid + ']>td>div').remove();
        $('tr[class=post_' + postid + ']>td:last').html(_preview.convertToPreview(newpost.replace(/(\r\n|\n|\r)/gm, '<br />')));
    };
}