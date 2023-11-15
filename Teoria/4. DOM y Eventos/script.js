//querySelector.
//paràmetro: selector CSS.
/*
const para1 = document.querySelector('p');      //Dentro de los "()" va el parámetro CSS.
const para2 = document.querySelector('.error');
const para3 = document.querySelector('div.error');
const para4 = document.querySelector('body > h1');
const para5 = document.querySelector('body > h1:nth-child(2)');
const para6 = document.querySelector('body > div:nth-child(3) > p:nth-child(2)');
console.log(para1);
console.log(para2);
console.log(para3);
console.log(para4);
console.log(para5);
console.log(para6);
*/


//querySelectorAll.
//parámetro: selector CSS.
/*
const paras = document.querySelectorAll('p');       //Por mucho que parezca un Array; no lo es!!!
console.log(paras);
//console.log(paras[0]);
paras.forEach(para => {
    console.log(para);
})
*/


//getElementById.
//parámetro: nombre del identificador.
/*
const titulo = document.getElementById('titulo');
console.log(titulo);
*/



//getElementsByClassName.
//parámetro: nombre de la clase asociada a ese elemento.
/*
const errors = document.getElementsByClassName('error');        //Aunque lo parezca; no es un array!!!
console.log(errors);
console.log(errors[0]);
                                //Con esto no se puede hacer un forEach como con el otro (querySelectorAll).
*/


//getElementsByTagName.
//parámetro: nombre del tag del elemento.
/*
const paras = document.getElementsByTagName('p');
console.log(paras);
*/


//Modificar el contenido de la página.
/*
let para = document.querySelector('p');
let contenido = para.innerHTML;
console.log(contenido);
*/
/*
let contenido2 = para.innerText;
console.log(contenido2);
*/
/*
let para = document.querySelectorAll('p');
let contenidoP1 = para[0].innerText;
contenidoP1 = para[0].innerHTML;
console.log(contenidoP1);

para[0].innerText = "Lil Uzi";
contenidoP1 = para[0].innerText;
console.log(contenidoP1);
*/


//Obtener y establecer atributos.
/*
let enlace = document.querySelector('a');
let url = enlace.getAttribute("href");
console.log(url);

enlace.setAttribute("href", "https://i.scdn.co/image/ab677762000056b8df39ab702680d7977e5cd684");
url = enlace.getAttribute("href");
console.log(url);
*/


//Añadir y eliminar estilos
//style
/*
let error = document.querySelector('body > div.error');
error.style.backgroundColor = "red";
error.style.backgroundColor = "";
*/


//Añadir y eliminar clases.
/*
let error = document.querySelector('body > div.error');
console.log(error.classList);
error.classList.add("Flygod");
console.log(error.classList);
error.classList.remove("error");
console.log(error.classList);
*/
/*
let paras = document.getElementsByTagName('p');
let hijo = paras[2];
let padre = hijo.parentNode;
console.log(hijo);
console.log(padre);
let primerHermano = padre.firstElementChild;
console.log(primerHermano);
let siguuienteHermano = hijo.nextElementSibling;
console.log(siguuienteHermano);
*/

//Eventos
//Referenciamos el elemento del DOM.
const par = document.querySelector('p');
//Creamos evento para este elemento.
/*
par.addEventListener('click', () => {

    escribe();
});
*/

par.addEventListener('click', (e) => {

    console.log(e.target);
    console.log(e.target.innerText);
    e.target.innerText = "Texto cambiado";
    console.log(e.target.innerText);

});

par.addEventListener('mouseover', () => {

    escribeotro();
});


function escribe() {

    console.log('BabyTron got me tweaking');
};

function escribeotro() {

    console.log('Drake the kind of guy...');
};

document.addEventListener("keydown", (e) => {

    console.log("Tecla presionada: " + e.key);
})