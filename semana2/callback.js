const libros =[
    {
        id:1,
        titulo:'Sistemas distribuidos con Node.JS',
        idautor:1
    },
    {
        id:2,
        titulo:'Aprendiendo JavaScript',
        idautor:1
    },
    {
        id:3,
        titulo:'Clean Code JS',
        idautor:22
    },
]
const autores = [
    {
        id:1,
        nombre:'Miguel Angel'
    },
    {
        id:2,
        nombre:'Pedro Miguel'
    },
    {
        id:3,
        nombre:'Julio Verne'
    }
]
function buscarLibroPorId(id, callback){
    const libro= libros.find((libro)=>  libro.id===id);
    if (!libro)
    {
        const error = new Error();
        error.message="Libro no encontrado";
        return callback(error);
    }
    callback(null, libro);
}
function buscarAutorPorId(id, callback){
    const autor = autores.find((autor)=>autor.id===id);
    if (!autor)
    {
        const error =  new Error();
        error.message="Autor no encontrado";
        return callback(error);
    }
    callback(null, autor);
}



buscarLibroPorId(3,
(err, libro )=>{
    if (err)
    {
        console.log(err.message);
        return;
    }
    buscarAutorPorId(libro.idautor , (err,autor)=>{
        if (err)
        {
            return console.log(err.message);
        }
        libro.autor= autor;
        delete libro.idautor;
        console.log(libro);
    })
}
);



