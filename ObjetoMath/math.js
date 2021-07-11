let pi = Math.PI //propiedad estatica con el valor del numero PI (una constante por la nomenclatura)

console.log(pi.toFixed(4)) //marca un maximo de decimales toFixed()

//devuelve el minimo y el maximo de un seguido de numeros aceptados como argumentos

console.log(Math.min(2,1,5,-1,4)) //-1
console.log(Math.max(2,1,5,-1,4)) // 5

//mas metodos en la documentacion de JS como round, floor, ceil, etc

//método para crear un random

let aleatorio = Math.random(); //entre 0 y 1

console.log(Math.floor(Math.random() * 100)) //imprime en consola un num del 0 al 100