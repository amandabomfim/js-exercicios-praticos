function verTabuada(){
    var numero = document.querySelector('#formNumero')
    if(numero.value.length==0) {
        alert("Preencha os campos para continuar!")
    }else {
        var valorNumero = Number(numero.value)
        var resultado = document.querySelector('#resultado')
        var numTabuada = document.querySelector('#numTabuada')
        var multiplicador = 0
        resultado.innerHTML = '';

        for(multiplicador;multiplicador<=10;multiplicador++){
            var campoSelect = document.createElement('option')
            numTabuada.innerHTML = `Tabuada do ${valorNumero}`
            campoSelect.text = `${valorNumero} X ${multiplicador} = ${valorNumero*multiplicador}`
            resultado.appendChild(campoSelect)
        }
    }
}

function limpar(){
    location.reload()
}