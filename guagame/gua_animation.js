/**
 * Created by wang.siyuan on 2017/8/26.
 */
class GuaAnimation{
    constructor(game, name) {
        this.game = game

        this.frames = []
        this.frameCount = 3
        this.frameIndex = 0
        for(var i = 0; i < this.frameCount; i++){
            var n = name + i
            var t = game.textureByName(n)
            this.frames.push(t)
        }
        this.texture = this.frames[this.frameIndex]
        this.w = this.texture.width
        this.h = this.texture.height
        // 角度
        this.rotation = 0
        this.flipX = false
        this.flipY = false

        //重力和加速度
        this.gy = 10
        this.vy = 0

    }
    static new(game, name) {
        var i = new this(game, name)
        return i
    }
    draw() {
        var context = this.game.context
        context.save()

        var w2 = this.w / 2
        var h2 = this.h / 2
        context.translate(this.x + w2, this.y + h2)
        var scaleX = this.flipX ? -1 : 1
        var scaleY = this.flipY ? -1 : 1
        context.scale(scaleX, scaleY)
        context.rotate(this.rotation * Math.PI / 180)
        context.translate(-w2 , -h2)
        context.drawImage(this.texture, 0, 0)

        context.restore()

    }
    update() {
        this.frameCount--
        if(this.frameCount < 0){
            this.frameCount = 3
            this.frameIndex = (this.frameIndex + 1) % this.frames.length
            this.texture = this.frames[this.frameIndex]
        }
    }
}