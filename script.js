// Get references to the buttons and elements that need to be manipulated
const btnContainerElement = document.getElementById('btnContainer')
const bottomNumberElement = document.querySelector('.currentNumber')
const topNumberElement = document.querySelector('.lastNumber')

// Initialize variables to store calculator data

let currentResult = 0;
let firstNumber = 0;
let secondNumber = 0;
let currentArithmeticSymbol = '';
let previouseArithmeticSymbol = '';
let equalsPressed = false

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
                currentResult = handleTheMaths(currentArithmeticSymbol, secondNumber, firstNumber);
                topNumberElement.textContent = ''
                bottomNumberElement.textContent = currentResult
                equalsPressed = true
                break;
            case '.':
                checkDecimalUsed()
            default:
                // Check if the buttonValue is a number or decimal
                if(/[0-9]/.test(buttonValue)) {
                    if (equalsPressed){
                        clearScreen()
                        equalsPressed = false
                    }
                    handleNumberButtonClick(buttonValue);
                } else if (/[/*+\-]/.test(buttonValue)){
                    equalsPressed = false
                    handleArithmeticButtonClick(buttonValue);
                }
        }
    }
});

// Check to see if there is already a decimal in the number and add one if there is'nt
function checkDecimalUsed(){
    if(bottomNumberElement.textContent.includes('.')){
        console.log('sorry you have already used a decimal place')
    }else{
        bottomNumberElement.textContent += '.';
    }
}

// Handle number button clicks
function handleNumberButtonClick(buttonValue) {
    // A check to see if the current diplay is still '0'
    // If it is then it will check that the button that has
    // been pressed is a decimal
        if(bottomNumberElement.textContent === '0'){
            if (buttonValue !== '.'){
                bottomNumberElement.textContent = '';
                bottomNumberElement.textContent += buttonValue;
            }else{
                checkDecimalUsed()
            }
        }else{
            bottomNumberElement.textContent += buttonValue;
        };
        firstNumber = bottomNumberElement.textContent
        console.log(firstNumber)
};

// This is the part im getting stuck on
// Handle arithmetic symbol button clicks
function handleArithmeticButtonClick(buttonValue) {
    // Extract the current arithmetic symbol from the button value
    currentArithmeticSymbol = buttonValue;

    if (secondNumber === 0) {
        // If the second number is not set, move the first number to the second, and reset the first number.
        secondNumber = firstNumber;
        firstNumber = 0;

        // Update the displayed numbers and store the previous arithmetic symbol.
        topNumberElement.textContent = `${secondNumber} ${currentArithmeticSymbol}`;
        bottomNumberElement.textContent = firstNumber;
        previousArithmeticSymbol = currentArithmeticSymbol;
    } else {
        // Calculate the result using the previous arithmetic symbol, the second number, and the first number.
        console.log("First Number:", firstNumber);
        console.log("Second Number:", secondNumber);
        
        currentResult = handleTheMaths(previousArithmeticSymbol, secondNumber, firstNumber);

        // Update the second number with the current result and display it.
        secondNumber = currentResult;
        console.log("Current Result:", currentResult);
        topNumberElement.textContent = `${currentResult} ${currentArithmeticSymbol}`;

        // Reset the first number and display it as 0, and store the new arithmetic symbol.
        // firstNumber = 0;
        bottomNumberElement.textContent = 0;
        previousArithmeticSymbol = currentArithmeticSymbol;
    }
}

// Handle backspace button click
function handleBackspace() {
    bottomNumberElement.textContent = bottomNumberElement.textContent.slice(0, -1);
}
// Clear the screen
function clearScreen() {
    topNumberElement.textContent = '';
    bottomNumberElement.textContent = '0';
    firstNumber = 0;
    secondNumber = 0;
    currentArithmeticSymbol = '';
}

// Arithmetic operation functions

function handleTheMaths(ArithmeticSymbol, num1, num2) {
    // Use the selected arithmetic symbol to perform the calculation
// Use the selected arithmetic symbol to perform the calculation
    switch (ArithmeticSymbol) {
        case '+':
            return Number(num1) + Number(num2);

        case '-':
            return Number(num1) - Number(num2);

        case '*':
            return Number(num1) * Number(num2);

        case '/':
            return Number(num1) / Number(num2);

    }
}
