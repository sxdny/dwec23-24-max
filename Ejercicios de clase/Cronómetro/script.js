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
    console.log("hola");
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
    setTimeout(reiniciarCrono, 0)
}
