///* PREGUNTAS A HACERSE //
    //? 1. ¿Tengo que iterar sobre todos los elementos?
    //? 2  ¿Cual es mi estructura de datos sobre la que voy a iterar  

//* BUCLES

let array = [2,4,5,7,10,11]

//* for LOOP

for(i = 0; i < array.length; i++){
    console.log(array[i])
}

//* forEach LOOP con y sin arrow function (APLICABLE A ARRAYS)

array.forEach((elemento) => console.log(elemento))
array.forEach(function loop(elemento){ console.log(elemento)})

//* for of LOOP (APLICABLE A ARRAYS)

let array2 = array.map((values) => values * 2) //creo una nueva array para facilitar la visualizacion del objeto

for (value of array2){
    console.log(value)
}

//* for in LOOP (APLICABLE A OBJETOS)

let objeto = {
    tipo: 1,
    edad: 25,
    estudios: 'dudosos'
}

for (key in objeto){
    console.log(objeto[key])
}

//EJEMPLO DE FILTRO QUE PUEDE SERVIR PARA ITERAR Y FILTRAR POR EJEMPLO. En este caso filtra los numeros pares y los saca en otra array

function pares(elementoArray){
    return elementoArray % 2 == 0
}

function parOImpar(elementoArray){
    return elementoArray
        ? function(elementoArray){              //TRUE DEVUELVE LOS PARES
            return (elementoArray % 2) == 0
        }
        : function(elementoArray){              //FALSE DEVUELVE LOS IMPARES
            return (elementoArray % 2) != 0
        }
}

let arrayPares = array.filter(pares)
console.log(arrayPares)
console.log(array.filter(parOImpar(false))) //filter siempre pide una funcion, en este caso enviando un bool como parametros podemos escoger el camino logico a si queremos pares o impares

