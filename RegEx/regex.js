function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

let palabros = "tres tristes tigres comen trigo en un trigal"

console.log(validateEmail('laraguardiola@outlook.com')) //true
console.log(validateEmail('laraguardiolaoutlook.com'))  //false

console.log(palabros.match(/[a-z]*es/g))

//arriba es un testeo del metodo match de las string - agrupa en una array todas las palabras que contengan es (va de la A a la Z asi que pasa por todo el alfabeto)
//lo mas facil es googlear para los regex mas comunes
//como base saber que estan declarados entre //

var array = palabros.match(/[a-z]*es/g)

console.log(`${array[0]} ${array[1]} ${array[2]} comen trigo en un trigal`)