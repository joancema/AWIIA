let prueba = "5";
const persona = {
    nombre:'Carlos',
    apellido:'Moya',
    esEstudiante: true,
    prueba:prueba,
    getNombreCompleto(){
        return this.nombre+ " " + this.apellido;
    }
}

function mostrarDatosDeLaPersona({ nombre  })
{
    console.log(nombre);
}

mostrarDatosDeLaPersona(persona);

/*
persona.nombre="Juan";
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.getNombreCompleto());
console.log(persona.prueba);
*/