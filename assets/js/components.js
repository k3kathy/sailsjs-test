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
        this.requires('Actor, Gravity, Collision, spr_right')
            .gravity('Platform');
    }
});

Crafty.c('MyPlayer', {
    init: function() {
        this.requires('PlayerCharacter, Twoway, SpriteAnimation')
            .twoway(4,8)

            // These next lines define our four animations
      //  each call to .animate specifies:
      //  - the name of the animation
      //  - the x and y coordinates within the sprite
      //     map at which the animation set begins
      //  - the number of animation frames *in addition to* the first one
      .reel('PlayerMovingUp', 600, 0, 0, 4)
      .reel('PlayerMovingRight', 600, 0, 1, 4)
      .reel('PlayerMovingDown', 600, 0, 2, 4)
      .reel('PlayerMovingLeft', 600, 0, 3, 4);
 
    // Watch for a change of direction and switch animations accordingly
    var animation_speed = 4;
    this.bind('NewDirection', function(data) {
      if (data.x > 0) {
        this.animate('PlayerMovingRight', animation_speed, -1);
      } else if (data.x < 0) {
        this.animate('PlayerMovingLeft', animation_speed, -1);
      } else if (data.y > 0) {
        this.animate('PlayerMovingDown', animation_speed, -1);
      } else if (data.y < 0) {
        this.animate('PlayerMovingUp', animation_speed, -1);
      } else {
        this.pauseAnimation();
      }
    });
    }
});
