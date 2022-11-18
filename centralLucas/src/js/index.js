var respostaSim = document.getElementById('respostaSim')
var botaoSim = document.getElementById('Sim')
var respostaNao = document.getElementById('respostaNao')
var botaoNao = document.getElementById('Nao')

function clickSim() {
    botaoNao.classList.remove('btn-danger')
    botaoNao.classList.add('btn-light')
    botaoNao.disabled = true

    respostaSim.style.display = 'block'
}

function clickNao() {
    botaoSim.classList.remove('btn-success')
    botaoSim.classList.add('btn-light')
    botaoSim.disabled = true

    respostaNao.style.display = 'block'
}

var answer = document.getElementById('answer')
function resetResposta() {
    var ariaExpanded = answer.getAttribute("aria-expanded");    
    
    if(ariaExpanded = true) {

        botaoSim.classList.remove('btn-light')
        botaoSim.classList.add('btn-success')
        botaoSim.disabled = false
        respostaSim.style.display = 'none'

        botaoNao.classList.remove('btn-light')
        botaoNao.classList.add('btn-danger')
        botaoNao.disabled = false
        respostaNao.style.display = 'none'
    }
}

function transitionForm() {
    var divAI = document.getElementsByClassName('mainRigth')
    var divEmail = document.getElementsByClassName('mainEmail')

    Array.from(divEmail).forEach((divEmail) => {
        Array.from(divAI).forEach((divAI) => {
            if(divEmail.style.display === 'none') {
                divEmail.style.display = 'block'
                divAI.style.display = 'none'
            } else {
                divEmail.style.display = 'none'
                divAI.style.display = 'block'
            }
        })
    })  
}

function sendProtocol() {
    var name = document.getElementById('-name')
    if(name.values != '') {
        console.lof('Obrigado sr(a) ' + name.value + 'seu protocolo foi criado com sucesso!')
    }
}