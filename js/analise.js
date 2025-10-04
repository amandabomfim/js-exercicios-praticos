var campo1 = document.querySelector('#campo1')

var lista = []

function adicionar(){
    var numero = Number(campo1.value)

    if(campo1.value.length==0) {
        alert('Digite os valores para continuar')
    }else if(campo1.value<1 || campo1.value>100) {
        alert('Digite números entre 1 e 100')
    }else if(lista.indexOf(numero) != -1) {
        alert('Número reptido')
    }else {
        lista.push(numero)
        console.log(lista)

        var seletor = document.querySelector('#seletor')
        var valor1 = document.createElement('option')
        valor1.innerHTML = `Valor ${numero} adicionado`
        seletor.appendChild(valor1)
        resultado.innerHTML = ''
    }
    campo1.value = ''
    campo1.focus()
}

function finalizar(){
    if(lista.length==0) {
        alert('Adicione os valores para finalizar')
    }else {
        var resultado = document.querySelector('#resultado')
        var maior = 0
        var menor = 100
        var soma = 0
        var media = 0

        resultado.innerHTML = `\u{2714} \u{FE0F}Ao todo temos ${lista.length} números cadastrados`

        for(let pos in lista) {
            if(lista[pos]>maior) {
                maior = lista[pos]
            }
        }
        resultado.innerHTML += `</br></br>\u{2714} \u{FE0F}O maior numero é ${maior}`
        
        
        for(let pos in lista){
            if (lista[pos]<menor){
                menor= lista[pos]
            }
            
        }
        resultado.innerHTML += `</br></br>\u{2714} \u{FE0F}O menor é ${menor}`

        
        for(let pos in lista){
            soma += lista[pos]  
        }
        resultado.innerHTML += `</br></br>\u{2714} \u{FE0F}A soma dos números é ${soma} </br>` 
        
        for(let pos in lista){
            media = soma/lista.length
        }
        resultado.innerHTML += `</br>\u{2714} \u{FE0F}A média dos números é ${media} </br>` 
    }
}

function limpar(){
    location.reload()
}