var display = document.getElementById("display");
function appendToDisplay(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = "";
}
function calculate() {
    try {
        display.value = eval(display.value).toString();
    }
    catch (e) {
        display.value = "Error";
    }
}
