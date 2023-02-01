const titulo = document.querySelector(".titulo");
titulo.setAttribute("contentEditable","true");
//Creamos selectores para el HTML
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
//Agregamos el método escuchador de eventos 
btn.addEventListener('click',btnOnclick);/*Enviamos 2 parámetros:
El primero es el evento que debe esperar escuchar y 
el segundo es la función que quiero que dispare luego de escuchar 
el evento que designe en el primer parámetro*/

//Creamos función para interactuar con HTML
function btnOnclick(){
    const sumaInputs = input1.value + input2.value;
    pResult.innerText ='Resultado: '+ sumaInputs;
}

//AHORA CON UN FORMULARIO:

//Creamos selectores para el HTML
const form = document.querySelector('.form');
const In1 = document.querySelector('#formInput1');
const In2 = document.querySelector('#formInput2');
const btnForm = document.querySelector('#btnForm');
const resultForm = document.querySelector('#resultForm');
//Agregamos el método escuchador de eventos 
form.addEventListener('submit',sumarInputsValues);/*Enviamos 2 parámetros:
El primero es el evento que debe esperar escuchar y 
el segundo es la función que quiero que dispare luego de escuchar 
el evento que designe en el primer parámetro*/

//Creamos función para interactuar con HTML
function sumarInputsValues(e){
    e.preventDefault();
    const sumaIn = In1.value + In2.value;
    resultForm.innerText ='Resultado: '+ sumaIn;
}
