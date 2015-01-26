module Game {
    export class GreenOne {
        game: Phaser.Game;
        constructor() {
            this.game = new Phaser.Game(720, 720, Phaser.AUTO, 'content', {
                create: this.create, preload: this.preload
            });
        }

        preload() {
            //Graphics
            this.game.load.image("space_background", "/Visuals/Space_background.jpeg");
            this.game.load.image("space_background_planet", "/Visuals/Space_background_planet.png");
            this.game.load.image("title", "/Visuals/Title.png");
            this.game.load.image("pepper", "/Visuals/Spicy_Pepper.gif"); 

            //spritesheets
          //  this.game.load.atlasXML("Scroller_enemy_walk", "Visuals/Scroller_enemy_walk.png"); //used for animating sprite sheets
           // this.game.load.atlasXML("Scroller_enemy_idle", "Visuals/Scroller_enemy_idle.png");

            // audio
            this.game.load.audio("Title_DnB", "Audio/Title_DnB.mp3");
        }

        create() {
            this.game.state.add("TitleScreenState", TitleState.TitleScreenState, true); //true runs this state right away. it's running when it's creating
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; //Phaser does all scaling because of this line.
        }
    }
}

window.onload = () => {
    var game = new Game.GreenOne();
}