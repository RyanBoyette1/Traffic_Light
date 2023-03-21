led.enable(false)
pins.analogWritePin(AnalogPin.P2, 1023)
pins.analogWritePin(AnalogPin.P3, 1023)
pins.analogWritePin(AnalogPin.P4, 1023)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(1000)
    pins.analogWritePin(AnalogPin.P2, 1023)
    pins.analogWritePin(AnalogPin.P3, 0)
    basic.pause(1000)
    pins.analogWritePin(AnalogPin.P4, 1023)
    for (let index = 0; index < 1; index++) {
        for (let index = 0; index <= 513; index++) {
            pins.analogWritePin(AnalogPin.P2, index)
            pins.analogWritePin(AnalogPin.P3, 1023 - index)
            pins.analogWritePin(AnalogPin.P4, 512 - index)
            basic.pause(1)
        }
        for (let index = 0; index <= 513; index++) {
            pins.analogWritePin(AnalogPin.P2, 512 - index)
            pins.analogWritePin(AnalogPin.P3, index)
            pins.analogWritePin(AnalogPin.P4, 1023 - index)
            basic.pause(1)
        }
        for (let index = 0; index <= 513; index++) {
            pins.analogWritePin(AnalogPin.P2, 1023 - index)
            pins.analogWritePin(AnalogPin.P3, 512 - index)
            pins.analogWritePin(AnalogPin.P4, index)
            basic.pause(1)
        }
        pins.analogWritePin(AnalogPin.P2, 1023)
        pins.analogWritePin(AnalogPin.P3, 1023)
        pins.analogWritePin(AnalogPin.P4, 1023)
    }
})
