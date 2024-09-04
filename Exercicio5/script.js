function inverterString() {
    const inputString = document.getElementById('inputString').value;
    let inputField = document.getElementById('inputString')
    
    //Começa com uma string vazia de resultado
    let stringInvertida = '';
    
    //Percorre a string de tras pra frente
    for (let i = inputString.length - 1; i >= 0; i--) {
        stringInvertida += inputString[i];
    }
    
    //Resultado
    document.getElementById('resultado').textContent = stringInvertida;

    inputField.value = ""
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        inverterString()
        event.preventDefault()
    }
})