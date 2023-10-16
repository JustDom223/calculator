const btnContainerElement = document.getElementById('btnContainer')
const currentNumberElement = document.querySelector('.currentNumber')
const lastNumberElement = document.querySelector('.lastNumber')

let firstNumber = 0
let nextNumber = 0
let arithmeticSymbol = ''

// Using the buttons to manipluate the screen
btnContainerElement.addEventListener('click', function (event){
    if(event.target.tagName === 'BUTTON'){
        const buttonValue = event.target.value;
        if(/[0-9.]/.test(buttonValue)) {
            if(currentNumberElement.textContent === '0.00'){
                currentNumberElement.textContent = ''
            }
            currentNumberElement.textContent += event.target.value
        } else if (/[/*+\-]/.test(buttonValue)) {
            lastNumberElement.textContent = `${currentNumberElement.textContent} ${event.target.value}`
            firstNumber = currentNumberElement.textContent
            currentNumberElement.textContent = '0.00'
            arithmeticSymbol = event.target.value
            
            console.log(arithmeticSymbol)
            console.log(firstNumber)
        }else if (buttonValue === 'clr'){
            lastNumberElement.textContent = '0.00'
            currentNumberElement.textContent = '0.00'
        }else if (buttonValue === 'bkSpace'){
            currentNumberElement.textContent = currentNumberElement.textContent.slice(0, -1)
        } else if (/[=]/.test(buttonValue)) {
            nextNumber = currentNumberElement.textContent
            console.log(firstNumber, arithmeticSymbol, nextNumber)
            if (arithmeticSymbol === '+'){
                currentNumberElement.textContent = add(firstNumber, nextNumber)
            }else if(arithmeticSymbol === '-'){
                currentNumberElement.textContent = subtract(firstNumber, nextNumber)
            }
        }
    }
})


function add(num1, num2){
    return Number(num1) + Number(num2)
}

function subtract(num1, num2){
    return Number(num1) - Number(num2)
}

// const subtract = function(a, b) {
// 	return a - b
// };

// const sum = function(a) {
//   let sum = 0
//   for (let i = 0; i < a.length; i++){
//     sum += a[i]
//   }
//   return sum
  
// };

// const multiply = function(a) {
//   let total = 1
//   for (let i = 0; i < a.length; i++){
//     total *= a[i]
//   }
//   return total
// };

// const power = function(a, b) {
//   let sum = a
//   for (let i = 0; i < b - 1; i++){
//     sum *= a
//   }
//   return sum
// };

// const factorial = function(a) {
// 	let sum = 1
//   for (let i = 0; i < a; i++){
//     sum += sum * i
//   }
//   return sum
// };


// // numbers need to edit the main number and add to it..
// // 















// // using spread syntax to convert collection to array
// // forEach is an array method
// [...document.getElementsByTagName("button")].forEach(function(item) {
//     // adding eventListener to the elements
//     item.addEventListener('click', function() {
//       // calling the methods
//       // this.id will be the id of the clicked button
//       // there is a method in the object by same name, which will be trigger
//       obj[this.id]();
  
//     })
//   })
  
//   var obj = {
//     1: function() {
//       console.log('1')
//     },
//     w: function() {
//       console.log('w')
//     },
//     e: function() {
//       console.log('e')
//     },
//     r: function() {
//       console.log('r')
//     },
//     t: function() {
//       console.log('t')
//     },
//     y: function() {
//       console.log('y')
//     }
//   }