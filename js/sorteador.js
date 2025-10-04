let form1 = document.querySelector("#qntd-num")
let form2 = document.querySelector("#num1")
let form3 = document.querySelector("#num2")


function sortear() {
    let res = document.querySelector("#resultado")

    let numerosSorteados = 0

    if(form1.value.length==0 ||form2.value.length==0|| form3.value.length==0){
        alert('Para continuar, preencha os campos vazios!')
    }else {
        let campo1 = Number(form1.value)
        let campo2 = Number(form2.value)
        let campo3 = Number(form3.value)

        res.innerHTML = '\u{2728} Parabéns! Você tirou o(s) número(s): '
        res.style.padding= '10px'

        for(numerosSorteados; numerosSorteados<campo1; numerosSorteados++){
            if(campo3>campo2){
                var valorSorteado = Math.floor(Math.random() * (campo3 - campo2 + 1)) + campo2;
            }else if(campo2>campo3){
                var valorSorteado = Math.floor(Math.random() * (campo2 - campo3 + 1)) + campo3;
            }
            
            res.innerHTML +=  `<br> \u{1F43B} ${valorSorteado}`
        }   
    }
}

function limpar(){
    location.reload()
}