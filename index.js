// Definindo o comportamento do visor
var visor = document.getElementById('visor')

visor.onkeydown = (e) => { 
    if (e.key !== 'ArrowLeft' || e.key !== 'ArrowRight') {
        return false
    }
}

function visorValorNumerico() { 
    return parseFloat(visor.value)
}

// Definindo os eventos dos botões de número
atribuirValorVisor = function(valor) {
    if (visor.value == '0') { visor.value = '' }
            
    if (resultado !== '') {
        visor.value = ''
        resultado = ''
    }

    if (visor.value.length <= 20) { visor.value += valor }
}

function atribuirEventoElementosNumero(elementos) {
    Array.from(elementos).forEach(elemento => {
        elemento.addEventListener('click', () => {
            atribuirValorVisor(elemento.value)
        })
    });
}

var elementosNumero = document.getElementsByClassName('numero')
atribuirEventoElementosNumero(elementosNumero)


// Definindo o evento do botão de limpar
document.getElementById('limpar').addEventListener('click', () => {
    visor.value = '0'
    operador = ''
    primeiroValor = ''
})

// Definindo o evento do botão de ponto (.)
function adicionarPonto() {
    if (!visor.value.includes('.')) { visor.value += '.' }
}

document.getElementById('ponto').addEventListener('click', () => {
    adicionarPonto()
})

// Definindo o evento dos botões de operação
var operador = ''
var primeiroValor = ''

function atribuirOperador(valor) {
    operador = valor
    primeiroValor = visorValorNumerico()
    visor.value = '0'
}

function atribuirEventoElementosOperador(elementos) {
    Array.from(elementos).forEach(elemento => {
        elemento.addEventListener('click', () => {
            atribuirOperador(elemento.value)
        })
    })
}

var elementosOperador = document.getElementsByClassName('operador')
atribuirEventoElementosOperador(elementosOperador)

// Definindo o evento do botão de igual (=)
var segundoValor = ''
var resultado = ''

document.getElementById('igual').addEventListener('click', () => {
    if (operador.length === 0) { return false }

    segundoValor = visorValorNumerico()

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

    visor.value = resultado
    primeiroValor = segundoValor
})

// Definindo o evento de utilizar a calculadora através dos botões do teclado
function isOperador(valor) {
    switch (valor) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true
        default:
            return false
    }
}

document.onkeydown = (e) => {
    var valorTecla = e.key

    if (!isNaN(valorTecla) && !isNaN(parseFloat(valorTecla))) { 
        atribuirValorVisor(valorTecla)
    }
    else if (valorTecla === '.') {
        adicionarPonto()
    }
    else if (isOperador(valorTecla)) {
        atribuirOperador(valorTecla)
    }
}