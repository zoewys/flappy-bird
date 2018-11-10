class GuaScene {
    constructor(game) {
        this.game = game
        this.elements = []
    }
    static new(game) {
        var i = new this(game)
        return i
    }
    draw() {
        for(var i = 0; i < this.elements.length; i++){
            var e = this.elements[i]
            e.draw()
            // this.game.drawImage(e)
        }
    }
    addElement(img){
        img.scene = this
        img.key = this.elements.length
        this.elements.push(img)
    }
    removeElement(img){
        var index = -1
        for(var i = 0; i < this.elements.length; i++){
            var e = this.elements[i]
            if(e.key == img.key){
                index = i
            }
        }
        this.elements.splice(index, 1)
    }
    update() {
        for(var i = 0; i < this.elements.length; i++){
            var e = this.elements[i]
            e.update()
        }
    }
}
