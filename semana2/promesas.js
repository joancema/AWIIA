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
        idautor:2
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

function buscarLibroPorId(id)
{
    return new Promise((resolve, reject)=>{
        const libro = libros.find((libro)=> libro.id===id);
        if (!libro)
        {
            const error= new Error();
            error.message="Libro no encontrado";
            reject(error);
        }
        resolve(libro);
    })
}
function buscarAutorPorIdYAsociarAlLibro (libro)
{
    return new Promise((resolve,reject)=>{
        const autor =  autores.find((autor)=> autor.id===libro.idautor)
        if (!autor)
        {
            const error= new Error();
            error.message="Autor no encontrado";
            reject(error);
        }
        libro.autor=autor;
        resolve(libro);
    })
}

//let libroAuxiliar={};

buscarLibroPorId(212).then((libro)=>{
    libroAuxiliar=libro;
    return buscarAutorPorId(libro);
}).then((libro)=>{
    //libroAuxiliar.autor= autor;
    //delete libroAuxiliar.idautor;
    console.log(libro);
}).catch((error)=>{
    console.log(error.message)
})