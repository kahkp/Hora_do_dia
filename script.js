function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   //var hora = 15
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'morning.jpg'
        document.body.style.background = '#D7DF01'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'afternoon.jpg'
        document.body.style.background = '#8A4B08'
    } else {
        //BOA NOITE!
        img.src = 'red_moon.jpg'
        document.body.style.background = '#151515'
    }
}
