var loadLevel = function(game, n) {
    n = n - 1
    var level = levels[n]
    var blocks = []
    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        var b = Block(game, p)
        blocks.push(b)
    }
    return blocks
}

var enableDebugMode = function(game, enable) {
    if(!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function(event){
        var k = event.key
        if (k == 'p') {
            // 暂停功能
            window.paused = !window.paused
        } else if ('1234567'.includes(k)) {
            // 为了 debug 临时加的载入关卡功能
            blocks = loadLevel(game, Number(k))
        }
    })
    // 控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function(event) {
        var input = event.target
        // log(event, input.value)
        window.fps = Number(input.value)
    })
}

var __main = function() {
    var images = {
        bg: 'img/bg_day.png',
        title: 'img/title.png',
        playbtn: 'img/btn_play.png',

        bird0: 'img/bird0.png',
        bird1: 'img/bird1.png',
        bird2: 'img/bird2.png',
        ground: 'img/land.png',
        pipe: 'img/pipe.png',

        score0: 'img/score0.png',
        score1: 'img/score1.png',
        score2: 'img/score2.png',
        score3: 'img/score3.png',
        score4: 'img/score4.png',
        score5: 'img/score5.png',
        score6: 'img/score6.png',
        score7: 'img/score7.png',
        score8: 'img/score8.png',
        score9: 'img/score9.png',

        gameover: 'img/gameover.png',
        resume: 'img/btn_resume.png',
    }
    var game = GuaGame.instance(30, images, function(g){
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)
}

__main()
