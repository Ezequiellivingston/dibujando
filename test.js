const socket = io()

function dibujarTo(x1, y1, x2, y2){

    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = grosor
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
    ctx.closePath()
}

function enviar(x1, y1, x2, y2) {
    let data = {x1, y1, x2, y2}
    socket.emit('chat_message', data);
}


socket.on('chat_message', (msg) => {
    dibujarTo(msg.x1,msg.y1,msg.x2,msg.y2)
    /* let chat = document.getElementsByClassName('textoChat')
    chat[0].innerHTML = chat[0].outerHTML + `<p>${msg}</p>` */
});

function dibujar(x1, y1, x2, y2) {
    enviar(x1,y1,x2,y2)
}
