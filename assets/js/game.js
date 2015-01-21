Game = {

    map_grid: {
        width: 32,
        height: 24,
        tile: {
            width: 16,
            height: 16
        }
    },

    width: function() {
        return this.map_grid.width * this.map_grid.tile.width;
    },


    height: function() {
        return this.map_grid.height * this.map_grid.tile.height;
    },

    start: function() {

      
      
        Crafty.sprite(41, 36, '/images/2ZombieSpriteSheet.png', {
          spr_forward:    [0, 0],
          spr_right:    [0, 1],
          spr_back: [0, 2],
          spr_left:  [0, 3]
        });



        Crafty.init(Game.width(), Game.height());
        Crafty.background('green');

        Crafty.e('Platform').at(0, this.map_grid.height - 1);
        Crafty.e('Edge').at(-1, 0);
        Crafty.e('Edge').at(this.map_grid.width + 1, 0);

    }
}

GameAdapter = {
  addNewPlayer: function(loc, id) {
    console.log('Adding player at: (' + loc.x + ', ' + loc.y + ')');
    Crafty.e('PlayerCharacter').at(loc.x, loc.y);
  },

  addMyPlayer: function(loc,id) {
    console.log('Add my player at : (' + loc.x + ', ' + loc.y + ')');
    Crafty.e('MyPlayer').at(loc.x, loc.y);
  }
  
}
