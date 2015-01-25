var Game;
(function (Game) {
    var GreenOne = (function () {
        function GreenOne() {
            this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {
                create: this.create,
                preload: this.preload
            });
        }
        GreenOne.prototype.preload = function () {
        };
        GreenOne.prototype.create = function () {
        };
        return GreenOne;
    })();
    Game.GreenOne = GreenOne;
})(Game || (Game = {}));
window.onload = function () {
    var game = new Game.GreenOne();
};
//# sourceMappingURL=app.js.map