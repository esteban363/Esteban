radio.onReceivedNumber(function (receivedNumber) {
    radio.setGroup(58)
})
music.ringTone(262)
basic.forever(function () {
    led.plot(3, 1)
})
