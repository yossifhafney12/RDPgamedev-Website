var cursor = document.getElementById("cursor");
var isVisible = true;

function blinkOff(obj) {
    obj.style.visibility = "hidden";
    isVisible = false;
}

function blinkOn(obj) {
    obj.style.visibility = "visible";
    isVisible = true;
}

function blink(obj) {
    if (isVisible) {
        blinkOff(obj);
    } else {
        blinkOn(obj);
    }
}

var cursorIntervalID = setInterval(blink, 600, cursor);