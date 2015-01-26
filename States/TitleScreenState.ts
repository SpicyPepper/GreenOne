module TitleState {
    export class TitleScreenState extends Phaser.State {
        game: Phaser.Game;
        music: Phaser.Sound;
        titleScreenImage: Phaser.Sprite;

        contructor() { //not needed. just a shell.
            //super();
        }

        create() {
            this.titleScreenImage = this.add.sprite(0, 0, "space_background_planet");
            this.titleScreenImage.scale.setTo(
                this.game.width / this.titleScreenImage.width,
                this.game.height / this.titleScreenImage.height); //scales screen image

            this.music = this.game.add.audio("Title_DnB");
            this.music.volume = 15;
            this.music.loop = true;
            this.music.play();
        }
    }
}