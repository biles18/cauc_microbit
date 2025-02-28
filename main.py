def on_button_pressed_a():
    global Numero_1, Numero_2
    if Botão == 0:
        Numero_1 += 1
        basic.show_number(Numero_1)
    if Botão == 1:
        Numero_2 += 1
        basic.show_number(Numero_2)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    global Opr, Botão, Numero_1, Numero_2
    Opr = 0
    Botão = 0
    Numero_1 = 0
    Numero_2 = 0
    basic.clear_screen()
    music.play_tone(659, music.beat(BeatFraction.WHOLE))
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_ab():
    global Opr
    Opr += 1
    if Opr == 1:
        basic.show_leds("""
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            """)
        basic.pause(100)
        basic.clear_screen()
    elif Opr == 2:
        basic.show_leds("""
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            """)
        basic.pause(100)
        basic.clear_screen()
    elif Opr == 3:
        basic.show_leds("""
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            """)
        basic.pause(100)
        basic.clear_screen()
    elif Opr == 4:
        basic.show_leds("""
            . . # . .
            . . . . .
            # # # # #
            . . . . .
            . . # . .
            """)
        basic.pause(100)
        basic.clear_screen()
    else:
        Opr = 1
        basic.show_leds("""
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            """)
        basic.pause(100)
        basic.clear_screen()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global Botão
    basic.clear_screen()
    Botão += 1
    if Botão == 2:
        if Opr == 1:
            basic.show_number(Numero_1 + Numero_2)
            music.play_tone(554, music.beat(BeatFraction.WHOLE))
        elif Opr == 2:
            basic.show_number(Numero_1 - Numero_2)
            music.play_tone(932, music.beat(BeatFraction.WHOLE))
        elif Opr == 3:
            basic.show_number(Numero_1 * Numero_2)
            music.play_tone(740, music.beat(BeatFraction.WHOLE))
        else:
            basic.show_number(Numero_1 / Numero_2)
            music.play_tone(622, music.beat(BeatFraction.WHOLE))
input.on_button_pressed(Button.B, on_button_pressed_b)

Numero_1 = 0
Numero_2 = 0
Botão = 0
Opr = 0
Opr = 0
Botão = 0
Numero_2 = 0
Numero_1 = 0