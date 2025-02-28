input.onButtonPressed(Button.A, function () {
    if (Botão == 0) {
        Numero_1 += 1
        basic.showNumber(Numero_1)
    }
    if (Botão == 1) {
        Numero_2 += 1
        basic.showNumber(Numero_2)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    music.playTone(659, music.beat(BeatFraction.Whole))
    Opr = 0
    Botão = 0
    Numero_1 = 0
    Numero_2 = 0
})
input.onButtonPressed(Button.AB, function () {
    Opr += 1
    if (Opr == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else if (Opr == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else if (Opr == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(100)
        basic.clearScreen()
    } else if (Opr == 4) {
        basic.showLeds(`
            . . # . .
            . . . . .
            # # # # #
            . . . . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else {
        Opr = 1
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Botão += 1
    if (Botão == 2) {
        if (Opr == 1) {
            basic.showNumber(Numero_1 + Numero_2)
            music.playTone(554, music.beat(BeatFraction.Whole))
            if (Numero_1 < 20) {
                basic.showString("YOU AS DUMP!!!")
                music.play(music.createSoundExpression(WaveShape.Sawtooth, 1501, 927, 237, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
            }
        } else if (Opr == 2) {
            basic.showNumber(Numero_1 - Numero_2)
            music.playTone(932, music.beat(BeatFraction.Whole))
            if (Numero_1 < 20) {
                basic.showString("YOU AS DUMP!!!")
                music.play(music.createSoundExpression(WaveShape.Sawtooth, 1501, 927, 237, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
            }
        } else if (Opr == 3) {
            basic.showNumber(Numero_1 * Numero_2)
            music.playTone(740, music.beat(BeatFraction.Whole))
        } else {
            basic.showNumber(Numero_1 / Numero_2)
            music.playTone(622, music.beat(BeatFraction.Whole))
        }
    }
})
let Numero_1 = 0
let Numero_2 = 0
let Botão = 0
let Opr = 0
Opr = 0
Botão = 0
Numero_2 = 0
Numero_1 = 0
