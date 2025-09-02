function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        msg.innerHTML = `Bom dia, já tomou seu café da manha?<br/>Agora são ${hora} horas.`
        img.src = 'fotomanha.png'
        document.body.style.background = '#C1C6C9'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        msg.innerHTML = `Boa tarde, já fez o seu almoço?<br/>Agora são ${hora} horas.`
        img.src = 'fototarde.png'
        document.body.style.background = '#C47E4E'
    } else {
        // BOA NOITE!
        msg.innerHTML = `Boa noite, já fez um lanche?<br/>Agora são ${hora} horas.`
        img.src = 'fotonoite.png'
        document.body.style.background = '#0A2341'
    }
}