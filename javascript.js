const calculator = document.querySelector('.calculator')
const keys = document.querySelector('.calculator_keys')

keys.addEventListener('click', e => {
    if(e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action

        if(
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            console.log('operator key')
        } 
        if(!action) {
            console.log('number key')
        }
        if(action === 'decimal') {
            console.log('decimal key')
        }
        if(action === 'clear') {
            console.log('clear key')
        }
        if(action === 'calculate') {
            console.log('equal key')
        }
        if(action === 'delete') {
            console.log('delete key')
        }
        if(action === 'positive-negative') {
            console.log('ps key')
        }
    }
})


const display = document.querySelector('.calculator_display')

keys.addEventListener('click', e => {
    if(e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayNum = display.textContent

    if(!action) {
        if (displayNum === '0') {
                display.textContent = keyContent
            } else {
                display.textContent = displayNum + keyContent //append the clicked num to display num
            }
        }
        //click the decimal
    if(action === 'decimal') {
            display.textContent = displayNum + '.'
        }
    // click an operator key
    if(
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide' 
    ) {
        key.classList.add('is-depressed')
    }

        const previousKeyType = calculator.dataset.previousKeyType

        if(!action) {
            if(displayNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent 
            } else {
                display.textContent = displayNum + keyContent
            }
        calculator.dataset.previousKeyType = 'operator'
        }
    }
})

