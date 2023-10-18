/*
// Array de información de los planetas
const planetasInfo = [
    ["Mercurio", 0.39, 0.055, new Date("1631-01-01")],
    ["Venus", 0.72, 0.815, new Date("1610-01-01")],
    ["Tierra", 1, 1, new Date("0-01-01")],
    ["Marte", 1.52, 0.107, new Date("1610-01-01")],
    ["Júpiter", 5.2, 318, new Date("1610-01-01")]
  ];
  
  // Clase Planeta
  class Planeta {
    constructor(nombre, distanciaAlSol, tamañoRelativo, fechaDescubrimiento) {
      this.nombre = nombre;
      this.distanciaAlSol = distanciaAlSol;
      this.tamañoRelativo = tamañoRelativo;
      this.fechaDescubrimiento = fechaDescubrimiento;
    }
    
    mostrarInformacion() {
      console.log(`Planeta: ${this.nombre}`);
      console.log(`Distancia al Sol: ${this.distanciaAlSol} UA`);
      console.log(`Tamaño relativo a la Tierra: ${this.tamañoRelativo} veces`);
      console.log(`Fecha de descubrimiento: ${this.fechaDescubrimiento.toDateString()}`);
      console.log('---------------------------------------------');
    }
  }
  
  // Crear objetos Planeta a partir del array usando un bucle
  const planetas = [];
  for (const info of planetasInfo) {
    const [nombre, distanciaAlSol, tamañoRelativo, fechaDescubrimiento] = info;
    const planeta = new Planeta(nombre, distanciaAlSol, tamañoRelativo, fechaDescubrimiento);
    planetas.push(planeta);
  }
  
  // Función para mostrar información de un planeta en la consola
  function mostrarInformacionPlaneta(planeta) {
    planeta.mostrarInformacion();
  }
  
  // Mostrar información de todos los planetas en la consola
  console.log('Información de los planetas:');
  for (const planeta of planetas) {
    mostrarInformacionPlaneta(planeta);
  }
  
  // Ordenar los planetas por distancia al Sol de menor a mayor
  planetas.sort((a, b) => a.distanciaAlSol - b.distanciaAlSol);
  
  // Mostrar información de los planetas ordenados en la consola
  console.log('Información de los planetas ordenados por distancia al Sol:');
  for (const planeta of planetas) {
    mostrarInformacionPlaneta(planeta);
  }
  
  */

  // Array de información de los planetas
const planetasInfo = [
    ["Mercurio", 0.39, 0.055, new Date("1631-01-01")],
    ["Venus", 0.72, 0.815, new Date("1610-01-01")],
    ["Tierra", 1, 1, new Date("0-01-01")],
    ["Marte", 1.52, 0.107, new Date("1610-01-01")],
    ["Júpiter", 5.2, 318, new Date("1610-01-01")]
  ];
  
  // Definir un array para almacenar los objetos Planeta
  const planetas = [];
  
  // Crear objetos Planeta a partir del array usando un bucle
  for (let i = 0; i < planetasInfo.length; i++) {
    const info = planetasInfo[i];
    const nombre = info[0];
    const distanciaAlSol = info[1];
    const tamañoRelativo = info[2];
    const fechaDescubrimiento = info[3];
    
    // Crear objeto Planeta y agregarlo al array planetas
    const planeta = {
      nombre: nombre,
      distanciaAlSol: distanciaAlSol,
      tamañoRelativo: tamañoRelativo,
      fechaDescubrimiento: fechaDescubrimiento
    };
    
    planetas.push(planeta);
  }
  
  // Mostrar información de los planetas en la consola
  console.log('Información de los planetas:');
  for (const planeta of planetas) {
    console.log(`Planeta: ${planeta.nombre}`);
    console.log(`Distancia al Sol: ${planeta.distanciaAlSol} UA`);
    console.log(`Tamaño relativo a la Tierra: ${planeta.tamañoRelativo} veces`);
    console.log(`Fecha de descubrimiento: ${planeta.fechaDescubrimiento.toDateString()}`);
    console.log('---------------------------------------------');
  }
  