// Begin the game when the page has finished loading
$(document).ready(function() {
    Game.start();
});

io.socket.on('connect', function() {

});

ServerAdapter = {
}
