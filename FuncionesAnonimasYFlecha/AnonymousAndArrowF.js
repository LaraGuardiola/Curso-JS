let diHola = function(name = 'Mundo'){
    return `Hola ${name}`
}
console.log(diHola())
console.log(diHola('Campeón'))

let diHolaFlecha = (name) => `Hola ${name}`
let diAdiosFlecha = (name) => {return `Adios ${name}`}

console.log(diHolaFlecha('Señor'))
console.log(diAdiosFlecha('Mozo'))



    