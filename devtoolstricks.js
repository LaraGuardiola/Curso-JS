//prueba con google dev tools para conseguir todos los enlaces de una web

[].slice.call(document.querySelectorAll('a[href]')).map((el) => el.href)

//[].slice.call(document.querySelectorAll('a[href]')) hasta aqui basicamente le estoy diciendo que de una array vacia haga una copia que contenga todos los nodos del DOM
//que contenga la web con la etiqueta href y atributo href. .map((el) => el.href) mapea todos los elementos  y retorna las href (url)


//monitorea los eventos resize de window
monitorEvents(window,'resize')

//añade un eventListener al document que (reciclando ejercicio anterior de Eventos) que cambia a un color aleatorio en el body

document.addEventListener('click',function(evento){
    document.body.style.backgroundColor = `rgb(${Math.round(Math.random() * maxrgb)},${Math.round(Math.random() * maxrgb)},${Math.round(Math.random() * maxrgb)})`
})