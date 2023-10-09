// Conversión y Análisis de Temperaturas

// 2.preguntar(clg (media>30)) - 4.preguntar

// Temperaturas 2010 (ºC)

let any2010Juny = 25.8;
let any2010Juliol = 28.6;
let any2010Agost = 30.1;

// Temperaturas 2015 (ºC)

let any2015Juny = 26.5;
let any2015Juliol = 29.3;
let any2015Agost = 30.8;

// Temperaturas 2020 (ºC)

let any2020Juny = 27.2;
let any2020Juliol = 29.9;
let any2020Agost = 31.5;


// Temperaturas medias de cada año y; si superan los 30ºC utilizando un operador ternario

let mitjanaAny2010 = (any2010Juny + any2010Juliol + any2010Agost)/3;
let mitjanaAny2015 = (any2015Juny + any2015Juliol + any2015Agost)/3;
let mitjanaAny2020 = (any2020Juny + any2020Juliol + any2020Agost)/3;

let resultado2010 = mitjanaAny2010 > 30 ? "La temperatura media de 2010 superó los 30ºC" : "La temperatura media de 2010 no superó los 30ºC";
let resultado2015 = mitjanaAny2015 > 30 ? "La temperatura media de 2015 superó los 30ºC" : "La temperatura media de 2015 no superó los 30ºC";
let resultado2020 = mitjanaAny2020 > 30 ? "La temperatura media de 2020 superó los 30ºC" : "La temperatura media de 2020 no superó los 30ºC";


// Temperaturas medias convertidas a ºF y K

let mitjanaAny2010Fahrenheit = mitjanaAny2010 * 9/5 + 32;
let mitjanaAny2010Kelvin = mitjanaAny2010 + 273.15;
let mitjanaAny2015Fahrenheit = mitjanaAny2015 * 9/5 + 32;
let mitjanaAny2015Kelvin = mitjanaAny2015 + 273.15;
let mitjanaAny2020Fahrenheit = mitjanaAny2020 * 9/5 + 32;
let mitjanaAny2020Kelvin = mitjanaAny2020 + 273.15;


// Utilizamos variables booleanas para representar si la media de cada año > 30ºC (¡¡¡¡REVISAR!!!!)

let superatAny2010 = mitjanaAny2010 > 30;
let superatAny2015 = mitjanaAny2015 > 30;
let superatAny2020 = mitjanaAny2020 > 30;

console.log(superatAny2010, superatAny2015, superatAny2020);


// Mostraremos en pantalla las temperaturas medias de cada año en ºC, ºF y K; así como un mensaje indicando si la temperatura media es > 30ºC

console.log("Temperatura media del 2010: " + mitjanaAny2010 +"ºC, " + mitjanaAny2010Fahrenheit +"ºF o " + mitjanaAny2010Kelvin +"K. " + resultado2010);
console.log("Temperatura media del 2015: " + mitjanaAny2015 +"ºC, " + mitjanaAny2015Fahrenheit +"ºF o " + mitjanaAny2015Kelvin +"K. " + resultado2015);
console.log("Temperatura media del 2020: " + mitjanaAny2020 +"ºC, " + mitjanaAny2020Fahrenheit +"ºF o " + mitjanaAny2020Kelvin +"K. " + resultado2020);