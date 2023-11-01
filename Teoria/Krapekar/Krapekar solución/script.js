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
*/
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
}

/* Validaremos el número del ususario mediante una función.
	- Que sea un número.
	- Que no tenga más de 4 cifras.
	- Que tenga mínimo dos digitos diferentes.
	- Que los dígitos no se repitan más de 2 veces.
*/
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
    */
    
    //Nuestro set de números
    const cifrasNumero = new Set(numeroPedido);
    
    if(cifrasNumero.size < 2){
        return false;
    }


    return true;
}

/*
    Funcion para realizar las operaciones que nos llevarán al número de Kaprekar. Devolverá el número obtenido.
*/
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
    */

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
*/
function uneDigitos(numeroOperaciones){
    
    let cadena = "";

    for(let i = 0; i < numeroOperaciones.lenght; i++){

    }
}

/*
    Devuelve un array con los elementos cambiados simétricamente respecto al array pasado por el parámetro.
*/
function uneDigitosMayor (numeroOperaciones){

    let arrayMayor = new Array(numeroOperaciones.lenght);

    for(let j = 0; j < numeroOperaciones.lenght; j++){
        arrayMayor[(numeroOperaciones.lenght - 1) -j] = numeroOperaciones[j];
    }

    return arrayMayor;
}