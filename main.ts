// Input: Trykker på knapp A for å redusere verdi på variabelen Teller.
input.onButtonPressed(Button.A, function () {
    Teller += -1
})
// Input: Trykker på knapp A for å øke verdi på variabelen Teller.
input.onButtonPressed(Button.B, function () {
    Teller += 1
})
// Input: Riste på Microbit for å nullstille.
input.onGesture(Gesture.Shake, function () {
    Teller = 0
})
// Her starter programmet. Dette er det første som kjøres.
let Teller = 0
Teller = 0
// Med en gang on Start er ferdig, kjøres denne løkken helt til programmet avsluttes.
basic.forever(function () {
    if (Teller < 0) {
        Teller = 0
    }
    basic.showNumber(Teller)
})
