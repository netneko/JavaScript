"use strict"

/*const video=document.querySelector('.video');
video.addEventListener("ended",function ()
 {
    let email=prompt("Escribe tu mail para recibir mas videos","nombre@mail.com");

    if (email==null || email=="") {
        console.log("Sin datos");
    } else {
        console.log(email);
    }
    });
*/

// Cadenas de texto
var pais='Argentina';
var mensaje='Esta es una Cadena de texto';
var longuitud;
var comida=new String('Empanadas'); //Esto lo crea como un array de string
//var resultado=mensaje.indexOf('es');// el metodo search es muy parecido
//var resultado=mensaje.search(/ca/i);
longuitud=mensaje.length //me devuelve la longuitdu de la cadena
//console.log(longuitud);
//var resultado=mensaje.match(/es/); //te busca la plabra es en una cadena con g te aparecen todas las incidencias. Con i te lo hace in case sensitive
var resultado=mensaje.substr(5,7);
//substr empieza a contar desde 0 y te recorta los caracteres desde el 5 al 7
//substing arranca desde el 5 y te cuenta 7
console.log(resultado);
//starwith devuelve un boolean si la cadena empieza con el param pero tambien se puede
//combinar con indexof para que empieze dsde otra posicion de la cadena
//que no sea el ppo
//includes devuelve un boolean sila cadena de textotiene la palabra pasada x param
//tambien se le puede pasar por parametro con , un espacio desde donde tiene
//que empezar a buscar
//el metodo repeat(n) te repite la cadena n veces
//metodo replace(a,b) reemplaza a x b

