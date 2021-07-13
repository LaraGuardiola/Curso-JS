//FORMAS DE CREACIÓN DE ARRAYS

let array = [1,3,5]
let array2 = new Array(3)   //crea la array con una length pero sin contenido a diferencia de la primera
let array3 = new Array("cadena1","cadena2","cadena3")

//Añadir un elemento a una array



//Recorrer una array

for(i = 0; i < array.length; i++){
    console.log(array[i])
}

array.push(7) //añade 7 al final del array, en el indice numero 3 [1,3,5,7]
//array.pop(5)
array.unshift(1)

console.log(array)

array3.forEach(element => console.log(element));  // array.forEach(elementOfTheArray in function) en este caso es directamente un return


'abdcefg'

let supaprearray = 'abdcefg'.split("")

console.log(supaprearray)