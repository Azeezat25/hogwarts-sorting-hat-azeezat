input.onButtonPressed(Button.A, function () {
    basic.showString("Shake Me")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Shake Me")
})
input.onGesture(Gesture.Shake, function () {
    number = randint(0, 5)
    if (number == 0) {
        for (let index = 0; index < 3; index++) {
            basic.showString("You belong in Hufflepuff!")
            music.playMelody("B C5 B C5 B C5 B C5 ", 120)
            basic.showIcon(IconNames.Target)
        }
    } else if (number == 1) {
        for (let index = 0; index < 3; index++) {
            basic.showString("You belong in Ravenclaw!")
            music.playMelody("G A G A G A G A ", 120)
            basic.showIcon(IconNames.Pitchfork)
        }
    } else if (number == 2) {
        for (let index = 0; index < 3; index++) {
            basic.showString("You belong in Slytherin!")
            music.playMelody("E F E F E F E F ", 120)
            basic.showIcon(IconNames.Triangle)
        }
    } else if (number == 3) {
        for (let index = 0; index < 3; index++) {
            basic.showString("You belong in Gryffindor!")
            music.playMelody("C D C D C D C D ", 120)
            basic.showIcon(IconNames.LeftTriangle)
        }
    } else if (number == 4) {
        for (let index = 0; index < 3; index++) {
            basic.showString("Special class-NONE!")
            music.playMelody("E D C C C C C C ", 120)
            basic.showIcon(IconNames.Skull)
        }
    } else {
        for (let index = 0; index < 3; index++) {
            basic.showString("Special class-ALL!")
            music.playMelody("A B C5 C5 C5 C5 C5 C5 ", 120)
            basic.showIcon(IconNames.Ghost)
        }
    }
})
let number = 0
basic.showString("Hello!")
basic.showString("Shake Me")
basic.forever(function () {
	
})
