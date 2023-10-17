// Get references to HTML elements
const btnContainerElement = document.getElementById('btnContainer');
const currentNumberElement = document.querySelector('.currentNumber');
const lastNumberElement = document.querySelector('.lastNumber');

// Initialize variables to store calculator data
let firstNumber = 0;
let secondNumber = 0;
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
        if(buttonValue === '.' && decimalUsed === false){
            decimalUsed = true;
            currentNumberElement.textContent += buttonValue;
        }else if(buttonValue === '.' && decimalUsed === true){
            
        }else{
            currentNumberElement.textContent += buttonValue;
        }
    }
}

// Handle arithmetic symbol button clicks
function handleArithmeticSymbol(buttonValue) {
    if(lastNumberElement.textContent === ''){
        arithmeticSymbol = buttonValue
        firstNumber = currentNumberElement.textContent
        lastNumberElement.textContent += `${currentNumberElement.textContent} ${buttonValue}`;
        currentNumberElement.textContent = '0.00';
    } else {
        arithmeticSymbol = buttonValue
        secondNumber = 
        lastNumberElement.textContent = handleEqualsButtonClick()
        
    }
        
        
        // if (lastNumberElement.textContent === '0.00'){
        // lastNumberElement.textContent += `${currentNumberElement.textContent} ${buttonValue}`;
        // currentNumberElement.textContent = '0.00';
    //     firstNumber = currentNumberElement.textContent;
    //     arithmeticSymbol = buttonValue;
    // }else{
    //     handleEqualsButtonClick();
    // }
}



// Handle equals button click
function handleEqualsButtonClick() {
    lastNumberElement.textContent = `${lastNumberElement.textContent} ${currentNumberElement.textContent}`;
    secondNumber = currentNumberElement.textContent;
    
    // Use the selected arithmetic symbol to perform the calculation
    switch (arithmeticSymbol) {
        case '+':
            currentNumberElement.textContent = add(firstNumber, secondNumber);
            break;
        case '-':
            currentNumberElement.textContent = subtract(firstNumber, secondNumber);
            break;
        case '*':
            currentNumberElement.textContent = multiply(firstNumber, secondNumber);
            break;
        case '/':
            currentNumberElement.textContent = divide(firstNumber, secondNumber);
            break;
    }
}

// Handle backspace button click
function handleBackspace() {
    currentNumberElement.textContent = currentNumberElement.textContent.slice(0, -1);
    if(currentNumberElement.textContent.includes('.')){
        decimalUsed = true
    }else{
        decimalUsed = false
    }
}
// Clear the screen
function clearScreen() {
    lastNumberElement.textContent = '';
    currentNumberElement.textContent = '0.00';
    firstNumber = 0;
    secondNumber = 0;
    arithmeticSymbol = '';
    decimalUsed = false;
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
