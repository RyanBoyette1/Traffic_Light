led.enable(false)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P6, 1)
    basic.pause(10000)
    pins.digitalWritePin(DigitalPin.P6, 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P4, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P4, 0)
    }
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
