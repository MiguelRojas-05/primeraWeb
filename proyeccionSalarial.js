
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
