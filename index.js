var visor = document.getElementById('visor')

visor.onkeydown = (e) => { 
    if (!(e.key == 'ArrowLeft' || e.key == 'ArrowRight')) {
        return false
    }
}

// Definindo os eventos dos botões de número
var elementosNumero = document.getElementsByClassName('numero')

function atribuirEventoElementosNumero(elementos) {
    Array.from(elementos).forEach(elemento => {
        elemento.addEventListener('click', () => {
            if (visor.value == '0') { visor.value = '' } 

            if (visor.value.length <= 90) { visor.value += elemento.value } 
        })
    });
}

atribuirEventoElementosNumero(elementosNumero)


// Definindo o evento do botão de limpar
document.getElementById('limpar').addEventListener('click', () => {
    visor.value = '0'
    hasPonto    = false
    hasOperador = false
})

// Definindo o evento do botão de ponto (.)
var hasPonto = false

document.getElementById('ponto').addEventListener('click', () => {
    if (!hasPonto) { visor.value += '.' }
    hasPonto = true
})

// Definindo o evento dos botões de operação
var hasOperador       = false
var elementosOperador = document.getElementsByClassName('operador')

function atribuirEventoElementosOperador(elementos) {
    Array.from(elementos).forEach(elemento => {
        elemento.addEventListener('click', () => {
            let operador = elemento.value

        })
    })
}