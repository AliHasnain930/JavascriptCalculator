const numbers = document.querySelectorAll('.num-btn')
const operations = document.querySelectorAll('.operation-btn')
const current = document.querySelector('.current')
const previous = document.querySelector('.previous')
const clear = document.querySelector('.all-clear')
const del = document.querySelector('.delete')
const equal = document.querySelector('.equals')
const percentage = document.querySelector('.percentage')

numbers.forEach(number => {
    number.addEventListener('click', () => {
        if(number.innerHTML === '.' && current.innerHTML.includes('.')) return
        if (current.innerHTML === '0') {
            current.innerHTML = number.innerHTML
        }
        else {
            current.innerHTML += number.innerHTML
        }
    })
})

operations.forEach(operation => {
    operation.addEventListener('click', () => {
        if(current.innerHTML === '') return
        if (previous.innerHTML !== '') {
            calculate()
        }
        previous.innerHTML = current.innerHTML + ' ' +  operation.innerHTML
        current.innerHTML = ''
    })
})

clear.addEventListener('click', () => {
    current.innerHTML = '0'
    previous.innerHTML = ''
})

function calculate() {
    const length = previous.innerHTML.length
    const first_num = parseFloat(previous.innerHTML.substr(0, length - 1))
    const operation = previous.innerHTML.charAt(length - 1)
    const second_num = parseFloat(current.innerHTML)
    let result
    switch (operation) {
        case '+':
            result = first_num + second_num
            break
        case '-':
            result = first_num - second_num
            break
        case 'x':
            result = first_num * second_num
            break
        case '/':
            result = first_num / second_num
            break
        default: return
    }
    previous.innerHTML = ''
    current.innerHTML = result
}

equal.addEventListener('click', () => {
    calculate()
})

del.addEventListener('click', () => {
    if (current.innerHTML !== '0') {
        current.innerHTML = current.innerHTML.slice(0, - 1)
    }
})

percentage.addEventListener('click', () => {
    let value = parseFloat(current.innerHTML)
    value = value / 100
    current.innerHTML = value.toString()
})