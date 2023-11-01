// //Muestra en pantalla una ventana donde deberás de establecer un número ("prompt"). Guardando este número en una variable ("numero").
// const numero = prompt("Elige un número con dos cifras distintas como mínimo.")

// //Separaremos la variable "numero". Guardandola en otra variable ("numeroSeparado").
// const numeroSeparado = numero.toString().split('');


// //Voy a ir estableciendo los parámetros. A lo último de todo, escribiré "else console.log("Refresca la página y vuelve a reprtir");" para que se tenga que repetir si el número introducido no sigue ninguno de los parámetros.
// if (numeroSeparado.length == 4 &&  //Primera condición
    
//     numeroSeparado[0] == numeroSeparado[1] != numeroSeparado[2], numeroSeparado[3] &&  //Segunda condición
    
//     numeroSeparado[0] == numeroSeparado[2] != numeroSeparado[1], numeroSeparado[3] &&  //Tercera condición
    
//     numeroSeparado[0] == numeroSeparado[3] != numeroSeparado[1], numeroSeparado[2] ) {  //Cuarta condición   


//     console.log("Funciona!!!!!");

// } else {
//     console.log("Refresca la página.");
// }


// for (i = 0; i <= 7; i++){


// }



//Muestra en pantalla una ventana donde deberás de establecer un número ("prompt"). Guardando este número en una variable ("numero").
const numero = prompt("Elige un número con dos cifras distintas como mínimo.")

//Separaremos la variable "numero". Guardandola en otra variable ("numeroSeparado").
const numeroSeparado = numero.toString().split('');


//Función con la que comprobaremos si el número escrito cumple las condiciones establecidas en el "prompt".
function numerosCondicion(numeroSeparado){
	

	for(let i = 0; i < numeroSeparado.length; i++){
		

        let a = 0;

		for(let j = 0; j < numeroSeparado.length; j++){
			
            if(numeroSeparado[i] === numeroSeparado[j]){
				
                a += 1;
			}
		}
		
        if (a > 2){

			return false;
		}
	

    }
	return true;


}

