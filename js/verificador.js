function verificar() {
    var anoNasc = window.document.querySelector('#ano')
    var res= window.document.querySelector('#resultado')
    
    var data = new Date()
    var ano = data.getFullYear()
    
    
    if(anoNasc.value.length == 0 || anoNasc.value>ano){
        alert('Dados inválidos, verifique novamente')
    }else{
        idade = ano - Number(anoNasc.value)
        var sexo = window.document.getElementsByName('radSexo')
        var img = window.document.createElement('img')
        img.setAttribute('id' , 'foto')
        if(sexo[0].checked) {
            var genero = 'masculino'
            if(idade>=0 && idade<=10){
                img.setAttribute('src' , '../imagens/crianca-masculino.jpg')
            }else if(idade<=20) {
                img.setAttribute('src', '../imagens/adolescente-masculino.jpg')
            }else if(idade<=50){
                img.setAttribute('src', '../imagens/adulto-masculino.jpg')
            }else {
                img.setAttribute('src', '../imagens/idoso-masculino.jpg')
            }
        }else if(sexo[1].checked) {
            var genero = 'feminino'
            if(idade>=0 && idade<=10){
                img.setAttribute('src', '../imagens/crianca-feminina.jpg')
            }else if(idade<=20) {
                img.setAttribute('src', '../imagens/adolescente-feminino.jpg')
            }else if(idade<=50) {
                img.setAttribute('src' , '../imagens/adulto-feminino.jpg')
            }else {
                img.setAttribute('src', '../imagens/idoso-feminino.jpg')
            }
        }
        res.style.textAlign = 'center' 
        res.innerHTML = `Você é do gênero ${genero} e tem ${idade} anos de idade`
        res.appendChild(img)  
    }    
}

function limpar(){
    location.reload()
}
    