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
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Target)
            music.playMelody("A G F G A G F G ", 120)
        }
    } else if (number == 1) {
        basic.showString("You belong in Ravenclaw!")
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Pitchfork)
            music.playMelody("E F G F E F G F ", 120)
        }
    } else if (number == 2) {
        basic.showString("You belong in Slytherin!")
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Triangle)
            music.playMelody("G F E F G F E F ", 120)
        }
    } else if (number == 3) {
        basic.showString("You belong in Gryffindor!")
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.SmallDiamond)
            music.playMelody("C5 B A B C5 B A B ", 120)
        }
    }
})
let number = 0
basic.showString("Welcome")
basic.showString("Shake Me")
basic.forever(function () {
	
})
