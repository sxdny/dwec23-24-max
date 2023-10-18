/*
Información sobre los planetas del sistema solar:
Distancia al sol, Tamaños relativos al tamaño de la tierra, Fechas de descubrimiento y la fecha de hoy (17-10-2023)

Planetas:
Volumen de la tierra: 	1,08321×1012 km³ (1083210000000)
1. Marte: DS= 228x10^6 km; V: 1,6318 × 10^11 km³; FD: Conocido desde la antigüedad.

2. Júpiter: DS= 743.620.000 km; V: 1,4313 × 1015 km³; FD: Conocido desde la antigüedad.

3. Saturno: DS= 1,4584E9 km; V: 8.2713×1014 km3; FD: Conocido desde la antigüedad.

4. Venus: DS= 107.930.000 km; V: 9,28x1011 km³; FD: Conocido desde la antigüedad.

5. Neptuno: DS= 4,4727E9 km; V: 6,254×1013 km³; FD: 23 de septiembre de 1846.
*/


//Array para almacenar objetos planeta





//-----------------------------------REAL----------------------------------------------------------

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
