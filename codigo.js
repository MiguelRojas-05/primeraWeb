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

//Calculando descuentos
const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const btnCalcularDiscount = document.querySelector('#calcular');
const pResultDiscount = document.querySelector('#resultDiscount'); 

btnCalcularDiscount.addEventListener('click',calcularPrecioDescuento);

function calcularPrecioDescuento(e){
    e.preventDefault();

    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);

    if(!price || !discount){
        pResultDiscount.innerText = 'Por favor llena el formulario';    
    
        return;
    }
    if(discount>60){
        pResultDiscount.innerText = 'No podemos hacer mas de 60% de descuento';
        
        return;
    }
        const newPrice = (price *(100-discount))/100;

        pResultDiscount.innerText = 'El nuevo precio con descuento es $'+newPrice;
    
    
}


// Descuentos con cupones, implementando método propio


const botonCalcularCupon = document.querySelector('#botonCupones');
const INPUTpriceOrigen = document.querySelector('#priceOrigen');
const cuponDescuento = document.querySelector('#cuponDescuento');
const parrafoResultado = document.querySelector('.parrafoResultado')
const priceOrigen = Number(INPUTpriceOrigen.value);

//Creamos lista de cupones disponible, con sus respectivos descuentos
const listaCupones = [];
listaCupones.push({
    name:'123',
    descuento:40
});

listaCupones.push({
    name:'456',
    descuento:30
});

listaCupones.push({
    name:'789',
    descuento:20
});


//const codigoCuponDisponible = "platzi123";


//Creamos función para calcular el respectivo cupon por cada descuento
botonCalcularCupon.addEventListener("click",descuentoCupon);


botonCalcularCupon.addEventListener("mouseover", moverCondicionalBoton);

function moverCondicionalBoton(){
    
     
    
    if(!priceOrigen || !cuponDescuento){
    
        botonCalcularCupon.classList.toggle('move1');
    }   
}

function descuentoCupon (e){

        e.preventDefault();

            

        if(!priceOrigen || !cuponDescuento){
       //     parrafoResultado.innerText = 'Por favor llena el formulario';    
    
        // return;

        

        

        }

        let descuento;


//Creamos una función para verificar que coincida lo que escriben los usuarios con lo que tenemos en la lista de cupones
//Para hacerlo creamos una variable temporal "elementoCupon", y verificamos con el name de cada objeto del arreglo

        function esCuponDeLista(elementoCupon){
            return elementoCupon.name ==   cuponDescuento.value;
        }

//Buscamos en la lista de elementos el cupón que coincida con name, y dicho elemento que lo contenga será el devuelto
        const siCuponLista = listaCupones.find(esCuponDeLista);   


        if(siCuponLista){

            descuento = siCuponLista.descuento;

            const nuevoPrecio = (priceOrigen *(100-descuento))/100;
            parrafoResultado.innerText = "El nuevo precio es $"+nuevoPrecio;
            return;
        }
        else{
            parrafoResultado.innerText = "Código no válido";            
        }

    }


