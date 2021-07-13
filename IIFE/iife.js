//INMEDIATELY INVOKED FUNCTION EXPRESION - que se autoinvocan vamos :) - mejor testear en google dev tools

(function saludos(){
    let mensajeEncapsulado = "No puedes leerme"
})()

let mensajeNoEncapsulado = "Puedes leerme :("

let iife = (function saludo(){
    let mensajeEncapsulado2 = "You can read me, but you need a function expression first"
    return {
        mensaje:mensajeEncapsulado2
        }
})()