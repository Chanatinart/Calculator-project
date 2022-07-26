const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator_keys');
const userInput = document.querySelector('#user-input');
const displayResult = document.querySelector('#result');
const previousKeyType = calculator.dataset.previousKeyType

let firstValue = ''


keys.addEventListener('click', e => {
    if(e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayNum = userInput.textContent
        if(
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
             const firstValue = calculator.dataset.firstValue
             const operator = calculator.dataset.operator
             const secondValue = displayNum

             if (firstValue && operator) {
                userInput.textContent = calculator(firstValue, operator, secondValue)
  //                          firstValue = userInput.textContent
    //        userInput.textContent = keyContent
        //     displayResult.textContent = `${firstValue} ${keyContent}`

           calculator.dataset.previousKeyType = 'operator'

           calculator.dataset.firstValue = displayNum

           calculator.dataset.operator = action
             }


        } 
        if(!action) {
                if (displayNum === '0'|| 
                    previousKeyType === 'operator') {
                userInput.textContent = keyContent
            } else {
                userInput.textContent = displayNum + keyContent //append the clicked num to display num

                calculator.dataset.previousKeyType = 'number'
            }
        }
        if(action === 'decimal') {
            if(!displayNum.includes('.')) {
                userInput.textContent = displayNum + '.'   
            } else if(previousKeyType === 'operator') {
                userInput.textContent = '0.'
            }
            
            calculator.dataset.previousKeyType = 'decimal'
        }
        if(action === 'clear') {
            userInput.textContent =  '0'
            displayResult.textContent = ''
            calculator.dataset.previousKeyType = 'clear'

        }
        if(action === 'calculate') {
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayNum

            const calculate = (n1, operator, n2) => {
                let result = ''

                if(operator === 'add') {
                    result = parseFloat(n1) + parseFloat(n2)
                } else if(operator === 'subtract') {
                    result = parseFloat(n1) - parseFloat(n2)
                } else if(operator === 'multiply') {
                    result = parseFloat(n1) * parseFloat(n2)
                } else if(operator === 'divide') {
                    result = parseFloat(n1) / parseFloat(n2)
                }
                return result
            calculator.dataset.previousKeyType = 'calculate'
            }

            userInput.textContent = calculate(firstValue, operator, secondValue)
        }
        if(action === 'delete') {
            userInput.textContent = userInput.textContent
            .toString()
            .slice(0, -1)
        }
        if(action === 'positive-negative') {
            console.log('ps key')
        }
    }
})

 //
   //         displayResult.textContent = `${firstValue}${userInput}`
     //       