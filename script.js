const btnContainerElement = document.getElementById('btnContainer')
const currentNumberElement = document.querySelector('.currentNumber')
const lastNumberElement = document.querySelector('.lastNumber')



btnContainerElement.addEventListener('click', function (event){
    if(event.target.tagName === 'BUTTON'){
        console.log(event.target.value)
        currentNumberElement.textContent = event.target.value
    }
})


