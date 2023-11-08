//RECURSIVIDAD

function factorial(numero){

    if(numero == 0){

        return 1;

    } else{

        return (numero* factorial(numero - 1));
    }

    /* Se puede poner en una sola línea:

        if(numero == 0) return 1;

        return (numero* factorial(numero - 1));
    */
}

let numero = factorial(5);
console.log(numero);