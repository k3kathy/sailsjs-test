// Begin the game when the page has finished loading
$(document).ready(function() {
    Game.start();
});

io.socket.on('connect', function() {
  io.socket.get('/player', function(resData, jwres) {
    console.log(resData);
    $.each(resData, function(key, val) {
      console.log(key + ', ' + val);
      GameAdapter.addNewPlayer({'x': val.xLoc, 'y': val.yLoc}, val.id);
    });
  });

  var x = Math.floor(Math.random() * Game.map_grid.width);
  var y = Math.floor(Math.random() * Game.map_grid.height);

  ServerAdapter.addNewPlayer({'x': x,'y': y});
});

io.socket.on('player', function(event) {
  console.log(event);
  GameAdapter.addNewPlayer({'x': event.data.xLoc, 'y': event.data.yLoc}, event.data.id);
});

ServerAdapter = {
  addNewPlayer: function(loc) {
    io.socket.post('/player/create',
        {xLoc: loc.x, yLoc: loc.y},
        function(data, jwres) {
          GameAdapter.addNewPlayer({'x': data.xLoc, 'y': data.yLoc}, data.id);
        });
  }
}
