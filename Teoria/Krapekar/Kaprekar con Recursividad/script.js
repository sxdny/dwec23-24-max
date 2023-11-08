// Guardamos el número de Kaprekar.
const numeroKaprekar = 6174;

// Número otorgado por el usuario.
let numeroPedido;

// Pasos realizados.
let pasos = 0;



// Pedimos al usuario que introduzca el número y lo capturamos. Será una cadena.
let promptText = "Elija cualquier número de cuatro cifras que posea, como mínimo, dos cifras distintas";

// Lanzamos el prompt.
numeroPedido = prompt(promptText);


//Función para poder validar el número entregado por el usuario.
if(!validaNumero(numeroPedido)) {

  console.log("El número introducido no es válido.");
} else {

  while(numeroPedido != numeroKaprekar) {

    // Llamamos a la función kaprekar.
    numeroPedido = kaprekar(numeroPedido);

    // Aumentamos el número de pasos.
    pasos++;

    // Evitamos bucles infinitos i/o innecesarios.
    if(pasos > 7 ) {
      console.log("Número de pasos superado, algo no está bien...");
      break;
    }

    // Si el número obtenido es el de Kaprekar, informamos
    // de los pasos realizados.
    if(numero == numeroKaprekar) {
      console.log("Pasos realizados: " + pasos);
    }
  }
}



/*
  Función que realizará sobre el número del usuario las operaciones necesarias para llegar al número Kaprekar.
  Devolviendo así, el número que obtendremos.
*/
function kaprekar(numeroPedido) {

    // Creamos un array para poder tratar el número dígito a dígito.
    let arrayNP = new Array();

    // Variables para guardar los números a restar.
    let mayor, menor;

    // Añadimos el número al array.
    for(let i = 0; i < numeroPedido.length; i++) {
        arrayNP.push(numeroPedido.charAt(i));
    }

    // Ordenamos el array con sort. Quedando de menor a mayor.
    arrayNP.sort();

    // Guardamos en la variable "menor" el contenido del array "unido".
    menor = uneDigitos(arrayNP);

    // Le damos la vuelta al array y, por lo tanto, al número. |arrayNP.reverse();|
    arrayNP = daleLaVuelta(arrayNP);

    // Guardamos en la variable "mayor" el contenido del array.
    mayor = uneDigitos(arrNumero);

    // Realizamos la resta.
    numero = mayor - menor;

    console.log(mayor + " - " + menor + " = " + numero);

    return formateaNumeroACuatroDigitos(numero.toString(), true);
}



/*
  Devuelve una cadena formada con los elementos del array
  pasado por parámetro, tomados como caracteres desde el
  de menor índice hasta el último.
*/
function uneDigitos(arrayNP) {
  let cadena = "";

  for(let i = 0; i < arrayNP.length; i++) {
    cadena += arrayNP[i];
  }

  return cadena;
}



/*
  Devuelve un array con los elementos cambiados simétricamente
  respecto al array pasado por parámetro.
*/
function daleLaVuelta(arrayNP) {
 
  let arrayNPGiro = new Array(arrNumero.length);

  for(let j = 0; j < arrayNP.length; j++) {
    arrayNPGiro[(arrayNP.length - 1) - j] = arrNumero[j];
  }

  return arrAux;
}



/*
  Añade ceros delante o detrás de una cadena que representa
  un valor numérico que necesariamente ha de tener cuatro
  dígitos.
*/
function formateaNumeroACuatroDigitos(numeroPedido, esIzquierda) {

  if(esIzquierda) {
    if(numero.length == 3) {
      numero = "0" + numero;
    } else if(numero.length == 2) {
      numero = "00" + numero;
    } else if(numero.length == 1) {
      numero = "000" + numero;
    }
  } else {
    if(numero.length == 3) {
      numero = numero + "0";
    } else if(numero.length == 2) {
      numero = numero + "00";
    } else if(numero.length == 1) {
      numero = numero + "000";
    }    
  }
  return numero;
}



/*
  Función que valida un número, comprobando que:
  - Sea un número.
  - No tenga más de 4 dígitos.
  - Al menos 2 dígitos diferentes.
  - Un dígito no se repita más de dos veces.
*/
function validaNumero(numero) {

  // Que sea un número.
  if(numero == null || isNaN(numero)) {
    return false;
  }

  // Que no tenga más de 4 dígitos.
  // if(numero.length > 4) {
  //   return false;
  // }

  if(+numero > 9999 || +numero <= 22) {
    return false;
  }

  // Que al menos 2 dígitos diferentes.
  //const numeros = Array.from(String(numero), Number);
  //const numeros = numero.split("");
  //const numeros = [...numero];
  const setNumeros = new Set(numero);
  //console.log(setNumeros);

  if(setNumeros.size < 2) {
    return false;
  }
  
  return true;
}