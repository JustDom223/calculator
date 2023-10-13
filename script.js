const btnContainerElement = document.getElementById('btnContainer')

btnContainerElement.addEventListener('click', function (event){
    if(event.target.tagName === 'BUTTON'){
        console.log('btnClicked' + event.target.textContent)
    }
})


