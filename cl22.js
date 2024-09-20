let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    if (display.innerText === '0') {
        display.innerText = '';
    }
    display.innerText += number;
}

function clearDisplay() {
    display.innerText = '0';
    currentInput = '';
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
    }
}
