const calculator = document.querySelector('.calculator')
const keys = document.querySelector('.calculator_keys')

keys.addEventListener('click', e => {
    if(e.target.matches('button')) {
        //do something
    }
})

const key = e.target
const action = key.dataset.action
