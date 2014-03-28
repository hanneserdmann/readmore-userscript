/**
 * IgnoreUser
 * ==========
 *
 * Bietet die Möglichkeit einen User auf der Readmore-Seite zu ignorieren. Die
 * Posts im Forum werden versteckt.
 * @param _options {Options}
 */

function IgnoreUser(_options){
    var _user = [];
    var _ignoreCount = 0;

    /**
     * Liest die User aus den Optionen aus und packt sie in ein Array.
     * @private
     */
    var _readUser = function(){
        var user = [];
        $(String(_options.getOption('miscellaneous_ignoreUser_usernames')).split(',')).each(function(index, value){
            user.push(value.trim());
        });

        _user = user;
    };

    /**
     * Blendet die Posts der User aus.
     * @param thread {Boolean}
     * @param ticker {Boolean}
     * @param profile {Boolean}
     */
    this.ignore = function(thread, ticker, profile){
        // Falls das Array mit den Usern leer ist, wird es eingelesen.
        if (_user.length < 1){
            _readUser();
        }

        if (thread) {
            $(_user).each(function(index, value) {
                $('tr[class*=post_]:has(a[title="' + value + '"]) td').each(function() {

                    if (this.innerHTML.match(/ignored_/) == null){
                        if (_ignoreCount % 2){
                            _ignoreCount--;
                            $(this).html('<div style="display:none;" class="ignored_' + _ignoreCount + '">' + $(this).html() + '</div>');
                            _ignoreCount += 2;
                        }
                        else{
                            $(this).html('<a style="font-size: 9px;" href="javascript:void(0)" onclick="$(\'.ignored_' + _ignoreCount + '\').toggle(); if(this.innerHTML == \'Beitrag einblenden\'){this.innerHTML = \'Beitrag ausblenden\';}else{this.innerHTML = \'Beitrag einblenden\';}">Beitrag einblenden</a><br/>' + '<br/><div style="display:none;" class="ignored_' + _ignoreCount + '">' + $(this).html() + '</div>');
                            _ignoreCount++;
                        }
                    }
                });
            });
        }

        if (ticker || profile) {
            $(_user).each(function(index, value) {
                $('div .elf.cmt_kopf:has(a.cmt_head:contains(' + value + '))').next().each(function(){
                    $(this).html('<a href="javascript:void(0)" onclick="$(\'.ignored_' + _ignoreCount + '\').toggle();">Beitrag einblenden</a><br/>' + '<br/><div style="display:none;" class="ignored_' + _ignoreCount + '">' + $(this).html() + '</div>');
                    _ignoreCount++;
                });
            });
        }
    };
}