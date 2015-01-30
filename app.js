var game = new Phaser.Game(800, 512, Phaser.AUTO, 'greenone', true, false, false, Phaser.Physics.ARCADE);
var hero;
var cursors;
var background;
var mainState = {
    preload: function () {
        game.load.image('background', 'visuals/bkgrnd_sand.png');
        game.load.spritesheet('hero', '/visuals/test_run.png', 128, 128);
    },
    create: function () {
        game.world.setBounds(0, 0, 800, 512);
        //adds tilesprite (tilespritet necessary for parallax scrolling);
        background = game.add.tileSprite(0, 0, 1024, 512, 'background');
        //hero sprite
        hero = game.add.sprite(300, 200, 'hero');
        hero.animations.add('run');
        hero.animations.play('run', 70, true);
        game.physics.enable(hero, Phaser.Physics.ARCADE);
        hero.body.collideWorldBounds = true;
        game.camera.follow(hero);
        cursors = game.input.keyboard.createCursorKeys();
        //Phaser does all scaling because of this line.
    },
    //mapeditor.org for tiles
    update: function () {
        background.tilePosition.x -= 2;
        hero.body.velocity.x = 0;
        hero.body.velocity.y = 0;
        if (cursors.left.isDown) {
            hero.body.velocity.x = -240;
        }
        else if (cursors.right.isDown) {
            hero.body.velocity.x = 240;
        }
        if (cursors.up.isDown) {
            hero.body.velocity.y = -240;
        }
        else if (cursors.down.isDown) {
            hero.body.velocity.y = 240;
        }
    },
    render: function () {
        game.debug.cameraInfo(game.camera, 500, 32);
        game.debug.spriteCoords(hero, 32, 32);
    },
};
game.state.add('main', mainState);
game.state.start('main');
//# sourceMappingURL=app.js.map