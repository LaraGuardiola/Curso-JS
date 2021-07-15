let closure = (() => {
    let variablePrivada = 0
    let privateFunction = function(){
        for(i=0; i <3; i++){
            variablePrivada = i;
            console.log(variablePrivada)
        }
    }
    return {
        publicFunction: function(){
            privateFunction()
        }
    }
})()



closure.publicFunction()    //permite acceder a privateFunction, la cual a su vez esta haciendo empleo de variable privada, declarada en el outer scope