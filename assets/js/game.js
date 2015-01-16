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
        Crafty.init(Game.width(), Game.height());
        Crafty.background('green');

        Crafty.e('Platform').at(0, this.map_grid.height - 1);
        Crafty.e('Edge').at(-1, 0);
        Crafty.e('Edge').at(this.map_grid.width + 1, 0);

        Crafty.e('PlayerCharacter').at(5, 5);
    }
}
