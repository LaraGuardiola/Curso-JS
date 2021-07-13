let array = [2,4,8,16,32]

//mapeo con diferentes formas (funcion normal y arrow) - la funcion recibe como parametro los valores del array a mapear empezando en el indice 0

arrayMultipliedBy2 = array.map((elementOfTheArray) => elementOfTheArray * 2)
arrayMultipliedBy3 = array.map(function(elementOfTheArray){ return elementOfTheArray * 3})
arrayMultipliedBy4 = array.map((elementOfTheArray) => ({elem: elementOfTheArray * 4})) //esta como objeto

console.table(arrayMultipliedBy2)
console.table(arrayMultipliedBy3)
console.table(arrayMultipliedBy4)