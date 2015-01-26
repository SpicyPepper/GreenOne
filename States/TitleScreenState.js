var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TitleState;
(function (TitleState) {
    var TitleScreenState = (function (_super) {
        __extends(TitleScreenState, _super);
        function TitleScreenState() {
            _super.apply(this, arguments);
        }
        TitleScreenState.prototype.contructor = function () {
            //super();
        };
        TitleScreenState.prototype.create = function () {
            this.titleScreenImage = this.add.sprite(0, 0, "space_background_planet");
            this.titleScreenImage.scale.setTo(this.game.width / this.titleScreenImage.width, this.game.height / this.titleScreenImage.height); //scales screen image
            this.music = this.game.add.audio("Title_DnB");
            this.music.volume = 15;
            this.music.loop = true;
            this.music.play();
        };
        return TitleScreenState;
    })(Phaser.State);
    TitleState.TitleScreenState = TitleScreenState;
})(TitleState || (TitleState = {}));
//# sourceMappingURL=TitleScreenState.js.map