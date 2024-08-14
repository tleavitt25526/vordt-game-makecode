namespace SpriteKind {
    export const BossShell = SpriteKind.create()
    export const BossDefault = SpriteKind.create()
    export const Pillar = SpriteKind.create()
    export const IFrame = SpriteKind.create()
    export const Grab = SpriteKind.create()
    export const BossHurt = SpriteKind.create()
    export const explode = SpriteKind.create()
}
statusbars.onStatusReached(StatusBarKind.EnemyHealth, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 5, function (status) {
    if (bossActive && !(phase2)) {
        cutscene = true
        phase2 = true
        timer.after(3000, function () {
            animation.runMovementAnimation(
            CrabBoss,
            animation.animationPresets(animation.flyToCenter),
            1000,
            false
            )
            animation.runImageAnimation(
            CrabBoss,
            [img`
                .............cc.....
                .........cccc63c....
                ........c633336c....
                ....cc.c6cc33333c...
                ...b55c6c55c33333c..
                ...ff5c6c5ff33333c..
                ...ff5c6c5ff6333cc..
                ...b553c355c6666cc..
                ....b55355c333333c..
                ...cc55555bcc3333c..
                ..c5545554b55c33c...
                ..b54b4444bb5cbb....
                ..c455b4b5554c45b...
                ..c555c4c555c4c5c...
                ..c5555c5555c4c5c...
                ...ccccccccc..ccc...
                `,img`
                ....................
                ....................
                .............cc.....
                .........cccc63c....
                ........c633336c....
                ....cc.c6cc33333c...
                ...c55c6c55c33333c..
                ...ff5c6c5ff6333cc..
                ...ff53c35ff6666cc..
                ....b55355c333333c..
                ...cc55555bcc3333c..
                ..c5545554b55c33c...
                ..b54b4444bb5cbb....
                ..c555c4c555c4c5c...
                ..c5555c5555c4c5c...
                ...ccccccccc..ccc...
                `,img`
                ....................
                .............cc.....
                .........cccc63c....
                ........c633336c....
                .......c66333333c...
                ......c6666333333c..
                ...ccccc66cc33333c..
                ..b55c33cc55c333cc..
                ..ff5ccc3c5ff666cc..
                ..ff5ccccc5ff3333c..
                ...b553c355c33333c..
                ...c4455554cc333c...
                ..c4554444554cbb....
                ..c555c4c555c4c5c...
                ..c5555c5555c4c5c...
                ...ccccccccc..ccc...
                `,img`
                ....................
                ....................
                ....................
                ....................
                .............cc.....
                ........ccccc63c....
                .......c6633336cc...
                ......c6666333336c..
                ......c6666633333c..
                ....ccc6666663333c..
                ...c333c66666666cc..
                ..c6ccc3cc6663336c..
                ..ccccccccc633333c..
                ..c554cc554c66ccc...
                ..c455c555c666c.....
                ...ccccccccccc......
                `,img`
                ....................
                ....................
                ....................
                ....................
                ...........cc.......
                ......ccccc63c......
                .....c6633336cc.....
                ....c6666333336c....
                ....c6666633333c....
                ..ccc6666663333c....
                .c333c66666666cc....
                c6ccc3cc6663336c....
                ccccccccc633333c....
                c554cc554c66ccc.....
                c455c555c666c.......
                .ccccccccccc........
                `,img`
                ....................
                ....................
                ....................
                ....................
                .............cc.....
                ........ccccc63c....
                .......c6633336cc...
                ......c6666333336c..
                ......c6666633333c..
                ....ccc6666663333c..
                ...c333c66666666cc..
                ..c6ccc3cc6663336c..
                ..ccccccccc633333c..
                ..c224cc224c66ccc...
                ..c455c555c666c.....
                ...ccccccccccc......
                `,img`
                ....................
                ....................
                ....................
                ....................
                ...............cc...
                ..........ccccc63c..
                .........c6633336cc.
                ........c6666333336c
                ........c6666633333c
                ......ccca666663333c
                .....c333caa666666cc
                ....caccc3cca663336c
                ....ccccccccca33333c
                ....c224cc224ca6ccc.
                ....c425c522ca66c...
                .....ccccccccccc....
                `,img`
                ....................
                ....................
                ....................
                ....................
                .............cc.....
                ........ccccca3c....
                .......c6a3333acc...
                ......c666633333ac..
                ......ca666633333c..
                ....cccaa6a663333c..
                ...c333caaa6a666cc..
                ..caccc3ccaa63336c..
                ..ccccccccca33333c..
                ..c224cc224caaccc...
                ..c422c222caaac.....
                ...ccccccccccc......
                `,img`
                ....................
                .............cc.....
                .........cccca3c....
                ........caa333ac....
                .......caaa33333c...
                ......caaaaa33333c..
                ...cccccaacca3333c..
                ..b22c33cc22caaacc..
                ..112ccc3c211aaacc..
                ..112ccccc2113333c..
                ...b223c322ca3333c..
                ...c4422224cca33c...
                ..c4224444224cbb....
                ..c222c4c222c4c2c...
                ..c2222c2222c4c2c...
                ...ccccccccc..ccc...
                `,img`
                ....................
                ....................
                .............cc.....
                .........cccca3c....
                ........ca3333ac....
                ....cc.cacc33333c...
                ...c22cac22c33333c..
                ...112cac211a333cc..
                ...1123c3211aaaacc..
                ....b22322c333333c..
                ...cc22222bcc3333c..
                ..c2242224b22c33c...
                ..b24b4444bb2cbb....
                ..c222c4c222c4c2c...
                ..c2222c2222c4c2c...
                ...ccccccccc..ccc...
                `],
            200,
            false
            )
            timer.after(3000, function () {
                cutscene = false
                bossState = 0
                effects.blizzard.startScreenEffect()
            })
        })
    }
})
function spitBeam () {
    animation.runImageAnimation(
    CrabBoss,
    assets.animation`spitAnim`,
    500,
    false
    )
    timer.after(1500, function () {
        for (let index = 0; index < 20; index++) {
            spitBall = sprites.create(img`
                . 8 8 . 
                8 9 9 8 
                8 9 9 8 
                . 8 8 . 
                `, SpriteKind.Enemy)
            spitBall.setPosition(CrabBoss.x, CrabBoss.y)
            spriteutils.setVelocityAtAngle(spitBall, spriteutils.angleFrom(spitBall, mySprite), 100)
            spitBall.setFlag(SpriteFlag.DestroyOnWall, true)
            pause(50)
        }
        bossChase()
    })
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.BossHurt, function (sprite, otherSprite) {
    otherSprite.setKind(SpriteKind.BossDefault)
    statusbar.value += -5
})
function bossChase () {
    CrabBoss.follow(mySprite, 100)
    CrabBoss.setKind(SpriteKind.BossHurt)
    animation.runImageAnimation(
    CrabBoss,
    assets.animation`chaseAnim`,
    100,
    true
    )
    timer.after(800, function () {
        CrabBoss.follow(mySprite, 0)
        CrabBoss.setKind(SpriteKind.BossDefault)
        animation.stopAnimation(animation.AnimationTypes.All, CrabBoss)
        bossState = 0
    })
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(cutscene)) {
        spriteutils.setVelocityAtAngle(mySprite, spriteutils.angleFrom(mySprite, CrabBoss), 150)
        timer.after(100, function () {
            mySprite.setVelocity(0, 0)
            if (mySprite.overlapsWith(CrabBoss)) {
                if (bossBar) {
                    bossBar.value += -1
                }
            }
        })
    }
})
function chorus () {
	
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Grab, function (sprite, otherSprite) {
    otherSprite.setKind(SpriteKind.BossDefault)
    bossState = -2
    controller.moveSprite(sprite, 0, 0)
    sprite.setVelocity(0, 0)
    timer.after(250, function () {
        mySprite.setPosition(CrabBoss.x, CrabBoss.y)
        scene.cameraShake(4, 100)
        statusbar.value += -25
        controller.moveSprite(mySprite, 75, 75)
        bossState = 0
    })
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(bossState == -1) && !(cutscene)) {
        dashMem = spriteutils.heading(mySprite)
        mySprite.setKind(SpriteKind.IFrame)
        controller.moveSprite(mySprite, 0, 0)
        spriteutils.setVelocityAtAngle(mySprite, dashMem, 150)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . 
            . . . . d d d . 
            . . . f d d d d 
            . . d d d f . . 
            . c b b b b c . 
            e e b b b c c . 
            . e e e e c . . 
            . . e . . e . . 
            `,img`
            . . . e . . . . 
            e e . b b c c . 
            e e b b b . d d 
            . e b b b f d d 
            . . b b d d d d 
            . . c b f d d . 
            . . c . d d d . 
            . . . . . . . . 
            `,img`
            . . . . e . . . 
            . . . . e e e . 
            . . . . c b e e 
            . . . c b b . . 
            . . b b b b c c 
            . d d d b b . . 
            . f d d d d . . 
            . . d f d . . . 
            `],
        40,
        false
        )
        timer.after(200, function () {
            controller.moveSprite(mySprite, 75, 75)
            mySprite.setKind(SpriteKind.Player)
            mySprite.setImage(img`
                . . . . . . . . 
                . . d d d d . . 
                . . d f d f . . 
                . . d d d d . . 
                . c b b b b c . 
                . c b b b b c . 
                . . e e e e . . 
                . . e . . e . . 
                `)
        })
    }
})
statusbars.onStatusReached(StatusBarKind.EnemyHealth, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 100, function (status) {
    bossBarAnim = false
})
sprites.onCreated(SpriteKind.Pillar, function (sprite) {
    sprite.y += -35
    animation.runImageAnimation(
    sprite,
    [img`
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        .....88.........
        .....868........
        ......868.......
        .......868......
        .......866......
        .......8676.....
        ......67656.....
        .....656758.....
        ....65775868....
        ....65656868....
        ....87678868....
        ....87678668....
        ....87677668....
        ....8776768.....
        .....87678......
        ......8768......
        `,img`
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        .........888....
        .......88668....
        ......86688.....
        .....8768.......
        ....8778........
        ....8778........
        ...8778.........
        ...8578.........
        ...8558.........
        ...8758......88.
        ...87678....878.
        ...87678...878..
        ....87678.8768..
        ....876768678...
        .....87668778...
        ......8668766...
        .......8687678..
        ........8667678.
        ........8685756.
        ....88..86665756
        ...868..86685656
        ..8668..86687678
        .8668..868687678
        .868..8688667678
        8768.88886876778
        8768.8888877678.
        876688888676778.
        87676888668778..
        .876776868668...
        .87766778868....
        ..877667688.....
        ...86767788.....
        `,img`
        ....88..........
        ....868.........
        .....868........
        ......868.......
        .......868......
        .......868......
        ........868.....
        ........868.....
        ........8668....
        ........8668....
        ........8668....
        ........8768....
        ........8768....
        .......86768....
        .......87768....
        .......6778.....
        ......67676.....
        ......67676.....
        .....65656......
        ....655656......
        ....65656.......
        ...876756.......
        ..876776...8....
        ..67678....8....
        .876668...88....
        .67868....86....
        .86868...876....
        868668..8768....
        86868..87678....
        86868..8766.....
        86868.87678.....
        86878.8766......
        8787887678......
        876768768.88....
        876778668.678...
        876676668..678..
        .676778668..678.
        .8766778668.6778
        .877667688885678
        ..87667768885656
        ..86766778887856
        ...8776677876876
        ....877667768668
        .....87766768668
        ......877677668.
        .......87667668.
        ........876768..
        ........87688...
        `,img`
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        .........888....
        .......88668....
        ......86688.....
        .....8768.......
        ....8778........
        ....8778........
        ...8778.........
        ...8578.........
        ...8558.........
        ...8758......88.
        ...87678....878.
        ...87678...878..
        ....87678.8768..
        ....876768678...
        .....87668778...
        ......8668766...
        .......8687678..
        ........8667678.
        ........8685756.
        ....88..86665756
        ...868..86685656
        ..8668..86687678
        .8668..868687678
        .868..8688667678
        8768.88886876778
        8768.8888877678.
        876688888676778.
        87676888668778..
        .876776868668...
        .87766778868....
        ..877667688.....
        ...86767788.....
        `,img`
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        .....88.........
        .....868........
        ......868.......
        .......868......
        .......866......
        .......8676.....
        ......67656.....
        .....656758.....
        ....65775868....
        ....65656868....
        ....87678868....
        ....87678668....
        ....87677668....
        ....8776768.....
        .....87678......
        ......8768......
        `],
    200,
    false
    )
    timer.after(500, function () {
        sprite.setKind(SpriteKind.Enemy)
    })
    timer.after(1000, function () {
        sprites.destroy(sprite)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.explode, function (sprite, otherSprite) {
    statusbar.value += -1
    bossBar.value += 0.1
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    if (bossActive) {
        game.gameOver(true)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.BossShell, function (sprite, otherSprite) {
    CrabBoss.setKind(SpriteKind.BossDefault)
    scene.centerCameraAt(0, 0)
    scene.cameraShake(4, 1000)
    pause(1000)
    bossBar = statusbars.create(140, 4, StatusBarKind.EnemyHealth)
    bossBar.value = 0
    bossBar.setColor(2, 15, 12)
    bossBar.setBarBorder(1, 15)
    bossBar.setPosition(80, 217)
    animation.runMovementAnimation(
    bossBar,
    animation.animationPresets(animation.easeUp),
    1000,
    false
    )
    pause(1200)
    bossBarAnim = true
    chorus()
    animation.runImageAnimation(
    CrabBoss,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . c c . . 
        . . . . . . . c c c c c 6 3 c . 
        . . . . . . c 6 6 3 3 3 6 6 c . 
        . . . . . c 6 6 6 3 3 3 3 3 3 c 
        . . . . c 6 6 6 6 3 3 3 3 3 3 c 
        . . c c c 6 6 6 6 6 3 3 3 3 3 c 
        . c 3 3 3 c 6 6 6 6 6 3 3 3 3 c 
        c 3 c c c 3 c 6 6 6 6 6 3 3 c c 
        c 6 c c c c 3 c 6 6 6 6 6 6 c c 
        c 6 c c c c 6 6 c 6 6 3 3 3 3 c 
        . c 6 c c c c 6 c 6 3 3 3 3 6 c 
        . . c 6 c c c c c 6 3 3 3 6 c . 
        . . . c c c c c c c c c c c . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . c c . . . 
        . . . . . . c c c c c 6 3 c . . 
        . . . . . c 6 6 3 3 3 3 6 c c . 
        . . . . c 6 6 6 6 3 3 3 3 3 6 c 
        . . . . c 6 6 6 6 6 3 3 3 3 3 c 
        . . c c c 6 6 6 6 6 6 3 3 3 3 c 
        . c 3 3 3 c 6 6 6 6 6 6 6 6 c c 
        c 6 c c c 3 c c 6 6 6 3 3 3 6 c 
        c c c c c c c c c 6 3 3 3 3 3 c 
        c 5 5 4 c c 5 5 4 c 6 6 c c c . 
        c 4 5 5 c 5 5 5 c 6 6 6 c . . . 
        . c c c c c c c c c c c . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . c c . . . 
        . . . . . . . c c c c 6 3 c . . 
        . . . . . . c 6 3 3 3 3 6 c . . 
        . . . . . c 6 6 3 3 3 3 3 3 c . 
        . . . . c 6 6 6 6 3 3 3 3 3 3 c 
        . c c c c c 6 6 c c 3 3 3 3 3 c 
        b 5 5 c 3 3 c c 5 5 c 3 3 3 c c 
        f f 5 c c c 3 c 5 f f 6 6 6 c c 
        f f 5 c c c c c 5 f f 3 3 3 3 c 
        . b 5 5 3 c 3 5 5 c 3 3 3 3 3 c 
        . c 4 4 5 5 5 5 4 c c 3 3 3 c . 
        c 4 5 5 4 4 4 4 5 5 4 c b b . . 
        c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
        c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
        . c c c c c c c c c . . c c c . 
        `,img`
        . . . . . . . . . . . c c . . . 
        . . c c . c c c c 3 c 6 3 c . . 
        . f f 5 c 6 c 5 f f 3 3 6 c . . 
        . f f 5 c 6 c 5 f f 3 3 3 3 c . 
        . b 5 5 5 c 5 5 5 c 3 3 3 3 3 c 
        . b 5 5 5 c 5 5 5 c 6 3 3 3 3 c 
        . b b 5 5 3 5 5 c 3 6 3 3 3 c c 
        . b b 5 5 3 5 5 c 3 3 3 6 6 c c 
        . c c 5 5 5 5 5 b c c 3 3 3 3 c 
        c 5 5 4 5 5 5 4 b 5 5 c 3 3 3 c 
        b 5 4 b 4 4 4 4 b b 5 c 3 3 c . 
        c 4 5 5 b 4 b 5 5 5 4 c b b . . 
        c 5 5 5 c 4 c 5 5 5 c 4 4 5 b . 
        c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
        c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
        . c c c c c c c c c . . c c c . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . c c . . . 
        . . . . . . . c c c c 6 3 c . . 
        . . . . . . c 6 3 3 3 3 6 c . . 
        . . c c . c 6 c c 3 3 3 3 3 c . 
        . c 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 6 3 3 3 c c 
        . f f 5 3 c 3 5 f f 6 6 6 6 c c 
        . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
        . c c 5 5 5 5 5 b c c 3 3 3 3 c 
        c 5 5 4 5 5 5 4 b 5 5 c 3 3 c . 
        b 5 4 b 4 4 4 4 b b 5 c b b . . 
        c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
        c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
        . c c c c c c c c c . . c c c . 
        `,img`
        . . . . . . . . . . . c c . . . 
        . . . . . . . c c c c 6 3 c . . 
        . . . . . . c 6 3 3 3 3 6 c . . 
        . . c c . c 6 c c 3 3 3 3 3 c . 
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 6 3 3 3 c c 
        . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
        . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
        . c c 5 5 5 5 5 b c c 3 3 3 3 c 
        c 5 5 4 5 5 5 4 b 5 5 c 3 3 c . 
        b 5 4 b 4 4 4 4 b b 5 c b b . . 
        c 4 5 5 b 4 b 5 5 5 4 c 4 5 b . 
        c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
        c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
        . c c c c c c c c c . . c c c . 
        `],
    500,
    false
    )
    while (bossBarAnim) {
        bossBar.value += 1
        pause(20)
    }
    bossActive = true
    bossState = 0
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.BossShell)
    sprites.destroyAllSpritesOfKind(SpriteKind.StatusBar)
    sprites.destroyAllSpritesOfKind(SpriteKind.BossDefault)
    sprites.destroyAllSpritesOfKind(SpriteKind.Pillar)
    sprites.destroyAllSpritesOfKind(SpriteKind.Grab)
    sprites.destroyAllSpritesOfKind(SpriteKind.BossHurt)
    cutscene = true
    tiles.setCurrentTilemap(tilemap`level10`)
    scene.setBackgroundColor(15)
    controller.moveSprite(mySprite, 0, 0)
    timer.after(1000, function () {
        game.reset()
    })
})
sprites.onCreated(SpriteKind.explode, function (sprite) {
    timer.after(500, function () {
        tiles.placeOnRandomTile(sprite, assets.tile`myTile1`)
        animation.runImageAnimation(
        sprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . . . 3 1 3 . . . . . . 
            . . . . . . 2 3 1 3 2 . . . . . 
            . . . . . . 2 1 1 1 2 . . . . . 
            . . . . . . 2 1 1 1 3 . . . . . 
            . . . . . . 3 1 1 1 3 . . . . . 
            . . . . . . 3 1 1 1 3 . . . . . 
            . . . . . . 3 1 1 1 3 . . . . . 
            . . . . . . 2 3 1 3 2 . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 3 3 3 3 3 2 . . . . 
            . . . . 3 1 1 1 1 1 1 1 3 . . . 
            . . . . 1 1 1 1 1 1 1 1 1 . . . 
            . . . 2 1 1 1 1 1 1 1 1 1 2 . . 
            . . . 2 3 1 1 1 1 1 1 3 3 2 . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 4 4 4 4 4 . . . . . . 
            . . . 4 4 4 5 5 5 d 4 4 4 4 . . 
            . . 4 d 5 d 5 5 5 d d d 4 4 . . 
            . . 4 5 5 1 1 1 d d 5 5 5 4 . . 
            . 4 5 5 5 1 1 1 5 1 1 5 5 4 4 . 
            . 4 d d 1 1 5 5 5 1 1 5 5 d 4 . 
            . 4 5 5 1 1 5 1 1 5 5 d d d 4 . 
            . 2 5 5 5 d 1 1 1 5 1 1 5 5 2 . 
            . 2 d 5 5 d 1 1 1 5 1 1 5 5 2 . 
            . . 2 4 d d 5 5 5 5 d d 5 4 . . 
            . . . 2 2 4 d 5 5 d d 4 4 . . . 
            . . 2 2 2 2 2 4 4 4 2 2 2 . . . 
            . . . 2 2 4 4 4 4 4 4 2 2 . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            `,img`
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 4 4 4 5 5 4 4 4 2 2 2 . 
            . 2 2 5 5 d 4 5 5 5 4 4 4 4 2 . 
            . 2 4 5 5 5 5 d 5 5 5 4 5 4 2 2 
            . 2 4 d d 5 5 5 5 5 5 d 4 4 4 2 
            2 4 5 5 d 5 5 5 d d d 5 5 5 4 4 
            2 4 5 5 4 4 4 d 5 5 d 5 5 5 4 4 
            4 4 4 4 . . 2 4 5 5 . . 4 4 4 4 
            . . b b b b 2 4 4 2 b b b b . . 
            . b d d d d 2 4 4 2 d d d d b . 
            b d d b b b 2 4 4 2 b b b d d b 
            b d d b b b b b b b b b b d d b 
            b b d 1 1 3 1 1 d 1 d 1 1 d b b 
            . . b b d d 1 1 3 d d 1 b b . . 
            . . 2 2 4 4 4 4 4 4 4 4 2 2 . . 
            . . . 2 2 4 4 4 4 4 2 2 2 . . . 
            `,img`
            . . . . . . . . b b . . . . . . 
            . . . . . . . . b b . . . . . . 
            . . . b b b . . . . . . . . . . 
            . . b d d b . . . . . . . b b . 
            . b d d d b . . . . . . b d d b 
            . b d d b . . . . b b . b d d b 
            . b b b . . . . . b b . . b b . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . b b b d d d d d d b b b . . 
            . b d c c c b b b b c c d d b . 
            b d d c b . . . . . b c c d d b 
            c d d b b . . . . . . b c d d c 
            c b d d d b b . . . . b d d c c 
            . c c b d d d d b . c c c c c c 
            . . . c c c c c c . . . . . . . 
            `],
        100,
        false
        )
        sprite.setScale(1.5, ScaleAnchor.Middle)
        timer.after(100, function () {
            sprite.setScale(2, ScaleAnchor.Middle)
            timer.after(100, function () {
                sprite.setScale(2.5, ScaleAnchor.Middle)
                timer.after(100, function () {
                    sprite.setScale(3, ScaleAnchor.Middle)
                })
            })
        })
        timer.after(400, function () {
            sprites.destroy(sprite, effects.fire, 100)
        })
    })
    timer.after(500, function () {
        bossState = 0
    })
})
function combustAttack () {
    combust = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.explode)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    bossBar.value = 49
})
function waveAttack () {
    animation.runImageAnimation(
    CrabBoss,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . c c . . . 
        . . . . . . . c c c c 6 3 c . . 
        . . . . . . c 6 3 3 3 3 6 c . . 
        . . . . . c 6 6 3 3 3 3 3 3 c . 
        . . . . c 6 6 6 6 3 3 3 3 3 3 c 
        . c c c c c 6 6 c c 3 3 3 3 3 c 
        b 5 5 c 3 3 c c 5 5 c 3 3 3 c c 
        f f 5 c c c 3 c 5 f f 6 6 6 c c 
        f f 5 c c c c c 5 f f 3 3 3 3 c 
        . b 5 5 3 c 3 5 5 c 3 3 3 3 3 c 
        . c 4 4 5 5 5 5 4 c c 3 3 3 c . 
        c 4 5 5 4 4 4 4 5 5 4 c b b . . 
        c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
        c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
        . c c c c c c c c c . . c c c . 
        `,img`
        . . . . . . . . . . . c c . . . 
        . . c c . c c c c 3 c 6 3 c . . 
        . f f 5 c 6 c 5 f f 3 3 6 c . . 
        . f f 5 c 6 c 5 f f 3 3 3 3 c . 
        . b 5 5 5 c 5 5 5 c 3 3 3 3 3 c 
        . b 5 5 5 c 5 5 5 c 6 3 3 3 3 c 
        . b b 5 5 3 5 5 c 3 6 3 3 3 c c 
        . b b 5 5 3 5 5 c 3 3 3 6 6 c c 
        . c c 5 5 5 5 5 b c c 3 3 3 3 c 
        c 5 5 4 5 5 5 4 b 5 5 c 3 3 3 c 
        b 5 4 b 4 4 4 4 b b 5 c 3 3 c . 
        c 4 5 5 b 4 b 5 5 5 4 c b b . . 
        c 5 5 5 c 4 c 5 5 5 c 4 4 5 b . 
        c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
        c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
        . c c c c c c c c c . . c c c . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . c c . . . 
        . . . . . . . c c c c 6 3 c . . 
        . . . . . . c 6 3 3 3 3 6 c . . 
        . . c c . c 6 c c 3 3 3 3 3 c . 
        . c 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 6 3 3 3 c c 
        . f f 5 3 c 3 5 f f 6 6 6 6 c c 
        . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
        . c c 5 5 5 5 5 b c c 3 3 3 3 c 
        c 5 5 4 5 5 5 4 b 5 5 c 3 3 c . 
        b 5 4 b 4 4 4 4 b b 5 c b b . . 
        c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
        c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
        . c c c c c c c c c . . c c c . 
        `,img`
        . . . . . . . . . . . c c . . . 
        . . . . . . . c c c c 6 3 c . . 
        . . . . . . c 6 3 3 3 3 6 c . . 
        . . c c . c 6 c c 3 3 3 3 3 c . 
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 6 3 3 3 c c 
        . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
        . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
        . c c 5 5 5 5 5 b c c 3 3 3 3 c 
        c 5 5 4 5 5 5 4 b 5 5 c 3 3 c . 
        b 5 4 b 4 4 4 4 b b 5 c b b . . 
        c 4 5 5 b 4 b 5 5 5 4 c 4 5 b . 
        c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
        c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
        . c c c c c c c c c . . c c c . 
        `],
    100,
    true
    )
    timer.after(500, function () {
        waveFunction()
        timer.after(500, function () {
            waveFunction()
            timer.after(500, function () {
                waveFunction()
                timer.after(500, function () {
                    waveFunction()
                    timer.after(1000, function () {
                        bossState = 0
                    })
                })
            })
        })
    })
}
function grabAttack () {
    animation.runImageAnimation(
    CrabBoss,
    assets.animation`grabAnim`,
    100,
    false
    )
    timer.after(1100, function () {
        CrabBoss.setPosition(mySprite.x, mySprite.y)
        CrabBoss.setKind(SpriteKind.Grab)
        timer.after(100, function () {
            CrabBoss.setKind(SpriteKind.BossDefault)
            if (!(bossState == -2)) {
                timer.after(3000, function () {
                    bossState = 0
                })
            }
        })
    })
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    statusbar.value += 50
})
function waveFunction () {
    for (let index = 0; index <= 5; index++) {
        spitBall = sprites.create(img`
            . 8 8 . 
            8 9 9 8 
            8 9 9 8 
            . 8 8 . 
            `, SpriteKind.Enemy)
        spitBall.setPosition(CrabBoss.x, CrabBoss.y)
        spriteutils.setVelocityAtAngle(spitBall, index * 0.1 + spriteutils.angleFrom(CrabBoss, mySprite), 100)
        spitBall.setFlag(SpriteFlag.DestroyOnWall, true)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -5
    otherSprite.setKind(SpriteKind.Pillar)
    scene.cameraShake(2, 100)
})
function waterPillars () {
    animation.runImageAnimation(
    CrabBoss,
    assets.animation`pillarAnim`,
    100,
    false
    )
    timer.after(500, function () {
        waterPillar = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Pillar)
        tiles.placeOnRandomTile(waterPillar, assets.tile`myTile1`)
        timer.after(500, function () {
            waterPillar = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Pillar)
            tiles.placeOnRandomTile(waterPillar, assets.tile`myTile1`)
            if (Math.percentChance(50)) {
                waterPillars()
            } else {
                CrabBoss.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . c c . . . 
                    . . . . . . . c c c c 6 3 c . . 
                    . . . . . . c 6 3 3 3 3 6 c . . 
                    . . . . . c 6 6 3 3 3 3 3 3 c . 
                    . . . . c 6 6 6 6 3 3 3 3 3 3 c 
                    . c c c c c 6 6 c c 3 3 3 3 3 c 
                    b 5 5 c 3 3 c c 5 5 c 3 3 3 c c 
                    f f 5 c c c 3 c 5 f f 6 6 6 c c 
                    f f 5 c c c c c 5 f f 3 3 3 3 c 
                    . b 5 5 3 c 3 5 5 c 3 3 3 3 3 c 
                    . c 4 4 5 5 5 5 4 c c 3 3 3 c . 
                    c 4 5 5 4 4 4 4 5 5 4 c b b . . 
                    c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
                    c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
                    . c c c c c c c c c . . c c c . 
                    `)
                timer.after(1000, function () {
                    bossState = 0
                })
            }
        })
    })
}
let healthPickup: Sprite = null
let waterPillar: Sprite = null
let combust: Sprite = null
let bossBarAnim = false
let dashMem = 0
let bossBar: StatusBarSprite = null
let spitBall: Sprite = null
let cutscene = false
let phase2 = false
let bossActive = false
let statusbar: StatusBarSprite = null
let bossState = 0
let CrabBoss: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(8)
tiles.loadMap(tiles.createSmallMap(tilemap`level4`))
mySprite = sprites.create(img`
    . . . . . . . . 
    . . d d d d . . 
    . . d f d f . . 
    . . d d d d . . 
    . c b b b b c . 
    . c b b b b c . 
    . . e e e e . . 
    . . e . . e . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 75, 75)
tiles.placeOnTile(mySprite, tiles.getTileLocation(9, 7))
scene.cameraFollowSprite(mySprite)
mySprite.z = 10
CrabBoss = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . c c . . 
    . . . . . . . c c c c c 6 3 c . 
    . . . . . . c 6 6 3 3 3 6 6 c . 
    . . . . . c 6 6 6 3 3 3 3 3 3 c 
    . . . . c 6 6 6 6 3 3 3 3 3 3 c 
    . . c c c 6 6 6 6 6 3 3 3 3 3 c 
    . c 3 3 3 c 6 6 6 6 6 3 3 3 3 c 
    c 3 c c c 3 c 6 6 6 6 6 3 3 c c 
    c 6 c c c c 3 c 6 6 6 6 6 6 c c 
    c 6 c c c c 6 6 c 6 6 3 3 3 3 c 
    . c 6 c c c c 6 c 6 3 3 3 3 6 c 
    . . c 6 c c c c c 6 3 3 3 6 c . 
    . . . c c c c c c c c c c c . . 
    `, SpriteKind.BossShell)
CrabBoss.setPosition(80, 20)
bossState = -1
statusbar = statusbars.create(15, 1, StatusBarKind.Health)
statusbar.attachToSprite(mySprite, 1, 0)
let dead = false
game.onUpdate(function () {
    if (bossState == 0 && !(cutscene)) {
        bossState = randint(1, 4)
        if (phase2) {
            if (bossState == 1) {
                combustAttack()
            } else if (bossState == 2) {
                combustAttack()
            } else if (bossState == 3) {
                if (Math.percentChance(50)) {
                    grabAttack()
                } else {
                    bossState = 0
                }
            } else if (bossState == 4) {
                combustAttack()
            }
        } else {
            if (bossState == 1) {
                waterPillars()
            } else if (bossState == 2) {
                spitBeam()
            } else if (bossState == 3) {
                if (Math.percentChance(50)) {
                    grabAttack()
                } else {
                    bossState = 0
                }
            } else if (bossState == 4) {
                waveAttack()
            }
        }
    }
})
game.onUpdateInterval(10000, function () {
    if (statusbar.value < 50) {
        healthPickup = sprites.create(img`
            . . 3 . . 2 . . 
            . 3 3 2 3 2 2 . 
            3 3 3 2 3 2 2 2 
            3 3 3 2 3 2 2 2 
            . 3 3 3 2 2 1 . 
            . 3 3 3 2 1 2 . 
            . . 3 3 2 2 . . 
            . . . 3 2 . . . 
            `, SpriteKind.Food)
        tiles.placeOnRandomTile(healthPickup, assets.tile`myTile1`)
    }
})
