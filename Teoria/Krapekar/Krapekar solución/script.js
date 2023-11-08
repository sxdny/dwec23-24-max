/*
//Guardamos el número de Kaprekar en una variable.
const numeroKaprekar = 6147;

//Número escrito por el ususario
let numeroPedido;


//Pasos realizados para llegar al resultado.
let pasos = 0;


//Pedimos al ususario que escriba un número y lo guardamos en una variable. 
const promptText = "Elige un número de cuatro cifras que tenga como mínimo dos cifras diferentes.";

//Lanzamos el prompt.
numeroPedido = prompt(promptText);

if(!validarNumeroPedido(numeroPedido)){
    console.log("El número introducido no es válido. Reinicie la página para vovler a empezar.");
}else {
    while(numeroPedido != numeroKaprekar){

        //LLamamos función kaprekar
        numeroPedido = kaprekar(numeroPedido);

        //Aumentamos el número de pasos
        pasos++;

        //Evitar bucles infinito
        if(pasos > 7){
            console.log("Numero de pasos superados, algo no está bien");
            break;
        }

        //Si el número obtenido es el de Kaprekar, informamos de los pasos realizados
        if(numero == numeroKaprekar){
            console.log("Pasos realizados: " + pasos);
        }
    }
}

/*
    Función añade ceros delante o detrás de una cadena que representa un valor numérico que necesariamente ha de tener cuatro cifras.
*//*
function formatearNumeroACuatroCifras(numeroPedido, esIzquierda){

    if (esIzquierda){
        if(numeroPedido.lenght == 3){
            numeroPedido = "0" + numeroPedido;
        }else if (numeroPedido.lenght == 2){
            numeroPedido = "00" + numeroPedido;
        }else if(numeroPedido == 1){
            numeroPedido = "000" + numeroPedido;
        }else{
            if (esIzquierda){
            if(numeroPedido.lenght == 3){
                numeroPedido = numeroPedido + "0";
        }else if (numeroPedido.lenght == 2){
            numeroPedido = numeroPedido + "00";
        }else if(numeroPedido == 1){
            numeroPedido = numeroPedido + "000";
        }
    }
    return numeroPedido;
}

/* Validaremos el número del ususario mediante una función.
	- Que sea un número.
	- Que no tenga más de 4 cifras.
	- Que tenga mínimo dos digitos diferentes.
	- Que los dígitos no se repitan más de 2 veces.
*//*
function validarNumeroPedido (numeroPedido){
	
	//Que sea un número.
	if (numeroPedido == null || isNaN(numeroPedido)){
		return false;
	}

	//Que no tenga más de 4 cifras.
	if(+numeroPedido > 9999 || +numeroPedido <= 22) {
		return false;
	}
	/* Otra manera de hacerlo.
		if(numeroPedido.lenght > 4){
			return false;
		}
	*/

	//Que almenos dos digitos sean diferentes.
	/*  Maneras de dividir el número pedido
        - const cifrasNumero = Array.from(String(numero), Number); [Con el Set ya nos lo divide en diferentes elementos de una array por si solo]
            Los divide, pero quedan como Strings.
            - const cifrasNumero = numeroPedido.split("");
            - const cifrasNumero = [...numeroPedido];
    *//*
    
    //Nuestro set de números
    const cifrasNumero = new Set(numeroPedido);
    
    if(cifrasNumero.size < 2){
        return false;
    }


    return true;
}

/*
    Funcion para realizar las operaciones que nos llevarán al número de Kaprekar. Devolverá el número obtenido.
*//*
function kaprekar(numeroPedido){

    //Cramos un array para poder tratar con el número del ususario dígito a dígito.
    let numeroOperaciones = new Array();

    //Variables para guardar los números que utilizaremos para las operaciones.
    let mayor, menor;

    //Añadir número al array.
    /*
    for(let i = 0; i < numeroPedido.lenght; i++){
        numeroOperaciones[i] = numeroPedido[i];
    }

    for(let i = 0; i < numeroPedido.lenght; i++){
        numeroOperaciones[i] = numeroPedido.charAt(i);
    }
    *//*

    for(let i = 0; i < numeroPedido.lenght; i++){
        numeroOperaciones.push(numeroPedido.charAt(i));
    }

    //Ordenar el número que utilizaremos para las operaciones.
    //De menor a mayor
    numeroOperaciones.sort();

    //Guardamos en la variable "menor" el contenido.
    //del array "unido".
    menor = uneDigitos(numeroOperaciones);

    //Ordenamos de mayor a menor
    numeroOperaciones = uneDigitosMayor(numeroOperaciones);

    //Guardamos la ordenación de mayor a menor en un array.
    mayor = uneDigitos(numeroOperaciones);

    //Resta
    numeroPedido = mayor - menor;

    console.log(mayor + "-" + menor + " = " + numeroPedido);

    return formatearNumeroACuatroCifras(numeroPedido.toString(), true);
}

/*
    Función que devolverá una cadena con los elementos del array pasado por el parámetro, tomados como caracteres desde el de menor índice hasta el último.
*//*
function uneDigitos(numeroOperaciones){
    
    let cadena = "";

    for(let i = 0; i < numeroOperaciones.lenght; i++){
        cadena += arrayNumero[i];
    }
}

/*
    Devuelve un array con los elementos cambiados simétricamente respecto al array pasado por el parámetro.
*//*
function uneDigitosMayor (numeroOperaciones){
    
    let arrayMayor = new Array(numeroOperaciones.lenght);

    for(let j = 0; j < numeroOperaciones.lenght; j++){
        arrayMayor[(numeroOperaciones.lenght - 1) -j] = numeroOperaciones[j];
    }

    return arrayMayor;
}
    }
}
    KAPREKAR QUE YO REALICÉ (NO FUNCIONA)        */


//SOLUCIÓN DE KAPREKAR

// Guardamos el número de Kaprekar.
const numeroKaprekar = 6174;
// Número entrado por el usuario.
let numero;
// Pasos realizados.
let pasos = 0;

// Pedimos al usuario que introduzca el número y lo capturamos.
// (Será una cadena)
let promptText = "Elija cualquier número de cuatro dígitos ";
promptText += "que esté formado por al menos dos dígitos ";
promptText += "diferentes, incluido el cero.";
// Lanzamos el prompt.
numero = prompt(promptText);
//numero = "1234";

if(!validaNumero(numero)) {
  console.log("El número introducido no es válido.");
} else {
  while(numero != numeroKaprekar) {

    // Llamamos a la función kaprekar.
    numero = kaprekar(numero);

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
  Función que realiza las operaciones necesarias para obtener
  el número de Kaprekar pasándole como parámetro el número a
  tratar.
  Devuelve el número obtenido.
*/
function kaprekar(numero) {

  // Creamos un array para poder tratar el número
  // dígito a dígito.
  let arrNumero = new Array();

  // Variables para guardar los números a restar.
  let mayor, menor;

  // Añadimos el número al array.
  
  // for(let i = 0; i < numero.length; i++) {
  //   arrNumero[i] = numero[i];
  // }

    // for(let i = 0; i < numero.length; i++) {
    //   arrNumero[i] = numero.charAt(i);
    // }

    for(let i = 0; i < numero.length; i++) {
      arrNumero.push(numero.charAt(i));
    }

    // Ordenamos el array con sort
    // Quedará de menor a mayor.
    arrNumero.sort();

    // Guardamos en la variable "menor" el contenido
    // del array "unido".
    menor = uneDigitos(arrNumero);

    // Le damos la vuelta al array y, por lo tanto, al número.
    //arrNumero.reverse();
    arrNumero = daleLaVuelta(arrNumero);

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
function uneDigitos(arrNumero) {
  let cadena = "";

  for(let i = 0; i < arrNumero.length; i++) {
    cadena += arrNumero[i];
  }

  return cadena;
}

/*
  Devuelve un array con los elementos cambiados simétricamente
  respecto al array pasado por parámetro.
*/
function daleLaVuelta(arrNumero) {
 
  let arrAux = new Array(arrNumero.length);

  for(let j = 0; j < arrNumero.length; j++) {
    arrAux[(arrNumero.length - 1) - j] = arrNumero[j];
  }

  return arrAux;
}

/*
  Añade ceros delante o detrás de una cadena que representa
  un valor numérico que necesariamente ha de tener cuatro
  dígitos.
*/
function formateaNumeroACuatroDigitos(numero, esIzquierda) {

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