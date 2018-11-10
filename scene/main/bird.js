/**
 * Created by zoew on 2017/8/27
 */
class Bird extends GuaAnimation{
    constructor(game){
        super(game, 'bird')
        this.frameCount = 3
        this.frameIndex = 0
    }
    update(){
        var scene = this.scene
        this.y += this.vy
        this.vy += this.gy*0.2
        //地面高
        var h = 448
        if(this.y > h){
            this.y = h
            scene.stop = true
        }

        if(this.rotation < 45){
            this.rotation += 5
        }
        super.update()

        var pipe = this.scene.pipe
        for(var p of pipe.pipes){
            //判断是否和管子相撞
            if(collide(this, p)){
                scene.stop = true
            }
            //判断是否穿过管子
            if(this.x > p.x + p.w){
                log('p ', p.score)
                scene.score.value += p.score
                p.score = 0
            }
        }


    }
    draw(){
        super.draw()
    }
    move(x){
        this.x += x
    }
    jump(){
        this.rotation = -45
        this.vy = -10
    }
}