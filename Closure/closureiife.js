(function(){
    let variablePrivada = 0
    let privateFunction = function(){
        for(i=0; i <3; i++){
            variablePrivada = i;
            console.log(variablePrivada)
        }
    }
    let closure = (() => { 
        return {
            publicFunction: function(){
                privateFunction()
            }
        }
    })()
    closure.publicFunction()
})() //mismo efecto que closure.js, closure retorna publicFunction que ejecuta privateFunction (encapsulacion), la cual a su vez emplea valores de fuera de su scope