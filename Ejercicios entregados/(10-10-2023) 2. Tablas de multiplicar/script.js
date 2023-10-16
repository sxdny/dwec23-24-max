//Crea un Array multidimensional que obtenga las tablas de multiplicar del 0 al 9; imprimiendolas por separado con su propio título sin los resultados impares

//Creamos un array con 10 slots vacíos
let tablasMultiplicar = new Array(10);

//Al anterior array, le añadimos otro con 11 slots vacíos en cada uno de los suyos
for(let i = 0; i < tablasMultiplicar.length; i++){
    tablasMultiplicar[i]= new Array(11);
}

//Mostraremos en la consola por separado cada uno de los 10 slots vacíos
for(let fila = 0; fila < tablasMultiplicar.length; fila++){
    let miArrayInterior = tablasMultiplicar[fila];
    console.log("Tabla de multiplicar del " + fila + ":");
    
    for(let col = 0; col < miArrayInterior.length; col++){
        miArrayInterior[col] = fila * col;
        if(miArrayInterior[col] % 2 == 0){
            console.log(fila + "*" + col + " = " + miArrayInterior[col]);
        }
    }
}