function operacion(n1,n2, operacion="sumar")
{
    switch(operacion)
    {
        case "sumar":
            console.log(n1+n2);
            break;
        case "restar":
            console.log(n1-n2);
            break;
        case "multiplicar":
            console.log(n1*n2);
            break;
        case "dividir":
            console.log(n1/n2);
            break;
        default:
            console.log(`La operaciOn ${operacion} no se encuentra definida.`);
    
    }

}
function saludar(nombre)
{
    console.log(`Hola buenos dIas ${nombre}`);
}
module.exports= {
    operacion,
    saludar
}
