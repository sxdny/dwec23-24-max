//COOKIES

/*
    Las cookies son utilizadas para:

        - Monitorizar la actividad de los usuarios.
        - Mantener opciones de visualización o de aspecto para el usuario.
        - Almacenar variables en el lado cliente.
        -Identificación o autentificación.
*/

//CREACIÓN DE UNA COOKIE

//Otorgamos un nombre a la cookie
/* document.cookie = "usuario = Oreo"; --> Esta es una forma de nombrarlo, pero no es muy adecuada*/

//Forma más correcta de nombrarlo
/* let usuarioCookie = "Oreo";
document.cookie = "usuario =" + encodeURIComponent(usuarioCookie); */

//Cookies en una función (utilizada con los botones - Crear Cookie y Leer Cookie -).
function crearCookie(usuarioCookie){

    console.log("Creando la cookie...");

    usuarioCookie += "; expires = Tue, 7 Nov 2023 12:51:00 GMT";  //Al poner nombres de días o meses, solo nos permite las tres primeras letras. Cuando descodifiquemos lo codificado en la línea 27, nos saldrá esto que hemos establecido.
    document.cookie = "usuario =" + encodeURIComponent(usuarioCookie);
}

function leerCookie(){

    console.log("Leyendo las cookies...");

    console.log(document.cookie);
    console.log(decodeURIComponent(document.cookie)); //Para poder sacar la línea llena de caracteres delante de ususario=Oreo. Lo que hemos codificado en la línea 27 pasa a ser descodificado en esta línea.
}

/* ____________________________________________________________________________________________________________________________________________________________ */

//LOCAL STORAGE

function guardarValores(){

    console.log("Guardando valores en la Local Storage...");
    localStorage.setItem("usuarios", "Lil Uzi be hitting");  //Establecemos la cookie en el primer apartado (primer apartado, segundo apartado) y su valor en el segundo.
}

function leerValores(){

    console.log("Leyendo valores en la Local Storage...");
    let valor = (localStorage.getItem("usuarios"));
    console.log(valor == null ? "La clave no se ha encontrado." : valor);
}

//Con Arrays u Objetos.
function guardarValoresArrayObjeto(){

    console.log("Guardando valores en la Local Storage...");
    let usuariosWeb = ["Jose", "Uzi", "Carti"];
    let ususariosObjeto = {

        nombre: "Westside Gunn",
        apellido: "Fly God"
    };
    localStorage.setItem("usuarios", JSON.stringify(ususariosObjeto));  //Establecemos la cookie en el primer apartado (primer apartado, segundo apartado) y su valor en el segundo.
}                                                                       //Tendremos que añadir un JSON.stringify para que salga bien. Por loque en la línea 71...

function leerValoresArrayObjeto(){

    console.log("Leyendo valores en la Local Storage...");
    let valor = JSON.parse(localStorage.getItem("usuarios")); //Tendremos que añadir un JSON.parse
    console.log(valor == null ? "La clave no se ha encontrado." : valor);
}