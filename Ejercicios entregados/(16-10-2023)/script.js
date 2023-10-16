let a = {
    nombre: "Symere",
    notas: [8, 4, 9],
    media: function media(){
        let media = (a.notas[0] + a.notas[1] + a.notas[2]) / 3;
        return media
    }
}

console.log("El alumno " + a.nombre + " ha sacado una media de: " + a.media());