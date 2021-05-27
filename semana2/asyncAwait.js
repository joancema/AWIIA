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

async function buscarLibroPorId(id)
{
    const libro = libros.find((libro)=> libro.id===id );
    if (!libro)
    {
        const error =  new Error();
        error.message="No existe el libro";
        throw error;
    }
    return libro;
}
async function buscarAutorPorId(id)
{
    const autor = autores.find((autor)=> autor.id===id );
    if (!autor)
    {
        const error =  new Error();
        error.message="No existe el autor";
        throw error;
    }
    return autor;
}


async function main()
{
    try {
        const libro= await  buscarLibroPorId(1); ////devuelve un millon de registros y tarda 1 minuto
        const autor = await buscarAutorPorId(libro.idautor); /// devuelve 3 millones de registros y tarde 30 segundos
        console.log(`Libro ser llama ${libro.titulo} y el autor es ${autor.nombre}`);
        
    } catch (err) {
        console.log(err.message)
    }

}

main();