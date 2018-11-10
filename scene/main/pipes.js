/**
 * Created by zoew on 2017/8/27
 */
class Pipes{
    constructor(game){
        this.game = game

        this.pipes = []
        this.pipeSpace = 300
        this.pipeXSpace = 200
        this.columnsOfPipe = 4
        for(var i = 0; i < this.columnsOfPipe; i++){
            var p1 = GuaImage.new(game, 'pipe')
            p1.flipY = true
            p1.score = 0
            p1.x = 500 + i * this.pipeXSpace
            var p2 = GuaImage.new(game, 'pipe')
            p2.x = p1.x
            p2.score = 1
            this.resetPipesPosition(p1, p2)
            this.pipes.push(p1)
            this.pipes.push(p2)
        }
        this.stop = false
    }
    static new(game){
        var i = new this(game)
        return i
    }
    resetPipesPosition(p1, p2){
        p1.y = randomBetween(-250, -50)
        p2.y = p1.y + p1.h + this.pipeSpace
    }
    update(){
        for(var p of this.pipes){
            if(!this.stop){
                p.x -= 5
                if(p.x < -100){
                    p.x = this.columnsOfPipe * this.pipeXSpace
                    p.score = p.flipY ? 0 : 1
                }
            }
        }
    }
    draw(){
        var context = this.game.context
        for(var p of this.pipes){

            context.save()

            var w2 = p.w / 2
            var h2 = p.h / 2
            context.translate(p.x + w2, p.y + h2)
            var scaleX = p.flipX ? -1 : 1
            var scaleY = p.flipY ? -1 : 1
            context.scale(scaleX, scaleY)
            context.rotate(p.rotation * Math.PI / 180)
            context.translate(-w2 , -h2)
            context.drawImage(p.texture, 0, 0)

            context.restore()
        }
    }
}