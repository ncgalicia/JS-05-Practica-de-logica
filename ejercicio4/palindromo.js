let frase = prompt(`Ingresa tu frase:`);
//let palabras = frase.split('');
let palindromo = true
console.log(frase)
//palabras = palabras.replace(/\s/g, '').toLowerCase();
frase = frase.replace(/\s/g, '').toLowerCase();

/*for(let i=0; i < palabras.length /2; i++){
    
    if(palabras[i] !== palabras[palabras.length -1 -i]){
        palindromo = false;
        break;    
      
    }
}*/

for(let i=0; i < frase.length /2; i++){
    
    if(frase[i] !== frase[frase.length -1 -i]){
        palindromo = false;
        break;    
      
    }
    
}

if(palindromo ){
    console.log("Es palindromo")
}else{
    console.log("No palindromo")
}
  