input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    basic.pause(200)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Skull)
    basic.pause(200)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.temperature())
    basic.pause(200)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    basic.pause(200)
})
basic.forever(function () {
    basic.showNumber(input.compassHeading())
})
