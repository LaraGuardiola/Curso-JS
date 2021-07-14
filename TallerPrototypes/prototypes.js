objeto = {} //literal object -  tambien podria ser una array ya que tambien son objetos

//objeto = Object.create(Object prototype) -  lo mismo que la linea anterior 

objeto.name = "Sergio"

console.log(objeto)

//tambien podemos añadir directamente propiedades en el objeto prototype.  ver en dev tools

Object.prototype.ejemplo = 'todos los que hereden de prototype tendran la propiedad ejemplo'

console.log(objeto)

// 

//*EJEMPLO 4 OBJETOS HEREDANDO ENTRE SI CON PROTOTYPE - Un console.log(ivysaur) en google dev tools mostraria el objeto ivysaur y todas sus herencias mostradas como __proto__ DE PROTOTIPOS.JS

let pokemon = {
    isAlive: true,
    drinks(){
        console.log('glup glup')
    },
    setFinalMove(move){
        this.move = move
        return this //*es buena practica devolver this porque permite continuar trabajando con el objeto (puesto que devuelve el contexto de ejecución)
    }
}

let bulbasaur = {
    type: 'Grass',
    power: 50,
    __proto__: pokemon  //*mediante __proto__ bulbasaur hereda de pokemon
}

let ivysaur = {         //*hereda de bulbasaur que a su vez hereda de pokemon, con lo cual podemos acceder a sus propiedades 
    power: 100,
    __proto__: bulbasaur
}

let venusaur = Object.create(pokemon)   //*otra forma de hacer que un objeto herede de otro (como prototipo)
venusaur.power = 500

console.log(bulbasaur.isAlive)
bulbasaur.drinks()
console.log(ivysaur.power)
console.log(ivysaur.type)
ivysaur.drinks()
console.log(venusaur.ejemplo) //*OUTPUT: todos los que hereden de prototype tendran la propiedad ejemplo
console.log(venusaur.setFinalMove('Rayo Solar'))