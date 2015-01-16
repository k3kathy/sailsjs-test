Crafty.c('Grid', {
    init: function() {
        this.attr({
            w: Game.map_grid.tile.width,
            h: Game.map_grid.tile.height
        })
    },

    at: function(x, y) {
        if (x === undefined && y === undefined) {
            return { x: this.x/Game.map_grid.tile.width, y: this.y/Game.map_grid.tile.height }
        } else {
            this.attr({ x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.height });
            return this;
        }
    }
});

Crafty.c('Actor', {
    init: function() {
        this.requires('2D, Canvas, Grid');
    },
});

Crafty.c('Platform', {
    init: function() {
        this.requires('Actor, Color')
            .attr({
                w: Game.width(),
                h: Game.map_grid.tile.height
            })
            .color('red');
    }
});

Crafty.c('Edge', {
    init: function() {
        this.requires('Actor, Color')
            .attr({
                w: Game.map_grid.tile.width,
                h: Game.height()
            })
            .color('red');
    }
});

Crafty.c('PlayerCharacter', {
    init: function() {
        this.requires('Actor, Fourway, Color, Gravity, Collision')
            .fourway(4)
            .color('blue')
            .gravity('Platform');
    }
});
