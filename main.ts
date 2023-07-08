
basic.forever(function () {
    control.waitMicros(5000)
    bluetooth.advertiseUrl(
        `http://${input.temperature()}`,
        7,
        false
    );
    input.onButtonPressed(Button.A, () => {
        basic.showNumber(input.temperature());
    })
})