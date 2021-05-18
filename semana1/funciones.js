
function saludar(nombre)
{
    return `hola como estas ${nombre}`;
}
const saludar2 = function(nombre)
{
    return `hola como estas ${nombre}`;
}

const saludar3 = (nombre) =>
{
    return `hola como estas ${nombre}`;
}

function llamarFuncionParaSaludar(fn, parametro)
{
    console.log(fn(parametro)) ;
}

llamarFuncionParaSaludar(saludar2, "john");