const libros =[
    {
        id:1,
        titulo:'Sistemas distribuidos con Node.JS',
    },
    {
        id:2,
        titulo:'Aprendiendo JavaScript',
    },
    {
        id:3,
        titulo:'Clean Code JS',
    },
]
function buscarLibroPorId(id, callback){
    const libro= libros.find((libro)=>  libro.id===id);
    if (!libro)
    {
        //generar una excepcion
        //retornar ese error con el callback
    }
    //invocar al callback con el libro encontrado
}

buscarLibroPorId(25, (err, libro )=>{

});


