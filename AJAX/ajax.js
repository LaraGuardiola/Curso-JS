//* INTRO AJAX mediante promesa (ES6 en adelante, es el método mas sencillo)


//!NO ME FUNCIONA  :net ERR_FAILED
/*fetch('https://api.chucknorris.io/jokes/random')
    .then((respuesta) => respuesta.json())
    .then(function(datos){
        console.table(datos)
})*/

/*// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.chucknorris.io/jokes/random', true)

request.onload = function () {
  // Begin accessing JSON data here
}

// Send request
request.send()

var data = JSON.parse(this.response)

if (request.status >= 200 && request.status < 400) {
    data.forEach((movie) => {
      console.log(movie.title)
    })
}else {
    console.log('error')
}*/

/*var request = new XMLHttpRequest()

request.open('GET', 'https://api.chucknorris.io/jokes/random', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach((frase) => {
      console.log(frase.value)
    })
  } else {
    console.log('error')
  }
}

request.send()*/


//solucion en node.js
var http = require("https");
    url = "https://api.chucknorris.io/jokes/random";

// get is a simple wrapper for request()
// which sets the http method to GET
var request = http.get(url, function (response) {
    // data is streamed in chunks from the server
    // so we have to handle the "data" event    
    var buffer = "", 
        data,
        route;

    response.on("data", function (chunk) {
        buffer += chunk;
    }); 

    response.on("end", function (err) {
        // finished transferring data
        // dump the raw data
        console.log(buffer);
        console.log("\n");
        data = JSON.parse(buffer);
        route = data.routes[0];

        // extract the distance and time
        console.log(data.value);
    }); 
}); 
