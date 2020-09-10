input.onButtonPressed(Button.A, function () {
    basic.showNumber(feet)
    basic.showString("Feet")
    basic.showString("=")
    yards = feet / 3
    basic.showNumber(yards)
    basic.showString("Yards")
})
input.onGesture(Gesture.Shake, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
let yards = 0
let feet = 0
feet = randint(1, 100)
