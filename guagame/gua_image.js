/**
 * Created by wang.siyuan on 2017/8/19.
 */
class GuaImage {
    constructor(game, name) {
        this.game = game
        this.texture = game.textureByName(name)
        this.x = 0
        this.y = 0
        this.w = this.texture.width
        this.h = this.texture.height
        this.flipY = false
        this.rotation = 0
    }
    static new(game, name) {
        var i = new this(game, name)
        return i
    }
    draw() {
        this.game.drawImage(this)
    }
    update() {

    }
}