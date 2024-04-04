let display = document.getElementById('display');
let equation = '';

function appendToDisplay(value) {
    equation += value;
    display.value = equation;
}

function clearDisplay() {
    equation = '';
    display.value = '';
}

function calculate() {
    try {
        let result = eval(equation);
        display.value = result;
        equation = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
}
