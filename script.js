// Get references to HTML elements
const btnContainerElement = document.getElementById('btnContainer');
const currentNumberElement = document.querySelector('.currentNumber');
const lastNumberElement = document.querySelector('.lastNumber');

// Initialize variables to store calculator data
let firstNumber = 0;
let nextNumber = 0;
let arithmeticSymbol = '';
let decimalUsed = false;

// Event listener for button clicks
btnContainerElement.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        const buttonValue = event.target.value;

        // Use a switch statement to handle different button values
        switch (buttonValue) {
            case 'clr':
                clearScreen();
                break;
            case 'bkSpace':
                handleBackspace();
                break;
            case '=':
                handleEqualsButtonClick();
                break;
            default:
                // Check if the buttonValue is a number or decimal
                if(/[0-9.]/.test(buttonValue)) {
                    handleNumberButtonClick(buttonValue);
                } else if (/[/*+\-]/.test(buttonValue)){
                    handleArithmeticSymbol(buttonValue);
                }
        }
    }
});

// Handle number button clicks
function handleNumberButtonClick(buttonValue) {
    if(/[0-9.]/.test(buttonValue)) {
        if(currentNumberElement.textContent === '0.00'){
            currentNumberElement.textContent = '';
        }
        currentNumberElement.textContent += buttonValue;
    }
}

// Handle arithmetic symbol button clicks
function handleArithmeticSymbol(buttonValue) {
    if (lastNumberElement.textContent === '0.00'){
        lastNumberElement.textContent = `${currentNumberElement.textContent} ${buttonValue}`;
        firstNumber = currentNumberElement.textContent;
        currentNumberElement.textContent = '0.00';
        arithmeticSymbol = buttonValue;
    }else{
        handleEqualsButtonClick()
    }
}

// Handle equals button click
function handleEqualsButtonClick() {
    lastNumberElement.textContent = `${lastNumberElement.textContent} ${currentNumberElement.textContent}`;
    nextNumber = currentNumberElement.textContent;
    
    // Use the selected arithmetic symbol to perform the calculation
    switch (arithmeticSymbol) {
        case '+':
            currentNumberElement.textContent = add(firstNumber, nextNumber);
            break;
        case '-':
            currentNumberElement.textContent = subtract(firstNumber, nextNumber);
            break;
        case '*':
            currentNumberElement.textContent = multiply(firstNumber, nextNumber);
            break;
        case '/':
            currentNumberElement.textContent = divide(firstNumber, nextNumber);
            break;
    }
}

// Handle backspace button click
function handleBackspace() {
    currentNumberElement.textContent = currentNumberElement.textContent.slice(0, -1);
}

// Clear the screen
function clearScreen() {
    lastNumberElement.textContent = '0.00';
    currentNumberElement.textContent = '0.00';
}

// Arithmetic operation functions
function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

function divide(num1, num2) {
    return Number(num1) / Number(num2);
}
