module Game {
    export class GreenOne {
        game: Phaser.Game;
        constructor() {
            this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {
                create: this.create, preload: this.preload
            });
        }

        preload() {
        }

        create() {
        }
    }
}

window.onload = () => {
    var game = new Game.GreenOne();
}