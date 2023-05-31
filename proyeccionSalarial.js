
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

    console.log({porcentajesCrecimiento,medianaPorcentajesCrecimiento});
}