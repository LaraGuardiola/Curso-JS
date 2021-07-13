//!tener en cuenta los falsy values. ej: "" equivale a false

//*debido a este comportamiento si se emplea == en vez de estrictamente igual === puede dar a errores

if(![] == ""){
    console.log(typeof ![]) //*vemos que es un boolean que da false, igual que "" que es otro falsy value  -- OUTPUT: what
    console.log('what')
}else{
    console.log('que esta pasando')
} //? ESTE COMPORTAMIENTO SE LLAMA COERCION 

if(![] === ""){
    console.log('Empleando el === este mensaje no saldra porque no son estrictamente iguales')
}else{
    console.log('que esta pasando')
}   //OUTPUT: que esta pasando

console.log("" ? "es un falsy value co lo cual este mensaje no saldra" : "Hola, soy un falsy value")

