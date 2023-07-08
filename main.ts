let btEnabled = false;

basic.forever(function () {
    control.waitMicros(10000) // every 10 seconds
    btEnabled ? broadcastTemp() : led.unplot(0, 0); // if broadcasting temp via eddy beacon is enabled.
    input.onButtonPressed(Button.A, () => {
        basic.showNumber(input.temperature());
    });
    input.onButtonPressed(Button.B, () => {
        btEnabled = !btEnabled;
    });
})

function broadcastTemp() {
    led.plot(0,0) // indicate that URL is currently being broadcasted
    bluetooth.advertiseUrl(
        `http://${input.temperature()}`,
        7,
        false
    );
};