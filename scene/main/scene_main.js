/**
 * Created by wang.siyuan on 2017/8/26.
 */
class SceneMain extends GuaScene {
    constructor(game) {
        super(game)

        this.setup()
        this.setupInputs()
    }
    static new(game){
        var i = new this(game)
        return i
    }
    setup(){
        var game = this.game
        this.stop = false
        // this.score = 0

        this.bg = GuaImage.new(game, 'bg')
        this.bg.w = game.canvas.width
        this.bg.h = game.canvas.height
        this.addElement(this.bg)


        this.pipe = Pipes.new(game)
        this.addElement(this.pipe)

        var b = Bird.new(game)
        b.x = 100
        b.y = 200
        b.w = 60
        b.h = 60
        this.bird = b
        this.addElement(b)


        this.grounds = []
        for(var i = 0; i < 10; i++){
            var g = GuaImage.new(game, 'ground')
            g.x = i * 19
            g.y = game.canvas.height - g.h
            this.addElement(g)
            this.grounds.push(g)
        }
        this.skipCount = 4

        this.score = Score.new(game)
        this.addElement(this.score)

    }
    update(){
        super.update()

        // log('score ', this.score)

        this.pipe.stop = this.stop
        this.game.stop = this.stop
        this.game.start = !this.stop

        if(!this.stop){
            this.skipCount--
            this.offset = -5
            if(this.skipCount == 0){
                this.skipCount = 4
                this.offset = 15
            }
            for(var i = 0; i < 10; i++){
                var g = this.grounds[i]
                    g.x += this.offset

            }
        }else{
            if(!this.gameover){
                this.gameover = GameOver.new(this.game)
                this.addElement(this.gameover)
            }
            if(!this.resumeBtn){
                this.resumeBtn = GuaImage.new(this.game, 'resume')
                this.resumeBtn.x = this.gameover.x + this.gameover.w + 10
                this.resumeBtn.y = this.gameover.y
                this.resumeBtn.w = 52
                this.resumeBtn.h = 56
                this.addElement(this.resumeBtn)
            }
        }

    }
    setupInputs(){
        var self = this
        var game = this.game
        var b = this.bird

        game.registerAction('a', function(keyStatus){
            if(keyStatus == 'down'){
                b.flipX = true
                b.move(-3)
            }
        })

        game.registerAction('d', function(keyStatus){
            if(keyStatus == 'down'){
                b.flipX = false
                b.move(3)
            }
        })

        game.registerAction('j', function(){
            if(!self.stop){
                b.jump()
            }
        })

        game.canvas.addEventListener('mousedown', function(event) {
            if(!self.stop){
                b.jump()
            }else if(!game.start){
                var x = event.offsetX
                var y = event.offsetY
                var mouse = {
                    x : x,
                    y : y,
                    w : 1,
                    h : 1
                }
                if(collide(mouse, self.resumeBtn)){
                    log('resume')
                    game.start = false
                    game.stop = false
                    var s = SceneTitle.new(game)
                    self.game.replaceScene(s)
                }
            }
        })
    }
}
