
var game = new Phaser.Game(800, 512, Phaser.AUTO, 'greenone', { preload: preload, create: create, update: update, render: render });
var map;
var hero;
var bullets;
var bullet;
var bulletTime = 0;
var enemyChase;
var cursors;
var background;
var layer;
var gravityButton;
var floor; // boolean for is character on the floor
<<<<<<< HEAD
var hasFlipped = false; //
=======
var first;
>>>>>>> origin/master


    function preload() {

        game.load.tilemap('level1', 'resources/level1.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.tilemap('level2', 'resources/level2.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('tiles-1', 'resources/tiles-1.png');
        game.load.image('bullet', 'visuals/laser.png');
        game.load.image('background', 'visuals/bkgrnd_sand.png');
        game.load.spritesheet('hero', '/visuals/test_runner.png', 138, 128);

       // game.load.spritesheet('hero', '/visuals/test_runner.png', 138, 128);

        //game.load.spritesheet('enemyChase', '/visuals/megaenemy.png', 30, 67);

        game.load.spritesheet('enemyChase', '/visuals/megaenemy.png', 43, 64);


        game.load.spritesheet('enemyChase', '/visuals/megaenemy.png', 56.68, 67);

        
    }
    
    function create() {
        
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.setBounds(0, 0, 2000, 512);

        //adds tilesprite (tilespritet necessary for parallax scrolling);
        background = game.add.tileSprite(0, 0, 1024, 512, 'background');

        //map = game.add.tilemap('level1');
        map = game.add.tilemap('level2');
        //set collision
        map.addTilesetImage('tiles-1');

        map.setCollisionByExclusion([]);

        layer = map.createLayer('Tile Layer 1');
        //layer.debug = true;

        layer.resizeWorld();

        game.physics.arcade.gravity.y = 10000;

        bullets = game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(30, 'bullet');
        bullets.setAll('anchor.x', 1);
        bullets.setAll('anchor.y', 0);
        bullets.setAll('outOfBoundsKill', true);
        bullets.setAll('checkWorldBounds', true);

        first = true;

        //Phaser.Physics.Arcade.collideSpriteVsTilemapLayer(hero, 
        //hero sprite
        hero = game.add.sprite(50, 350, 'hero'); // Start location
        enemyChase = game.add.sprite(0, 300, 'enemyChase'); // Start location

        floor = true;
        hero.animations.add('run');
        hero.animations.play('run', 10, true);
        game.physics.enable(hero, Phaser.Physics.ARCADE);
        hero.body.bounce.y = 0.2;
        hero.body.collideWorldBounds = true;
        game.camera.follow(hero);
        hero.body.allowRotation = true;

        enemyChase.animations.add('run');
        enemyChase.animations.play('run', 10, true);
        game.physics.enable(enemyChase, Phaser.Physics.ARCADE);
        enemyChase.body.bounce.y = 0.2;
        enemyChase.body.collideWorldBounds = true;
        enemyChase.body.allowRotation = true;


        cursors = game.input.keyboard.createCursorKeys();  
        gravityButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);  
    }

    function update() {
        game.physics.arcade.collide(hero, layer);
        game.physics.arcade.collide(enemyChase, layer);
        background.tilePosition.x -= 2;
        game.camera.x += 2;
        hero.body.velocity.x = 240;
        hero.body.velocity.y = 0;
        enemyChase.body.x = hero.body.x - 100;
        enemyChase.body.velocity.y = 0;

        //if (gravityButton.isDown) {
        if (gravityButton.isDown && hero.body.blocked.down || gravityButton.isDown && hero.body.blocked.up) {
            hasFlipped = true;
            if (floor) {
                hero.anchor.setTo(1, .5); //so it flips around its middle
                hero.scale.y = 1; //facing default direction
                hero.scale.y = -1; //flipped
                enemyChase.anchor.setTo(1, .5); //so it flips around its middle
                enemyChase.scale.y = 1; //facing default direction
                enemyChase.scale.y = -1; //flipped
                floor = false;
            } else {
                hero.anchor.setTo(1, .5); //so it flips around its middle
                hero.scale.y = -1; //facing default direction
                hero.scale.y = 1; //flipped
                enemyChase.anchor.setTo(1, .5); //so it flips around its middle
                enemyChase.scale.y = -1; //facing default direction
                enemyChase.scale.y = 1; //flipped
                floor = true;
            }
            game.physics.arcade.gravity.y = game.physics.arcade.gravity.y * -1;
            first = false;
        }
        if (cursors.right.isDown) {
            fireBullet();
        }
    }

    function fireBullet() {

        //  To avoid them being allowed to fire too fast we set a time limit
        if (game.time.now > bulletTime) {
            //  Grab the first bullet we can from the pool
            bullet = bullets.getFirstExists(false);

            if (bullet) {
<<<<<<< HEAD
                //  And fire it
                //150 30
                if(hasFlipped)
                    bullet.reset(hero.x + 75, hero.y - 30);
                else 
                    bullet.reset(hero.x + 150, hero.y + 30);
                bullet.body.velocity.x = 5000;
                bulletTime = game.time.now + 200;
=======
                if (floor) {
                    if (first) {
                        //  And fire it
                        bullet.reset(hero.x + 170, hero.y + 30);
                        bullet.body.velocity.x = 10000;
                        bulletTime = game.time.now + 200;
                    } else {
                        bullet.reset(hero.x + 30, hero.y - 30);
                        bullet.body.velocity.x = 10000;
                        bulletTime = game.time.now + 200;
                    }             
                } else {
                    bullet.reset(hero.x + 30, hero.y + 5);
                    bullet.body.velocity.x = 10000;
                    bulletTime = game.time.now + 200;
                }
>>>>>>> origin/master
            }
        }

    }

    function resetBullet(bullet) {

        //  Called if the bullet goes out of the screen
        bullet.kill();

    }

    function render() {
        game.debug.cameraInfo(game.camera, 500, 32);//164
        game.debug.spriteCoords(hero, 32, 32);
    }