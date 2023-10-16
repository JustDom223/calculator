const btnContainerElement = document.getElementById('btnContainer')
const currentNumberElement = document.querySelector('.currentNumber')
const lastNumberElement = document.querySelector('.lastNumber')

let firstNumber = 0
let nextNumber = 0
let arithmeticSymbol = ''
let decimalUsed = false

// Using the buttons to manipluate the screen
btnContainerElement.addEventListener('click', function (event){
    if(event.target.tagName === 'BUTTON'){
        const buttonValue = event.target.value;

        switch(buttonValue) {
            case 'clr': 
                clearScreen();
                break;
            case 'bkSpace': 
                handleBackspace();
                break;
            case '=' : 
                handleEqualsButtonClick();
                break;
            default:
                if(/[0-9.]/.test(buttonValue)) {
                    handleNumberButtonClick(buttonValue);
                }else if (/[/*+\-]/.test(buttonValue)){
                    handleArithmeticSymbol(buttonValue)
        }}}}
)

function handleNumberButtonClick(buttonValue){
    if(/[0-9.]/.test(buttonValue)) {
        if(currentNumberElement.textContent === '0.00'){
            currentNumberElement.textContent = ''
        }
        currentNumberElement.textContent += buttonValue
}}

function handleArithmeticSymbol(buttonValue){
    lastNumberElement.textContent = `${currentNumberElement.textContent} ${buttonValue}`
    firstNumber = currentNumberElement.textContent
    currentNumberElement.textContent = '0.00'
    arithmeticSymbol = buttonValue
}


function handleBackspace(){
    currentNumberElement.textContent = currentNumberElement.textContent.slice(0, -1)
}

function clearScreen(){
    lastNumberElement.textContent = '0.00'
    currentNumberElement.textContent = '0.00'
}

function handleEqualsButtonClick(){
    lastNumberElement.textContent = `${lastNumberElement.textContent} ${currentNumberElement.textContent} ${event.target.value}`
    nextNumber = currentNumberElement.textContent
    if (arithmeticSymbol === '+'){
        currentNumberElement.textContent = add(firstNumber, nextNumber)
    }else if(arithmeticSymbol === '-'){
        currentNumberElement.textContent = subtract(firstNumber, nextNumber)
    }else if(arithmeticSymbol === '*'){
        currentNumberElement.textContent = multiply(firstNumber, nextNumber)
    }else if(arithmeticSymbol === '/'){
        currentNumberElement.textContent = divide(firstNumber, nextNumber)
    }
}

function add(num1, num2){
    return Number(num1) + Number(num2)
}

function subtract(num1, num2){
    return Number(num1) - Number(num2)
}


function multiply(num1, num2){
    return Number(num1) * Number(num2)
}

function divide(num1, num2){
    return Number(num1) / Number(num2)
}
