//helpers
//hookers
//librerias

function operacion(n1,n2, operacion="sumar")
{
    switch(operacion)
    {
        case "sumar":
            return n1+n2;
            break;
        case "restar":
            return (n1-n2);
            break;
        case "multiplicar":
            return (n1*n2);
            break;
        case "dividir":
            return (n1/n2);
            break;
        default:
            return 0;
    
    }

}
function saludar(nombre)
{
    return `Hola buenos dIas ${nombre}`;
    //coerciOn de datos

}
module.exports= {
    funcion1: operacion,
    saludar
}
