input.onButtonPressed(Button.A, function () {
    radio.sendString("I love you papa")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("I love you mama and papa")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("I love you mama")
})
radio.setGroup(1)
