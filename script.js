// Get references to the buttons and elements that need to be manipulated
const btnContainerElement = document.getElementById('btnContainer')
const bottomNumberElement = document.querySelector('.currentNumber')
const topNumberElement = document.querySelector('.lastNumber')

// Initialize variables to store calculator data

let currentResult = 0;
let firstNumber = 0;
let secondNumber = 0;
let arithmeticSymbol = '';


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
                console.log('equals')
    
            // handleEqualsButtonClick();
                break;
            case '.':
                checkDecimalUsed()
            default:
                // Check if the buttonValue is a number or decimal
                if(/[0-9]/.test(buttonValue)) {
                    handleNumberButtonClick(buttonValue);
                } else if (/[/*+\-]/.test(buttonValue)){
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

// Handle arithmetic symbol button clicks
function handleArithmeticButtonClick(buttonValue) {
    const arithmeticSymbol = buttonValue
    
    if (secondNumber === 0){
        secondNumber = firstNumber
        console.log('you made it')
        firstNumber = 0
        topNumberElement.textContent = secondNumber
        bottomNumberElement.textContent = firstNumber
    } else {
        currentResult = handleTheMaths(arithmeticSymbol, firstNumber, secondNumber)
        console.log(currentResult)
        topNumberElement.textContent = `${currentResult} ${arithmeticSymbol}`
    }
}
//     arithmeticSymbol = buttonValue

//     if(topNumberElement.textContent === ''){
//         firstNumber = bottomNumberElement.textContent
//         topNumberElement.textContent += `${bottomNumberElement.textContent} ${buttonValue}`;
//         bottomNumberElement.textContent = '0';
//     }else{
//         secondNumber = bottomNumberElement.textContent
//         currentResult = handleTheMaths(buttonValue, firstNumber, secondNumber)
//         console.log(answer)
//         topNumberElement.textContent = `${answer} ${buttonValue}`
//         firstNumber = answer
//         bottomNumberElement.textContent = '0';
        
//     }
// }


// Handle equals button click
// function handleEqualsButtonClick() {
//     topNumberElement.textContent = `${topNumberElement.textContent} ${bottomNumberElement.textContent}`;
//     secondNumber = bottomNumberElement.textContent;
    
//     // Use the selected arithmetic symbol to perform the calculation
//     switch (arithmeticSymbol) {
//         case '+':
//             bottomNumberElement.textContent = add(firstNumber, secondNumber);
//             break;
//         case '-':
//             bottomNumberElement.textContent = subtract(firstNumber, secondNumber);
//             break;
//         case '*':
//             bottomNumberElement.textContent = multiply(firstNumber, secondNumber);
//             break;
//         case '/':
//             bottomNumberElement.textContent = divide(firstNumber, secondNumber);
//             break;
//     }
// }

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
    arithmeticSymbol = '';
}

// Arithmetic operation functions

function handleTheMaths(arithmeticSymbol, num1, num2) {
    // Use the selected arithmetic symbol to perform the calculation
// Use the selected arithmetic symbol to perform the calculation
    switch (arithmeticSymbol) {
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
