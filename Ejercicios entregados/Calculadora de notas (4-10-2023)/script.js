//Calculadora de notas (04/10/2023)

//Establecemos el nombre del alumno, la nota del primer examen, del segundo examen, del projecto y de la nota final

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
