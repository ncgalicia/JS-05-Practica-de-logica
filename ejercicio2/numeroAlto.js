// Numero más alto (Highest number)

//Arreglo vacio para guardar los numeros ingresados por el usuario
let array=[];

//El for va ir recorriendo para que el usuario pueda ingresar los 10 numeros
for (let i = 0; i < 10; i++) {
    //Aparece un cuadro de textp 10 veces para ingresar el numero
    let numeros = parseInt(prompt(`Ingresa el número ${i+1}:`));
    //Guarda cada numero ingresado
    array.push(numeros);
}
console.log("Los numero ingresados son", array)


let temporal = array[0];
for(let i = 0; i < array.length; i++){
    if(array[i] > temporal){
        temporal = array[i];
    }
    }

console.log(`El numero mayor es: ${temporal}`)