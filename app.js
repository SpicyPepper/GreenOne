var game = new Phaser.Game(800, 512, Phaser.AUTO, 'greenone', { preload: preload, create: create, update: update, render: render });
var map;
var hero;
var cursors;
var background;
var layer;
var gravityButton;
function preload() {
    game.load.tilemap('level1', 'resources/level1.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles-1', 'resources/tiles-1.png');
    game.load.image('background', 'visuals/bkgrnd_sand.png');
    game.load.spritesheet('hero', '/visuals/test_run.png', 128, 128);
}
function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.world.setBounds(0, 0, 2000, 512);
    //adds tilesprite (tilespritet necessary for parallax scrolling);
    background = game.add.tileSprite(0, 0, 1024, 512, 'background');
    map = game.add.tilemap('level1');
    //set collision
    map.addTilesetImage('tiles-1');
    map.setCollisionByExclusion([]);
    layer = map.createLayer('Tile Layer 1');
    //layer.debug = true;
    layer.resizeWorld();
    game.physics.arcade.gravity.y = 10000;
    //Phaser.Physics.Arcade.collideSpriteVsTilemapLayer(hero, 
    //hero sprite
    hero = game.add.sprite(300, 200, 'hero');
    hero.animations.add('run');
    hero.animations.play('run', 70, true);
    game.physics.enable(hero, Phaser.Physics.ARCADE);
    hero.body.bounce.y = 0.2;
    hero.body.collideWorldBounds = true;
    game.camera.follow(hero);
    cursors = game.input.keyboard.createCursorKeys();
    gravityButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    //Phaser does all scaling because of this line.
}
//mapeditor.org for tiles
function update() {
    game.physics.arcade.collide(hero, layer);
    background.tilePosition.x -= 2;
    game.camera.x += 2;
    hero.body.velocity.x = 240;
    hero.body.velocity.y = 0;
    //if (gravityButton.isDown) {
    if (gravityButton.isDown && hero.body.blocked.down || gravityButton.isDown && hero.body.blocked.up) {
        game.physics.arcade.gravity.y = game.physics.arcade.gravity.y * -1;
    }
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
    //if (hero.body.blocked.right) {
    //    hero.animations.stop();
    //}
}
function render() {
    game.debug.cameraInfo(game.camera, 500, 32); //164
    game.debug.spriteCoords(hero, 32, 32);
}
//# sourceMappingURL=app.js.map