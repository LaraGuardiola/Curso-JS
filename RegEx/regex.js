function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
console.log(validateEmail('laraguardiola@outlook.com')) //true
console.log(validateEmail('laraguardiolaoutlook.com'))  //false

//lo mas facil es googlear para los regex mas comunes

var array = ['uno', 'dos', 'tres', 'cuatro', 'cinco']

console.log(array.length - 1)