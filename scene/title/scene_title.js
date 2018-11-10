/**
 * Created by wang.siyuan on 2017/8/26.
 */
class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)

        this.setup()
        this.mouseInput()
    }
    static new(game){
        var i = new this(game)
        return i
    }
    setup(){
        var g = this.game

        this.bg = GuaImage.new(g, 'bg')
        this.bg.w = 450
        this.bg.h = 800
        this.addElement(this.bg)

        this.title = GuaImage.new(g, 'title')
        this.title.x = (this.bg.w - this.title.w) / 2
        this.title.y = 200
        this.addElement(this.title)

        this.playBtn = GuaImage.new(g, 'playbtn')
        this.playBtn.x = (this.bg.w - this.playBtn.w) / 2
        this.playBtn.y = 300
        this.addElement(this.playBtn)
    }
    mouseInput(){
        var self = this
        var game = self.game
        game.canvas.addEventListener('mousedown', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            var mouse = {
                x : x,
                y : y,
                w : 1,
                h : 1
            }
            if(!game.start && !game.stop){
                if(collide(mouse, self.playBtn)){
                    log('play')
                    var s = SceneMain.new(game)
                    game.replaceScene(s)
                    game.start = true
                }
            }
        })
    }
}