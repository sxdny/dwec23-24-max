//Crea un Array multidimensional que obtenga las tablas de multiplicar del 0 al 9; imprimiendolas por separado con su propio título sin los resultados impares



let tablasMultiplicar = new Array(10);

for (let i = 0; i < tablasMultiplicar.length; i++) {
    tablasMultiplicar[i] = new Array(11); // Each row will have 11 columns
}

for (let fila = 0; fila < tablasMultiplicar.length; fila++) {
    let arrayInteriro = tablasMultiplicar[fila];
    for (let col = 0; col < arrayInteriro.length; col++) {
        arrayInteriro[col] = fila * col;
    }
}

for (let i = 0; i < tablasMultiplicar.length; i++) {
    let tableResult = "Tabla de multiplicar del " + i + ": ";
    for (let j = 0; j < tablasMultiplicar[i].length; j++) {
        if (tablasMultiplicar[i][j] % 2 === 0) {
            tableResult += i + " * " + j + " = " + tablasMultiplicar[i][j] + ", ";
        }
    }
    console.log(tableResult);
}


//Realizar bulce para que las tablas salgan con su propio título como abajo. Y también incluir que los impares se descarten

