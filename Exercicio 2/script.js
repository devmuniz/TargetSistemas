function isFibonacci() {
    let a = 0
    let b = 1
    let fib = 0
    let num = parseInt(document.getElementById('inputNum').value);
    let result = document.getElementById('result')
    let inputField = document.getElementById('inputNum')

    //Se o numero for 0 ou 1, ele ja encerra a função aqui
    if (num === 0 || num === 1) {
        result.innerHTML = `O número ${num} pertence à sequência de Fibonacci.`
        return
    }

    //Faz a sequencia até que o valor seja maior ou igual o numero informado
    while (fib < num) {
        fib = a + b
        a = b
        b = fib
    }

    //Se o valor é igual ou não
    if (fib === num) {
        result.innerHTML = `O número ${num} pertence à sequência de Fibonacci.`
    } else {
        result.innerHTML = `O número ${num} NÃO pertence à sequência de Fibonacci.`
    }

    //Limpar o valor do input
    inputField.value = ""
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        isFibonacci()
        event.preventDefault()
    }
})