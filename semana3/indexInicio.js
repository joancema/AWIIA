const mongoose= require('mongoose');
const conexion = "mongodb+srv://joancema:jacm1310@cluster0.x7met.mongodb.net/db_test?retryWrites=true&w=majority"

mongoose.connect(conexion,{ useNewUrlParser:true, useUnifiedTopology:true } ) ;

//definiendo el modelo
const Usuario = mongoose.model("Usuario", { nombre:String } );

//a partir del modelo creando un objeto
const usuario1 = new Usuario({nombre:'David Garcia'});


(async ()=>{
    await usuario1.save();
    console.log(`Usuario se creO correctamente`);
    Usuario.find().then(console.log);
})();



