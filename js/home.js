function carregar () {
    var imgFundo = window.document.body
    var textoHora = window.document.querySelector('#textoHora')
    var data = new Date();
    var horario = data.getHours();
    var minutos = data.getMinutes();

   const basePath = '/js-exercicios-praticos';

    if (horario >= 0 && horario <= 12) {
        textoHora.innerHTML = `Bom dia! Agora são ${horario} horas e ${minutos} minutos. \u{1F31E}`;
        imgFundo.style.background = `url('${basePath}/imagens/manha.jpg')`;
    } else if (horario <= 17) {
        textoHora.innerHTML = `Boa tarde! Agora são ${horario} horas e ${minutos} minutos. \u{1F307}`;
        imgFundo.style.background = `url('${basePath}/imagens/tarde.jpg')`;
    } else {
        textoHora.innerHTML = `Boa noite! Agora são ${horario} horas e ${minutos} minutos. \u{1F319}`;
        imgFundo.style.background = `url('${basePath}/imagens/noite.jpg')`;
    }


    textoHora.style.textAlign = 'center'
    imgFundo.style.backgroundSize = "cover";
    imgFundo.style.backgroundPosition = "center"; 
    imgFundo.style.backgroundRepeat = "no-repeat";
    
}

document.getElementById("ano").textContent = new Date().getFullYear();