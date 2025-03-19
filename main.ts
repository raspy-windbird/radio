enum RadioMessage {
    message1 = 49434
}
radio.onReceivedMessage(RadioMessage.message1, function () {
    basic.showLeds(`
        # # . . .
        . # # . .
        . . # . .
        . . . # .
        . . . # #
        `)
})
radio.sendMessage(RadioMessage.message1)
basic.forever(function () {
	
})
