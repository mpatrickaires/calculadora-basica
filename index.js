// Definindo o comportamento do visor
var visor = document.getElementById('visor')

visor.onkeydown = (e) => { 
    if (!(e.key == 'ArrowLeft' || e.key == 'ArrowRight')) {
        return false
    }
}

// Definindo os eventos dos botões de número
function atribuirEventoElementosNumero(elementos) {
    Array.from(elementos).forEach(elemento => {
        elemento.addEventListener('click', () => {
            if (visor.value == '0') { visor.value = '' } 

            if (visor.value.length <= 90) { visor.value += elemento.value } 
        })
    });
}

var elementosNumero = document.getElementsByClassName('numero')
atribuirEventoElementosNumero(elementosNumero)


// Definindo o evento do botão de limpar
document.getElementById('limpar').addEventListener('click', () => {
    visor.value = '0'
    hasPonto = false
    operador = ''
    primeiroValor = ''
})

// Definindo o evento do botão de ponto (.)
var hasPonto = false

document.getElementById('ponto').addEventListener('click', () => {
    if (!hasPonto) { visor.value += '.' }
    hasPonto = true
})

// Definindo o evento dos botões de operação
var operador = ''
var primeiroValor = ''
var segundoValor = ''

function atribuirEventoElementosOperador(elementos) {
    Array.from(elementos).forEach(elemento => {
        elemento.addEventListener('click', () => {
            operador = elemento.value
            primeiroValor = visor.value
            visor.value = '0'
        })
    })
}

var elementosOperador = document.getElementsByClassName('operador')
atribuirEventoElementosOperador(elementosOperador)

// Definindo o evento do botão de igual (=)
var resultado = ''

document.getElementById('igual').addEventListener('click', () => {
    if (operador.length === 0) { return false }

    segundoValor  = visor.value

    switch (operador) {
        case '+': 
            resultado = primeiroValor + segundoValor 
            break
        
        case '-':
            resultado = primeiroValor - segundoValor 
            break
        
        case '*':
            resultado = primeiroValor * segundoValor 
            break
        
        case '/':
            resultado = primeiroValor / segundoValor 
            break
    }

    primeiroValor = ''
    segundoValor = ''

    visor.value = resultado
})