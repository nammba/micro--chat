input.onButtonPressed(Button.AB, function () {
    radio.sendString("I love you papa")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
