let btEnabled = false;
let persistentDisplay = false;
let temp = updateTemp()
basic.forever(function () {
    temp = updateTemp();
    btEnabled ? broadcastTemp() : led.unplot(0, 0); // if broadcasting temp via eddy beacon is enabled.
    if (persistentDisplay) basic.showNumber(temp);
    input.onButtonPressed(Button.A, () => {
        basic.showNumber(temp);
    });
    input.onButtonPressed(Button.B, () => {
        btEnabled = !btEnabled;
    });
    input.onButtonPressed(Button.AB, () => {
        persistentDisplay = !persistentDisplay;
    });
})


function broadcastTemp() {
    led.plot(0,0); // indicate that URL is currently being broadcasted
    bluetooth.advertiseUrl(
        `http://${temp}`,
        7,
        false
    );
};

function updateTemp() {
    return input.temperature() - 1;
}