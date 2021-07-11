let date = new Date()

let year = date.getFullYear()
let month = date.getMonth() //MES SIEMPRE COMIENZA DE 0 (ENERO ES EL MES 0)
let day = date.getDate()


console.log(`Hoy es ${day} de ${month + 1} del año ${year}`)