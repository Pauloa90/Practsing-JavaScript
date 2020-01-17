function loading(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date();
    hora = data.getHours();
   
    msg.innerHTML = `Agora sao ${hora} horas` 
    if (hora >= 0 && hora < 12) {
        img.src="morning.png"
        document.body.style.background = '#EEDDC0'
    } else if (hora >=12 && hora < 18){
        img.src="afternoon.png"
        document.body.style.background =  '#BD8A6F'
    } else {
        img.src="evening.png"
        document.body.style.background = '#5F524A'
    }
}