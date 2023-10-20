/*

Información de los planetas:

1. Marte:
2. Júpiter:
3. Saturno:
4. Venus:
5. Neptuno:

*/


// Almacenamiento de los datos de los planetas en arrays

let infoPlanetas = [
    ["Marte", 228000000, 163180000000/1083210000000, "conocido desde la antigüedad"],
    ["Júpiter", 743620000, 1431300000000000/1083210000000, "conocido desde la antigüedad"],
    ["Saturno", 1458400000, 827130000000000/1083210000000, "conocido desde la antigüedad"],
    ["Venus", 107930000, 928000000000/1083210000000, "conocido desde la antigüedad"],
    ["Neptuno", 4472700000, 62540000000000/1083210000000, "descubierto el " + new Date("1846-09-23")]
];



// Constructor Planeta

function Planeta(nombre, distanciaSol, tamanoRelativo, fechaDescubrimiento) {
    this.nombre = nombre;
    this.distanciaSol = distanciaSol;
    this.tamanoRelativo = tamanoRelativo;
    this.fechaDescubrimiento = fechaDescubrimiento;

    this.mostrarInfo = function() {
        let fechaReal = (this.fechaDescubrimiento instanceof Date) ? this.fechaDescubrimiento.toDate() : this.fechaDescubrimiento;
        return this.nombre + ":" + "\n" + " · Distancia con el Sol: " + this.distanciaSol + " km." + "\n" + " · Tamaño relativo a la Tierra: " + this.tamanoRelativo + " veces la tierra." + "\n" +  " · Fecha de descubrimiento: " + fechaReal + "." + "\n" + " ";
    };
}



// Objetos planeta a partir de un bucle

let planetas = [];

for (let i = 0; i < infoPlanetas.length; i++) {
    let info = infoPlanetas[i];
    let nombre = info[0];
    let distanciaSol = info[1];
    let tamanoRelativo = info[2];
    let fechaDescubrimiento = info[3];

    let planeta = new Planeta(nombre, distanciaSol, tamanoRelativo, fechaDescubrimiento);
    planetas.push(planeta);
}



// Función para mostrar información de un planeta en la consola

function mostrarInfoPlaneta(planeta) {
    console.log(planeta.mostrarInfo());
}



// Mostrar información de todos los planetas en la consola

console.log('Información de algunos planetas del Sistema Solar:');
for (let planeta of planetas) {
    mostrarInfoPlaneta(planeta);
}



// Ordenar los planetas por distancia al Sol de menor a mayor

planetas.sort((a, b) => a.distanciaSol - b.distanciaSol);



// Mostrar información de los planetas ordenados en la consola

console.log('Información de algunos planetas del Sistema solar ordenados por distancia al Sol:');

for (let planeta of planetas) {
    mostrarInfoPlaneta(planeta);
}
