const btnContainerElement = document.getElementById('btnContainer')
const currentNumberElement = document.querySelector('.currentNumber')
const lastNumberElement = document.querySelector('.lastNumber')



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
        } else if (buttonValue === 'Clr'){
            lastNumberElement.textContent = '0.00'
            currentNumberElement.textContent = '0.00'

        }
    }
})


// numbers need to edit the main number and add to it..
// 















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