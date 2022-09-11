input.onButtonPressed(Button.A, function () {
    Teller += -1
})
input.onButtonPressed(Button.B, function () {
    Teller += 1
})
input.onGesture(Gesture.Shake, function () {
    Teller = 0
})
let Teller = 0
Teller = 0
basic.forever(function () {
    if (Teller < 0) {
        Teller = 0
    }
    basic.showNumber(Teller)
})
