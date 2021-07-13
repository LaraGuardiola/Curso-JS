

//*ENTENDIENDO MEJOR THIS

var precioItems = {
    teclado: 50,
    raton: 15
}

//*Primer caso, aplicacion normal sin especificar a que apunta this

function aplicaDescuento(objeto){
    return [objeto] * 0.9
}

var descuentillo = aplicaDescuento(precioItems.teclado)
console.log(descuentillo)

//*Segundo caso, MÉTODO CALL. especificando a que referencia apunta this, en este caso, al objeto precioItems. todo esto mediante el metodo call aplicable a functions expressions (funciones en variables)

var applyDiscount = function(objeto){
    return this [objeto] * 0.9
}

var descuentazo = applyDiscount.call(precioItems,"raton")
console.log(descuentazo)

//*Tercer caso, MÉTODO BIND. Literalmente bindea a una function expresion la referencia a la que apunta this

const person = {
    name: 'Bruce',
    lastname: 'Wayne',
    fullname: function() {
        return this.name + ' ' + this.lastname
    }
}
  
const print = function(greet, adj) {                        //function expression que emplea  la referencia this(objeto en su contexto de ejecucion), la cual este caso especificamos posteriormente bindeando
    console.log(greet, this.fullname(), 'eres', adj)        /*buscara la referencia fullname() en su contexto de ejecución sin embargo dara error sin bindear porque no esta*/
}                                                           //declarada en su contexto, si no en el outer scope

let printBindeado = print.bind(person)                      //una vez bindeamos this apuntara correctamente al contexto de ejecucion deseado (el de person en este caso)

printBindeado('Saludos','feo')

//*Cuarto caso, MÉTODO APPLY. aplica el contexto de otra referencia en la referencia seleccionada, en este caso a persona le aplicamos actor

const actor = {
    name: 'Clint',
    lastname: 'Eastwood'
}

const result = person.fullname.apply(actor);
console.log(result); // esto es llamado préstamo de funcion