//User profile

const userName = prompt ("Ingresa tu nombre de usuario");
const edad = prompt ("Ingresa tu edad");


let peliculas = [];
 for (i = 0; i < 3; i++){
     let pelicula = prompt("Ingresa tu peli fav");
     peliculas.push(pelicula);
 }

console.log(`La peliculas favorita del ${userName} de ${edad} años son ${peliculas}`);
