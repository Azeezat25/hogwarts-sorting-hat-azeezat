input.onButtonPressed(Button.A, function () {
    basic.showString("Shake Me")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Shake Me")
})
input.onGesture(Gesture.Shake, function () {
    number = randint(0, 3)
    if (number == 0) {
        basic.showString("You belong in Hufflepuff!")
        music.playMelody("B C5 B C5 B C5 B C5 ", 120)
    } else if (number == 1) {
        basic.showString("You belong in Ravenclaw!")
        music.playMelody("G A G A G A G A ", 120)
    } else if (number == 2) {
        basic.showString("You belong in Slytherin!")
        music.playMelody("E F E F E F E F ", 120)
    } else {
        basic.showString("You belong in Gryffindor!")
        music.playMelody("C D C D C D C D ", 120)
    }
})
let number = 0
basic.showString("Shake Me")
basic.forever(function () {
	
})
