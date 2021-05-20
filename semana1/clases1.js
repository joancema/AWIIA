let prueba = "5";
const persona = {
    nombre:'Carlos',
    apellido:'Moya',
    esEstudiante: true,
    prueba:prueba,
    geolocalizacion: {
        lat:12.123,
        lng:14.234234,
    },
    getNombreCompleto(){
        return this.nombre+ " " + this.apellido;
    }
}


function mostrarDatosDeLaPersona({ nombre, geolocalizacion:{ lat, lng }})
{
    console.log(nombre);
    console.log(lat, lng)
}
mostrarDatosDeLaPersona(persona);



/*
const estudiante = {...persona};

estudiante.nombre="Roberth";
console.log(persona);
*/

/*
function mostrarDatosDeLaPersona({ nombre  })
{
    console.log(nombre);
}
mostrarDatosDeLaPersona(persona);
/*
/*
persona.nombre="Juan";
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.getNombreCompleto());
console.log(persona.prueba);
*/