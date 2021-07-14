const A = {name: '"sergio'}
const B = {age: 28}
const C = {...A,...B} //*descansamos A y B en C
const D = Object.create(B)  //esto es la composicion de objetos, D se crea debido a que B se delega como prototipo

console.log(C)      //*OUTPUT: { name: '"sergio', age: 28 }

console.log(B)      //*OUTPUT: { age: 28 }