let pokemon = {
    isAlive: true,
    drinks(){
        console.log('glup glup')
    }
}

let bulbasaur = {
    type: 'Grass',
    power: 50,
    __proto__: pokemon  //*mediante __proto__ bulbasaur hereda de pokemon
}

let ivysaur = {         //hereda de bulbasaur que a su vez hereda de pokemon, con lo cual podemos acceder a sus propiedades 
    power: 100,
    __proto__: bulbasaur
}
console.log(bulbasaur.isAlive)
bulbasaur.drinks()
console.log(ivysaur.power)
console.log(ivysaur.type)
ivysaur.drinks()

