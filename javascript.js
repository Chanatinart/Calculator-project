const calculator = document.querySelector('.calculator');
const numberBtn = document.querySelectorAll('.calculator_key');
const operatorBtn = document.querySelectorAll('.key_operator')
const userInput = document.getElementById('user-input');
const displayResult = document.getElementById('result');
const equalsButton = document.getElementById('equalsBtn');
const deleteBtn = document.getElementById('delBtn')
const clearBtn = document.getElementById('clearBtn')
const decimal = document.getElementById('decimal')
const plusMinusBtn = document.getElementById('positive-negative')

const displayNum = userInput.textContent
let resetDisplay = false
let currentValue = null
let firstValue = ''
let secondValue = ''


numberBtn.forEach((button) =>
button.addEventListener('click', () =>
appendNumber(button.textContent))
)

operatorBtn.forEach((button) =>
button.addEventListener('click', () =>
operation(button.textContent))
)

equalsButton.addEventListener('click', calculate)
clearBtn.addEventListener('click', clear)
deleteBtn.addEventListener('click', deleteNumber)
decimal.addEventListener('click', appendDecimal)
plusMinusBtn.addEventListener('click', reverseSign)

function appendNumber(number) {
    if(userInput.textContent === '0' || resetDisplay)
    resetScreen()
    userInput.textContent += number
}

function resetScreen() {
    userInput.textContent = ''
    resetDisplay = false
}

function clear() {
    userInput.textContent ='0'
    displayResult.textContent = ''
    firstValue = ''
    secondValue = ''
    currentValue = null
    }

function appendDecimal() {
    if(!displayNum.includes('.')) {
        userInput.textContent = displayNum + '.'
     } else if(currentValue === 'operator') {
    userInput.textContent = '0.'
    }
}

function deleteNumber() {
    userInput.textContent = userInput.textContent
    .slice(0, -1);
}

function reverseSign() {
    if(userInput.textContent > 0) {
        userInput.textContent = '-' + userInput.textContent   
    } else {
        userInput.textContent = userInput.textContent *-1;
    }
}

function operation(operator) {
    if(currentValue !== null) calculate()
    firstValue = userInput.textContent
    currentValue = operator
    displayResult.textContent = `${firstValue} ${currentValue}`
    resetDisplay = true
}

function calculate() {
    if(currentValue === null || 
        resetDisplay) return
        if(currentValue === '÷' &&
        userInput.textContent === '0') {
            alert("You can't divide by 0!")
            return
        }
        secondValue = userInput.textContent
        userInput.textContent = result(
            operate(currentValue, firstValue, secondValue)
        )
        displayResult.textContent = `${firstValue} ${currentValue} ${secondValue} =`
            currentValue = null
}

function result(number) {
    return Math.round(number * 1000) / 1000
}

function add(a,b) {
    return a + b
}

function subtract(a,b) {
    return a - b
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    return a / b
}

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch(operator) {
        case '+':
            return add(a,b)
        case '-':
            return subtract(a,b)
        case '×':
            return multiply(a,b)
        case '÷':
            if(b === 0) return null
            else return divide(a,b)
        default:
            return null
    }
}

