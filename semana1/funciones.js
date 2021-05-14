
function saludar(nombre)
{
    console.log(`hola como estas ${nombre}`);
}
const saludar2 = function(nombre)
{
    console.log(`hola como estas ${nombre}`);
}
const saludar3 = (nombre) =>
{
    console.log(`hola como estas ${nombre}`);
}
function llamarFuncionParaSaludar(fn, parametro)
{
    fn(parametro);
}

llamarFuncionParaSaludar(saludar2, "john");