function BettingOverview($, _options){

    var _controlElement = null;
    var _games = {};

    this.init = function(){
        _controlElement = document.createElement('div');
        _controlElement.id = 'userscriptBettingControl';

        $('#c_content ul.breadcrumbs').next().after(_controlElement);

        _readGames();
        _buildControlPanel();
    };

    var _readGames = function(){
        var betElements = $('#c_content').find('[id^="betting_open_"]');
        var indexNumber = 0;

        $.each(betElements, function(i, e){
            var imgElement = e.querySelector('div.match_head > span.cov > img');

            if (!_games.hasOwnProperty(imgElement.title)){
                _games[imgElement.title] = {
                    title: imgElement.title,
                    src: imgElement.src,
                    number: indexNumber
                };

                indexNumber++;
            }

            e.className = 'userscriptBetting userscriptBettingControlNumber_' + _games[imgElement.title].number;
        });
    };

    var _buildControlPanel = function(){
        for (var game in _games){
            var gameContainer = document.createElement('div');
            var gameName = document.createElement('img');
            var gameBox = document.createElement('input');

            gameName.className = 'gameName';
            gameName.src = _games[game].src;
            gameBox.className = 'gameBox';
            gameBox.type = 'checkbox';
            gameBox.checked = 'checked';
            gameBox.name = _games[game].title;
            gameBox.value = _games[game].number;

            gameContainer.appendChild(gameName);
            gameContainer.appendChild(gameBox);

            _controlElement.appendChild(gameContainer);
        };

        $(_controlElement).find('input').on('change', function(){
            $('.userscriptBettingControlNumber_' + this.value).toggle();
            console.log('userscriptBettingControlNumber_' + this.value);
        });
    };
}