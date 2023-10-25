const numero = prompt("Elige un número con dos cifras distintas como mínimo.")

const numeroSeparado = numero.toString().split('');

const numeroDigitos = numeroSeparado.map(Number);

console.log(typeof numeroDigitos);

//Voy a ir estableciendo los parámetros. A lo último de todo, escribiré "else console.log("Refresca la página y vuelve a reprtir");" para que se tenga que repetir si el número introducido no sigue ninguno de los parámetros.
if (numeroDigitos[0] != numeroDigitos[1] != numeroDigitos[2] != numeroDigitos[3]){
    console.log(numero);
} 
