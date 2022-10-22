input.onButtonPressed(Button.AB, function () {
    music.playMelody("C5 B A G F E D C ", 120)
    radio.sendString("I love you papa")
    music.playMelody("C5 B A G F E D C ", 120)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
