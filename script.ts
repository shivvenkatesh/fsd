const display = document.getElementById("display") as HTMLInputElement;
function appendToDisplay(value: string): void {
  display.value += value;
}
function clearDisplay(): void {
  display.value = "";
}
function calculate(): void {
  try {
    display.value = eval(display.value).toString();
  } catch (e) {
    display.value = "Error";
  }
}