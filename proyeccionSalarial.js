
//Análisis personal para Juanita



function encontrarPersona(personaBuscada){
    return salarios.find(persona => persona.name == personaBuscada);    
}

function medianaPorPersona (nombrePersona){
const trabajos = encontrarPersona(nombrePersona).trabajos;

const salarios = trabajos.map(function(e){
return e.salario;
});
console.log(salarios);
}
function proyeccionPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];

    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i-1].salario;
        const porcentajeCrecimiento = (salarioActual - salarioPasado)/salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }

    const medianaPorcentajesCrecimiento = Platzimath.CalcularMediana(porcentajesCrecimiento);

    //console.log({porcentajesCrecimiento,medianaPorcentajesCrecimiento});

    const ultimoSalario = trabajos[trabajos.length-1].salario;
    const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumento;

    return nuevoSalario;
}

const empresas = {};

for (persona of salarios){
    for(trabajo of persona.trabajos){
        if(!empresas[trabajo.empresa]){//verificamos la existencia de esta propiedad en el objeto empresas
            empresas[trabajo.empresa] = {};//de lo contrario lo agregamos asignandole un objeto vacío
        }
        if(!empresas[trabajo.empresa][trabajo.year]){//verificamos la existencia de estas propiedad en el objeto empresas
            empresas[trabajo.empresa][trabajo.year] = [];//de lo contrario lo agregamos asignandole un array vacío
        }
        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}

console.log({empresas});


//FUNCION PARA CALCULAR LA MEDIANA DE UNA EMPRESA EN UN AÑO EN ESPECIFICO




function medianaDeEmpresaYear (nombre, year){
    if(!empresas[nombre]){
        console.warn('La empresa no existe');
    }else if(!empresas[nombre][year]){
        console.warn('La empresa no dio salarios ese año');
    }else{
        return Platzimath.CalcularMediana(empresas[nombre][year]);
    }
}


function proyeccionPorEmpresa(nombre){
    if(!empresas[nombre]){
        console.warn("La empresa no existe");
    }else{
    //Esto nos dará la lista de todos los años, es decir la llave
    const empresaYears = Object.keys(empresas[nombre]);
    const listaMedianaYears = empresaYears.map((year)=>{ //Aca tendremos una lista de arrays 
        return medianaDeEmpresaYear(nombre,year);// que tiene cada año con su mediana de salariosAnual
    });
    let porcentajesCrecimientoII = [];

    for (let i = 1; i < listaMedianaYears.length; i++) {
        const medianaActual = listaMedianaYears[i];
        const medianaPasado = listaMedianaYears[i-1];
        const porcentajeCrecimiento = (medianaActual - medianaPasado)/medianaPasado;
        porcentajesCrecimientoII.push(porcentajeCrecimiento);
    }

    const medianaPorcentajesCrecimiento = Platzimath.CalcularMediana(porcentajesCrecimientoII);

    const ultimoMediana = listaMedianaYears[listaMedianaYears.length-1];
    const aumento = ultimoMediana * medianaPorcentajesCrecimiento;
    const nuevoMediana = ultimoMediana + aumento;

    return nuevoMediana;
    }
}