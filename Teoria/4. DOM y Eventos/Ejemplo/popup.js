/*
//recuperar los elementos del DOM que nos interesan

const button = document.querySelector('button');
const envoltorio = document.querySelector('.envoltorio-pop-up');
const cerrar = document.querySelector('.cerrar-pop-up');

//Eventos
//1. Click sobre el button para mostrar el pop-up
button.addEventListener('click', () => {

    envoltorio.style.display = "block";
});

//2. Click sobre la "X" para cerrar el pop-up
cerrar.addEventListener("click", () => {

    envoltorio.style.display = "none";
});

//3. Click sobre el envoltorio cerrará el pop-up
envoltorio.addEventListener("click", () => {

    envoltorio.style.display = "none";
});
*/

//Lo mismo que arriba, pero utilizando "id" para llamar a los elementos html
const button = document.getElementById('button');
const envoltorio = document.getElementById('envoltorio-pop-up');
const cerrar = document.getElementById('cerrar-pop-up');

//Eventos
//1. Click sobre el button para mostrar el pop-up
button.addEventListener('click', () => {

    envoltorio.style.display = "block";
});

//2. Click sobre la "X" para cerrar el pop-up
cerrar.addEventListener("click", () => {

    envoltorio.style.display = "none";
});

//3. Click sobre el envoltorio cerrará el pop-up
envoltorio.addEventListener("click", () => {

    envoltorio.style.display = "none";
});