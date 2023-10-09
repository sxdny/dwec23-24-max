
/*function saluda() {

    console.log ("saluda");
    
}
*/

//Esto es un comentario

/* Esto es un comentario largo. Es decir,
    de varias líneas 
    
*/

/* Con cualquiera de estas tres palabras podemos definir una variable
    var, let, const 
*/



//console.log(PI);

/*
let uno= 1; let dos= 2;
console.log(uno+dos);
*/

//string

/*

let nombre= "Uzi";
let apellido= 'Vert';
let nombreCompleto= "Uzi Vert, the motherfucking goat";
let comillas = "Texto 'entrecomillado'";
let comillas = 'Texto \'entrecomillado\'';
console.log (comillas); 

*/

/*
let edad = 27;
let anyos = "27"
console.log(typeof edad);
console.log(typeof anyos);

let edad = 27;
let masEdad = 56;
console.log();


let precio = 16.29;
console.log(typeof precio);

let edad = 27;
let masEdad = 56;
let aprobados = Infinity;
let suspendidos = -Infinity;
console.log(masEdad + aprobados);
*/

//null

/*
let valor = null;
console.log(typeof valor);
*/

//undefined

/*
let miPequenoUzi;
console.log(miPequenoUzi);
*/

//NaN

/*
let algo = "algo" / 2;
console.log(algo);

let algo = "26";
console.log(algo/3);
*/

//typeof

/*
let edad = 34;
console.log(typeof edad);

delete edad;
console.log(edad);

let persona = {

    nombre: "Uchi",
    edad: 567
}

delete persona.edad;   
console.log(persona.edad);  
*/

//Boolean
 
let LilDurk = true;
let Tyga = false; //falsy

// Valores considerados como false: null, "" (string vacío), undefined, 0, NaN (Not A Number)

/*
let algo;
if (algo){
    console.log("hola");
} else {
    console.log("adiós");
}
//esto da adiós porque se considera false
let algo = null;
if (algo){
    console.log("hola");
} else {
    console.log("adiós");
}
//esto da adiós porque se considera false
let algo = true;
if (algo){
    console.log("hola");
} else {
    console.log("adiós");
}
//esto da hola porque es true
*/

/*
//Operadores aritméticos
//Utilizados para operaciones matemáticas
// (+) a+b (Sumar), (-) a-b (Restar), (*) a*b (Multiplicación), (/) a/b (División), (%) a%b (resto/módulo)

let a = 4;
let b = 2;
console.log(a%b);
// (++) (Incremento); a++, ++a
// (--) (Decremento0); a--, --a
// (+=) (Suma y asigna); a+=b --> a = a+b
// (-=) (Resta y asigna); a-=b --> a = a-b
// (*=) (Multiplica y asigna); a*=b --> a = a*b
// (/=) (Divide y asigna); a/=b --> a = a/b
//(%=) (Módulo y asigna); a%=b --> a = a%b
// (-) (Cambio de signo); a = 5, b= -a --> b=-5

let a = 4;
console.log(++a);
*/

//Conversión de tipos

/*
let a = "6";
let b = "7";

console.log(typeof a, typeof b);
console.log(a + b);
/*
let c = a;
let d = b;

console.log(c + d);
console.log(typeof c, typeof d);


let f = "16.29";
console.log(parseInt(f));
console.log(parseFloat(f));

let c = +a;
let d = +b;

console.log(c + d);
console.log(typeof c, typeof d);


let f = "16.29";
let g = +f
console.log(g);
console.log(typeof g);

let a = "6";
let b = "7";

console.log(+a + +b);
*/

//Operadores de comparación
//comparar dos valores y devolver un resultado booleano

/*
//> mayor que
console.log(5>4);

//< menor que
console.log(5<4);

// >= mayor o igual que
console.log(5>=4);

//<= menor o igual que
console.log(5<=4);

//== igual que
let a = 6;
let b = 7;
console.log(8==4);
console.log(a==4);
console.log(a==b);

//!= distinto a 
console.log(5!=4);
console.log(a!=4);
console.log(a!=b);

//=== igual tanto en valor como tipo
console.log(a===b);

//!== distinto tanto en valor como tipo
console.log(a!==b);
*/

//Operadores booleanos

//permite comparar expresiones booleanas con las que se construyen condiciones que se pueden aplicar en funciones, bucles, ...

//&& (AND) devuelve true cuando ambos operadores lo son. 

//|| (OR) decuelve true si cualquiera de los operadores lo es.

//! NOT 

/*
let a = true;
let b = false;
console.log(a && b);
console.log(a || b);

let cadena = "BigUta";
console.log(cadena.length);

if (cadena != 3 == cadena.length){
    console.log(cadena.length);
}
else{
    console.log("Please UZI, SAVE ME! (=-=)");
}
*/

//if utilizado para ejecutar un bloque de código si se cumple una condición.

/*
let edad = 17;

if(edad >= 18){
    console.log("Eres mayor de edad");
}

//tambíen se podría

let esMayorDeEdad = (edad>18);

if(esMayorDeEdad){
    console.log("Eres mayor de edad")
}

//también se podría escribir de una sola línea.

if(esMayorDeEdad){
    console.log("Eres mayor de edad")
}else if (edad > 12){
    console.log("Adolescente");
} else if (edad > 6){
    console.log("Estás en primaria");
} else {
    console.log("Baby");
}
*/

//Operador ternario

/*
let edad = 17;
let esMayorDeEdad = (edad > 18);

let resultado = esMayorDeEdad ? "Eres mayor de edad" : "Eres menor de edad"
console.log(resultado);
*/

//?:

/*
let a = 12;
let b =20;
let resultado1 = (a > b) ? (a - b) : (b - a);
console.log(resultado1);
*/

//Switch - Case. Utilizado cuando se quiera elaborar una estructura condicional según el valor que tenga una variable o expresión.

/*
let nombre = "UZI";

switch (nombre){
    case "Young Thug":
        edad = 45;    
        break;

    case "BirdMan":
        edad = 58;
        break;
    
    case "UZI":
        edad = 1629;
        break;
    default:
        edad = 169
        break;
}

console.log("Nombre: " + nombre, "Edad: " + edad);
*/

// Iteraciones. Se utilizan para repetir una porción de código varias veces.

//while. Repetir un bloque (lo que se establece entre llaves. Salvo excepxiones) mientras se cumpla una condición.

/*
let contador = 0;

while(contador < 5){
    console.log(contador);
    contador++;
}
*/

//do-while. Repetir un bloque de código al menos una vez.

/*
let contador = -1;


do{
    console.log(contador);
    contador++;
}while (contador < 5)
*/
/*
do{
    console.log(contador);
    contador = contador + 5;
}while (contador < 10)
*/

//for. Repetir un bloque un número específico de veces.

/*
for (let i = 0; i < 5; i++){
    console.log(i);
}
*/

//brekae 

/*
for (let i = 0; i < 5; i++){
    if (i == 2){

    }
}
*/

//continue


//Fechas

/*
//lo primero a establecer
let parrafo = document.getElementById("fecha");


document.getElementById("fecha").innerHTML = "Hola"

parrafo.innerHTML = Date();



//new Date(); 
//new Date(milisegundos); 
//new Date(fechaString); 
//new Date(año, mes, día, horas, minutos, segundos, milisegundos);

let fecha = new Date(92500000);
parrafo.innerHTML = fecha;

let fecha2 = new Date("2005-10-23");
parrafo.innerHTML = fecha2;

//los meses empiezan por el cero
let fecha3 = new Date(2010, 0, 10, 22, 45, 8, 99);
parrafo.innerHTML = fecha3;

//métodos tipo fecha

let fecha4 = new Date("2010-2-3");
parrafo.innerHTML = fecha4.getDate();
parrafo.innerHTML = fecha4.getDay();
parrafo.innerHTML = fecha4.getFullYear();
parrafo.innerHTML = fecha4.getHours();
parrafo.innerHTML = fecha4.getMilliseconds();
parrafo.innerHTML = fecha4.getMinutes();
parrafo.innerHTML = fecha4.getMonth;
parrafo.innerHTML = fecha4.getSeconds;
parrafo.innerHTML = fecha4.getTime();
*/

//Arrays

//Definir Arrays

let vacio = []; //Array sin elementos
console.log(vacio);
console.log(vacio.length);

let primos = [200, 1017, 300]; //Array con tres elementos numéricos elementos

let miscelania = [16.29, true, "Carti needs to drop", ]; //Array con varios tipos de elementos y una coma sola
console.log(miscelania);

//Los valores de los elementos no tienen porqué ser constantes

let n = 1017;
let tabla = [n, n + 1, n + 2, n+ 3];
console.log(tabla);

let contador = [16, 18, , , ]; 
console.log(contador.length); //La coma del final no se cuenta

//Operador SPREAD

let a = [1, 2, 73];
let b = [0, ...a, 4];
console.log(b);
console.log(b.length);

let original = [1, 2, 3];
let copia = [...original];
let copia2 = [...original, ...original];
console.log(original);
console.log(copia);
console.log(copia2);

console.log(copia2[0]);//acceder a elementos específicos de una Array
original[0] = 9;//No la cambia. Si la pusiese antes de console.log(copia2) sí

let digitos = ["0123456789"];
let digitos2 = [..."0123456789"]
console.log(digitos);
console.log(digitos2);

//Constructor de Arrays

let c = new Array();
let d = new Array(8);
let e = new Array(16.29, "Is Lil Uzi Vert", "Love is like a BBL", true, "Carti only drops BANGERZ");
console.log(c.length);
console.log(d.length);
console.log(e);

//La diferencia entre los Arrays f y g es que f posee 23 sitios (slots) vacíos para 23 elementos diferentes; y g tiene un espacio para un solo elemento con una longitud de 23 caracteres
let f = new Array(23); 
let g = Array.of(23);
console.log(f);
console.log(g);

let h = new Array(8);
let i = new Array(9);
let j = new Array(11);
h[4] = 7;
i[5] = 245;
i[8] = "I wanna make you (singing like R&B Duke Dennis)"
console.log(h);
console.log(i[4 + 1]);
console.log(i[8]);

//PUSH

j.push(5, "Is GUCCIII", "Blond; a blond bitch");
console.log(j[j.length - 2]);

//j.push(true); == j[j.lenght] = true;