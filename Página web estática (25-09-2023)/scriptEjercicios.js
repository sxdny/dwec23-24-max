/* se nos facilitan tres variables que contienen información sobre una ciudad.

    let esCapital; Booleana
    let numeroCiudadanos; entero (number para js)
    let impuestoPorCiudadano; float (number para js)

    esCapital: será cierta si y solo si la ciudad es capital.
    numeroCiudadanos: es el número de ciudadanos de dicha ciudad.
    impuestoPorCiudadano: es el impiesto medio mensual que paga un ciudadano de esa ciudad.

    Para nosotros, una metrópolis será una ciudad si bien es una capital con  más de 100.000 ciudadanos 
    o bien es una ciudad con más de 200.000 ciudadanos y una renta media de 720 millones al año.

    Dad una expresión booleana con las tres variables de tal manera que sea cierta si y solo si la ciudad es una metrópolis.

*/

/*
let esCapital = true;
let numeroCiudadanos = 300.000;
let 
*/


/*
Establece las condiciones (Cálculos).
Condiciones:
    1. esCapital && numeroCiudadanos > 100.000
    2. numeroCiudadanos > 200.000
    3. numeroCiudadanos * impuestoPorCiudadano * 12 > 720.000.000 €

*/
/*
let esCapital = true;
let numeroCiudadanos = 100000000;
let impuestoPorCiudadano =
*/

//------------------------------------------------------------------------------------------------------------------------------------------------


//Calculadora de notas (04/10/2023)

//Establecemos el nombre del alumno, la nota del primer examen, del segundo examen, del projecto y de la nota final

/*
let nombreAlumno = "Uzi";
let notaExamen1 =  7;
let notaExamen2 = 9;
let notaProjecto = 8.5;
let notaFinal = notaExamen1 * 0.2 + notaExamen2 * 0.2 + notaProjecto * 0.6;

//Mostramos todos los datos anteriores en la consola

console.log("Nombre del alumnono: " + nombreAlumno);
console.log("La nota del primer examen es un: " + notaExamen1);
console.log("La nota del segundo examen es un: " + notaExamen2);
console.log("La nota del projecto es un: " + notaProjecto);
console.log("La nota final del alumno es un: " + notaFinal);

//Utilizaremos la sentencia if para ver si el alumno ha aprobado el módulo.

if(notaFinal >= 7){
    console.log("¡Enhorabuena! Has aprobado");
}else {
    console.log("Necesitas mejorar tu nota para poder aprobar el módulo");
}

*/


// // Create a new Date object
// let currentDate = new Date();

// // Extract day, month, and year
// let day = currentDate.getDate();
// let month = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns 0-based index
// let year = currentDate.getFullYear();

// // Display day, month, and year in the console
// console.log("Day: " + day);
// console.log("Month: " + month);
// console.log("Year: " + year);

//CRONÓMETRO

/*
let elCrono;

function crono(){
    let hora = "0";
    let minutos = "0";
    let segundos = "0";

    if (hora < 10){
        hora = "0" + hora;
    }
    if (minutos < 10){
        minutos = "0" + minutos;
    }
    if (segundos < 10){
        segundos = "0" + segundos;
    }

    segundos ++
    if(segundos > 59){
        segundos = "0";
        minutos ++
    }

    if(minutos > 59){
        minutos = "0";
        hora ++
    }


}

Window.onLoad = function (){
    elCrono = setInterval (crono, 10000);
}*/

//------------------SOLUCIÓN DEL PROFESOR-------------------------

let elCrono;

let laHora = document.getElementById("laHora");

//Inicialización del tiempo para el cronómetro
let miFecha = new Date();
miFecha.setHours(0, 0, 0, 0);

//Inicialización del texto para "laHora" 
laHora.innerHTML = "00:00:00";

//
function crono(){
    let hora = miFecha.getHours();
    let minutos = miFecha.getMinutes();
    let segundos = miFecha.getSeconds();

    segundos ++;
    if(segundos > 59){
        segundos = "0";
       
        minutos ++;
       
        miFecha.setMinutes(minutos);
    }

    miFecha.setSeconds(segundos);

    if(hora < 10){
        hora = "0" + hora;
    }
    if(minutos < 10){
        minutos = "0" + minutos;
    }
    if(segundos < 10){
        segundos = "0" + segundos;
    }

    laHora.innerHTML = hora + ":" + minutos + ":" + segundos;
}

//Función llamada por el botón "Restart"
function reiniciarCrono(){
    //Inicialización del tiempo para el cronómetro
    let miFecha = new Date();
    miFecha.setHours(0, 0, 0, 0);

    //Inicialización del texto para "laHora" 
    laHora.innerHTML = "00:00:00";
}

//Función llamada por el botón "Start"
function start(){
    elCrono = setInterval(crono, 1000);
}

//Función llamada por el botón "Stop"
function stop(){
    clearInterval(elCrono);
}

//Función llamada por el botón "restart"
function restart(){
    setTimeOut(reiniciarCrono, 1000);
}
