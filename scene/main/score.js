/**
 * Created by wang.siyuan on 2017/8/28.
 */
class Score{
    constructor(game) {
        this.game = game
        this.setup()
    }
    static new(game){
        var i = new this(game)
        return i
    }
    setup(){
        this.w = 0
        this.h = 0
        this.x = 0
        this.y = 0
        this.value = 0

        this.parts = []
    }
    removeLast(){
        for(var p of this.parts){
            this.scene.removeElement(p)
        }
        this.parts = []
    }
    update(){
        this.removeLast()

        var game = this.game
        var l = String(this.value).split("")
        for(var i = 0; i < l.length; i++){
            var n = 'score' + l[i]
            var p = GuaImage.new(game, n)
            p.w = 40
            p.h = 50
            p.x = 20
            p.x += p.w * i
            p.y = 20
            this.parts.push(p)
        }
    }
    draw(){
        for(var p of this.parts){
            this.scene.addElement(p)
        }
    }
}