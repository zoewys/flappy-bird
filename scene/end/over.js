/**
 * Created by zoew on 2017/8/29
 */
class GameOver extends GuaImage {
    constructor(game) {
        super(game, 'gameover')

        this.game = game
        this.setup()
    }
    setup(){
        this.x = 100
        this.y = 200
    }
}