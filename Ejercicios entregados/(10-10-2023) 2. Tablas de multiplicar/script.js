//Crea un Array multidimensional que obtenga las tablas de multiplicar del 0 al 9; imprimiendolas por separado con su propio título sin los resultados impares

let tablasMultiplicar = new Array(10);

for(let i = 0; i < tablasMultiplicar.length; i++){
    tablasMultiplicar[i]= new Array(11);
}

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