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
const precioOrigen = document.querySelector('#priceOrigen');
const cuponDiscount = document.querySelector('#cuponDescuento');
const parrafoResultado = document.querySelector('.parrafoResultado');


//Creamos lista de cupones disponible, con sus respectivos descuentos
const listaCupones = [];

//Agregamos cada cupón deseado al array
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





//Creamos función para calcular el respectivo cupon por cada descuento

botonCalcularCupon.addEventListener("click",descuentoCupon);





function descuentoCupon (e){

        e.preventDefault();
    
        if(!precioOrigen.value || !cuponDiscount.value){
            
            parrafoResultado.innerText = 'Por favor llena el formulario';    
         return;
        }



//Creamos una función para verificar que coincida lo que escriben los usuarios con lo que tenemos en la lista de cupones
//Para hacerlo creamos una variable temporal "elementoCupon", y verificamos con el name de cada objeto del arreglo

        function esCuponDeLista(elementoCupon){
            return elementoCupon.name ==   cuponDiscount.value;
        }

//Buscamos en la lista de elementos el cupón que coincida con name, y dicho elemento que lo contenga será el devuelto
        const siCuponLista = listaCupones.find(esCuponDeLista);   

        
            if(siCuponLista){

                let Descuento = siCuponLista.descuento;
    
                const nuevoPrecio = (priceOrigen.value *(100-Descuento))/100;
                parrafoResultado.innerText = "El nuevo precio es $"+nuevoPrecio;
                return;
            }
            else{
                parrafoResultado.innerText = "Código no válido";            
            }

    }

//      AHORA TRABAJAREMOS CON PROMEDIOS

            //CON EL MÉTODO DE CICLOS FOR

const numerosEnBruto = document.querySelector('#ingresoValoresNumber');
const resultadoPromedioP = document.querySelector('.resultadoPromedio');
const resultadoMedianaP = document.querySelector('.resultadoMediana');
const resultadoModaP = document.querySelector('.resultadoModa');
const btnCalculosMat = document.querySelector('#btnCalculosMat');



btnCalculosMat.addEventListener("click", ponerResultadosEnPantalla);

function ponerResultadosEnPantalla (elemento){
    elemento.preventDefault();
   
    function convertirTextNumber(ulala){
       const listaString = ulala.split(",") ;
       const listaNumberBruto = listaString.map((e)=>{
           return parseInt(e);
       })
       const listaNumber = listaNumberBruto.filter((value) => !isNaN(value));
       return listaNumber;
   }
   const arrayFinalDeNumeros = convertirTextNumber(numerosEnBruto.value);
       
       if(arrayFinalDeNumeros){
           const promedioIS = Platzimath.calcularPromedio(arrayFinalDeNumeros);
           const medianaIS = Platzimath.CalcularMediana(arrayFinalDeNumeros);
           const modaIS = Platzimath.calcularModa(arrayFinalDeNumeros);
           const emoji = '\u{1F449}'
           resultadoPromedioP.innerText =emoji+ promedioIS;
           resultadoMedianaP.innerText = emoji+ medianaIS;
           resultadoModaP.innerText=emoji+ modaIS;
           return;
       }
       

}


            const Platzimath = {};


    Platzimath.calcularPromedio = function calcularPromedio(lista){
        //Sumar todos los valores de los elementos del array / cantidad de elementos
        let sumaLista = 0;
        
        for (let i = 0; i < lista.length; i++) {
            sumaLista = sumaLista + lista[i];
         }
         const promedio = sumaLista / lista.length;
            return promedio;
    }

                // CON EL MÉTODO REDUCE

        /*function calcularPromedio(lista){
        //Sumar todos los valores de los elementos del array / cantidad de elementos
        
            function sumarTodosElementos(valorAcumulado, nuevoValor){
                return valorAcumulado + nuevoValor;
            }

        const sumaLista = lista.reduce(sumarTodosElementos);


         const promedio = sumaLista / lista.length;
            console.log(sumaLista);
            console.log(lista.length);

            return promedio;
    }*/


    Platzimath.CalcularMediana = function CalcularMediana(conjuntoI){

 const conjuntoF = conjuntoI.sort((a,b)=>a-b); /* El método SORT ordena un array, pero lo hace en string
  por eso debemos poner una funcion que reste los dos terminos que tome para hacer la comparación y pedirle que lo reste
  POR DEFECTO LO ORDENARÁ DE MENOR A MAYOR */ 
 

    if(conjuntoF.length%2===0){
        const primerIndexListaPar = conjuntoF[(conjuntoF.length/2)-1];
        const segundoIndexListaPar = conjuntoF[conjuntoF.length/2];
        const medianaListaPar = Platzimath.calcularPromedio([primerIndexListaPar,segundoIndexListaPar]);
        return medianaListaPar;
        
    }else{
        const indexMitadListaImpar = Math.round((conjuntoF.length/2));//Math.round   --> Obtiene el siguiente numero mas cercano( si es >.5 redondea hacia arriba, si es <.5 redonda hacia abajo)
        const medianaListaImpar = conjuntoF[indexMitadListaImpar-1];
        return medianaListaImpar;
    }

}

    Platzimath.calcularModa = function calcularModa(group){
        
    const listaCount = {};

    for(let i = 0;i < group.length;i++){
        const elemento = group[i];

        if(listaCount[elemento]){
            listaCount[elemento]+= 1;
        }else{
            listaCount[elemento] = 1;
        }
    }


    const listaArray = Object.entries(listaCount);
    const listaOrdenada =Platzimath.ordenarListaBidimensional(listaArray);
    const ultimateNumberListaOrdenada = listaOrdenada[listaOrdenada.length-1];
    const penultimateNumberListaOrdenada = listaOrdenada[listaOrdenada.length-2]
    
    if(ultimateNumberListaOrdenada == penultimateNumberListaOrdenada){
    
    const moda = penultimateNumberListaOrdenada[0];   
    return moda;
    }else{
        const noModa = "No existe moda";
        return noModa;
    }
    
}

//PARA PODER HALLAR LA MODA, DEBEMOS CREAR UNA FUNCION QUE ORDENE LA LISTA BIDIMENSIONAL QUE SE CREARÁ 
// AL MOMENTO DE PASARLE LA LISTA DE ELEMENTOS 

    Platzimath.ordenarListaBidimensional = function ordenarListaBidimensional (listaPorOrdenar){
    function ordenarListaSort(valorAcumulado,nuevoValor){
        return valorAcumulado[1] - nuevoValor[1];
    }
    const list = listaPorOrdenar.sort(ordenarListaSort);
    return list;
}
    


//PONDREMOS TODAS LAS FUNCIONES DENTRO DE UN OBJETO PARA FACILITAR SU ACCESIBILIDAD




