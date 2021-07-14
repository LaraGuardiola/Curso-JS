const crearUsuario = ({user = 'Unknown',  edad = 1} = {}) => {  //crea un objeto con 2 propiedades por defecto
    let activo = false   
    return {
        user,
        edad,

        setPropiedadEncapsulada(status){
            activo = status
            return this     //devuelve this a tu contexto y puedes seguir trabajando, mas abajo ejemplo de utilidad
        },

        getPropiedadEncapsulada(){
            return activo
        }
    }
}

const usuario1 = crearUsuario({user: 'Serj', edad: 28})  //creamos usuarios mediando la function expression crearUsuario
const usuario2 = crearUsuario({user: 'Daniel'})


console.log(usuario1, usuario2)     //*{ user: 'Serj', edad: 28 } { user: 'Daniel', edad: 1 }
console.log(usuario2.setPropiedadEncapsulada(true).getPropiedadEncapsulada()) //*SE PUEDE SETTEAR Y GETTEAR DEBIDO A QUE SE HA RETORNADO EL THIS.