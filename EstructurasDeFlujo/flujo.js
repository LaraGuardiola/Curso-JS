const GASTO = 100

//*Clásico if-else

function nivel(queNivel){
    if(queNivel > 100){
        console.log("Te pasas")
    }else{
        console.log("Lo normal")
    }
}

//*Con operador ternario

function solicitarPresupuesto(presupuesto){
    presupuesto = (presupuesto - GASTO) > 0    //*devuelve un boolean
    let decision = presupuesto ?                      //*si es true 'Vas sobrao', si es false 'No llegas' 
        'Vas sobrao'
        :'No llegas'
    return decision
}

//*Directamente el operador ternario en el return

function solicitarPresupuestoV2(presupuesto){
    presupuesto = (presupuesto - GASTO) > 0
    return presupuesto ? 'Vas sobrao' : 'No llegas'
}

console.log(nivel(90))
console.log(solicitarPresupuesto(80))
console.log(solicitarPresupuestoV2(120))

//*Con un switch

function precioSegunColor(color){
    let precio;
    switch(color){
        case 'negro':
            precio = 10
            break
        case 'generico':        //generico y rosa comparten precio
        case 'rosa':
            precio = 5
            break
        case 'blanco':
            precio = 50
            break
        case 'oro':
            precio = 500
            break
        default:                //cualquier otro color recibe precio por defecto 1
            precio = 1
    }
    return precio
}

console.log(precioSegunColor('generico'))

//*Con una estructura de datos

function precioSegunColor2(color){
    let pricesByColor = {
        negro : 10,
        blanco : 20,
        rosa : 5,
        oro : 100
    }
    return pricesByColor[color.toLowerCase()]
}

console.log(precioSegunColor2('oro'))