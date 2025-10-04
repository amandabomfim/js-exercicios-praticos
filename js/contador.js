function contar() {
    var inicio = document.querySelector('#formInicio')
    var fim = document.querySelector('#formFim')
    var passo = document.querySelector('#formPasso')
    var resultado = document.querySelector('#resultado')


    if(inicio.value.length==0 || fim.value.length==0 || passo.value.length==0){
        alert('Preencha todos os campos para continuar')
    }else if(passo.value==0){
        alert('O campo "Passo" não pode ser zero')
    }else {
        resultado.innerHTML = '';

        var valorInicio = Number(inicio.value)
        var valorFim = Number(fim.value)
        valorPasso = Number(passo.value)
        
        if(valorInicio<=valorFim){
            for(valorInicio;valorInicio<=valorFim;valorInicio+=valorPasso){
                if(valorInicio + valorPasso > valorFim){
                    resultado.innerHTML= resultado.innerHTML + `${valorInicio} \u{1F3C1}`
                }else{
                    resultado.innerHTML= resultado.innerHTML + `${valorInicio} \u{1F449}`
                }
            }
        }else{
            for(valorInicio;valorInicio>=valorFim;valorFim,valorInicio-=valorPasso){
                if(valorInicio - valorPasso < valorFim){
                    resultado.innerHTML= resultado.innerHTML + `${valorInicio} \u{1F3C1}`
                }else{
                    resultado.innerHTML= resultado.innerHTML + `${valorInicio} \u{1F449}`
                }
        }   }
    }
}

var botaoLimpar = document.querySelector('#limpar');

botaoLimpar.addEventListener('click', function() {
        document.querySelector('#formInicio').value = '';
        document.querySelector('#formFim').value = '';
        document.querySelector('#formPasso').value = '';
        document.querySelector('#resultado').innerHTML = '';
    });