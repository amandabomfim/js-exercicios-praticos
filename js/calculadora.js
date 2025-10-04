var btnEnviar = window.document.querySelector('#btnEnviar')
btnEnviar.addEventListener('click', calcular)

function calcular() {
    var n1 = window.document.querySelector('#numero1')
    var n2 = window.document.querySelector('#numero2')
    var opcao = window.document.getElementsByName('opcao')
    var resultado = window.document.querySelector('#resultado')
    if(n1.value.length==0 || n2.value.length==0) {
        alert('Preencha os campos para realizar uma operação.')
    }else {
        if(opcao[0].checked){
            var soma = Number(n1.value) + Number(n2.value)
            resultado.innerHTML = `A soma entre os numeros ${n1.value} e ${n2.value} tem como resultado: ${soma}`
        }else if(opcao[1].checked){
            var subtracao = Number(n1.value) - Number(n2.value)
            resultado.innerHTML = `A subtração entre os numero ${n1.value} e ${n2.value} tem como resultado: ${subtracao}`
        }else if(opcao[2].checked){
            var mutiplicacao = Number(n1.value) * Number(n2.value)
            resultado.innerHTML = `A multiplicação entre os numero ${n1.value} e ${n2.value} tem como resultado: ${mutiplicacao}`
        }else if (opcao[3].checked) {
            var divisao = Number(n1.value) / Number(n2.value)
            resultado.innerHTML = `A divisão entre os numero ${n1.value} e ${n2.value} tem como resultado: ${divisao}`
        }else {
            alert('Operação inválida')
        }     
    }
    resultado.style.textAlign= 'center'
}

function limpar(){
    location.reload()
}