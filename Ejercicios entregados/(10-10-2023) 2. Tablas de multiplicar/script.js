//Crea un Array multidimensional que obtenga las tablas de multiplicar del 0 al 9; imprimiendolas por separado con su propio título sin los resultados impares

let tablasMultiplicar = new Array(10);

for(let i = 0; i < tablasMultiplicar.length; i++){
    tablasMultiplicar[i] = new Array(11); //Cada fila va a tener 11 columnas
}


for(let fila = 0; fila < tablasMultiplicar.length; fila++){
    let arrayInteriro = tablasMultiplicar[fila];
    for(let col = 0; col < arrayInteriro.length; col++){
        arrayInteriro[col] = fila * col;
    }
}

//Realizar bulce para que las tablas salgan con su propio título como abajo. Y también incluir que los impares se descarten
console.log("Tabla de multiplicar del 0: " + tablasMultiplicar[0]);
console.log("Tabla de multiplicar del 1: " + tablasMultiplicar[1]);
console.log("Tabla de multiplicar del 2: " + tablasMultiplicar[2]);
console.log("Tabla de multiplicar del 3: " + tablasMultiplicar[3]);
console.log("Tabla de multiplicar del 4: " + tablasMultiplicar[4]);
console.log("Tabla de multiplicar del 5: " + tablasMultiplicar[5]);
console.log("Tabla de multiplicar del 6: " + tablasMultiplicar[6]);
console.log("Tabla de multiplicar del 7: " + tablasMultiplicar[7]);
console.log("Tabla de multiplicar del 8: " + tablasMultiplicar[8]);
console.log("Tabla de multiplicar del 9: " + tablasMultiplicar[9]);