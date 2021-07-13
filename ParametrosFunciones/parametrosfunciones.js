function showElements(objeto){
    for(let key in objeto){
        console.log(objeto[key])
    }
}

//la gracia de emplear objetos es que no necesitas determinar la cantidad de parametros que recibe la función(un objeto es suficiente) -- SALDRA EN CONSOLA COMO STRING

//showElements({x:1,y:2,z:10})
showElements({Ferrari: 'Veneno', añoFabricacion: '2019'})

//o creando una clase la cual tiene un constructor que crea un objeto segun lo que declaremos  -- SALDRA EN CONSOLA COMO UN OBJETO

function Coche(tipo){
    this.tipo=tipo
}

let carro = new Coche({Lamborghini: 'Aventador', añoFabricacion: '2021'});
showElements(carro)