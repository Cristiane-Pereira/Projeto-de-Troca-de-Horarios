function carregar() {
    var msg = window.document.getElementById('msg')
    var img  = window.document.getElementById('imagem')
    var data = new Date()
    var hora =  data.getHours()
    msg.innerHTML = `<p>Agora são ${hora} horas.</p>`

if(hora >= 1 && hora < 12) {
         msg.innerHTML +='<h1>Bom Dia!</h1>'
         img.src = './img/Amanhecer.png'
         window.document.body.style.background = '#FF9A16'

}else if(hora >= 12 && hora <= 16){
         msg.innerHTML +='<h2>Boa tarde!</h2>'
         img.src = './img/Entardecer.png'
         window.document.body.style.background = '#C2565B'

}else {
         msg.innerHTML +='<h2>Boa Noite!</h2>'
         img.src = './img/Anoitecer.png'
         window.document.body.style.background = '#02254B'
  }


}