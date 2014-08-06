/**
 * IgnoreUser
 * ==========
 *
 * Ermäglicht das Ignorieren von Usern. Angegeben wird die jeweilige User-ID. Der geschriebene Post im Forum,
 * Kommentar im Ticker oder unter den News oder aber Gästebucheintrag wird versteckt.
 */

function IgnoreUser($, _options, _siteLocation, _content){
    var _userIds     = [],
        _$contentElm = $('#c_content');

    this.ignore = function(){
        _readUserIds();

        // Wenn wir uns im Forum befinden und Posts vorhanden sind
        if (_siteLocation.getLocation('forums')){
            if (_content.get('forumPosts').length){
                _ignoreThread();
            }
        }
        else{
            // News, Userprofile (Gästebuch) oder Ticker
            if (_siteLocation.getLocation('news') || _siteLocation.getLocation('users') || _siteLocation.getLocation('matches')){
                _ignoreNews();
            }
        }
    };

    var _readUserIds = function(){
        $(_options.getOption('miscellaneous_ignoreUser_userids').trim().split(',')).each(function(){
            var userId  = Number(this);
            if (userId) _userIds.push(userId);
        });
    };

    /**
     * Ignoriert Posts im Forum
     * @private
     */
    var _ignoreThread = function(){
        var $posts = _$contentElm.find('.forum_post');

        $(_userIds).each(function(){
            $posts.has('span.user a[href*="/' + this + '-"]').each(function(){
                var $postElement            = $(this),
                    $postHeadElement        = $postElement.find('.head'),
                    $toggleTriggerElement   = $('<a class="ignoreUserTrigger">Toggle ignore</a>');

                // Nur ausführen wenn der Posts noch nicht ignoriert wurde
                if (!$postElement.data('ignoreUserTrigger')){
                    // Als ignoriert markieren
                    $postElement.data('ignoreUserTrigger', 1);

                    $postElement.find('div').not($postHeadElement).toggle();
                    $postHeadElement.find('span').prepend($toggleTriggerElement);

                    $toggleTriggerElement.on('click', function(e){
                        e.preventDefault();
                        $postElement.find('div').not($postHeadElement).toggle();
                    });
                }
            });
        });
    };

    /**
     * Ignoriert Posts unter den News, im Ticker und in Gästebüchern
     * @private
     */
    var _ignoreNews = function(){
        var $comments = _$contentElm.find('.comment');

        $(_userIds).each(function(){
            $comments.has('.comment_head > a[href*="/' + this + '-"]').each(function(){
                var $postElement            = $(this),
                    $postHeadElement        = $postElement.find('.comment_head'),
                    $postCommentElement     = $postElement.find('.comment_con'),
                    $toggleTriggerElement   = $('<a class="ignoreUserTrigger">Toggle ignore</a>');

                if (!$postElement.data('ignoreUserTrigger')){
                    // Als ignoriert markieren
                    $postElement.data('ignoreUserTrigger', 1);

                    $postElement.find('>div').not($postCommentElement).toggle();
                    $postCommentElement.find('>*').not($postHeadElement).not('textarea').toggle();
                    $postHeadElement.find('.comment_counter').prepend($toggleTriggerElement);

                    $toggleTriggerElement.on('click', function(e){
                        e.preventDefault();
                        $postElement.find('>div').not($postCommentElement).toggle();
                        $postCommentElement.find('>*').not($postHeadElement).not('textarea').toggle();
                    });
                }
            });
        });
    };
};