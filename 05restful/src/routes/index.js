const express = require('express');
const cors = require('cors');
const  helmet = require('helmet');
const compression = require('compression')
require('express-async-errors');

module.exports =  function({HomeRoutes }){
    //nivel1
    //v1/api
    //v2/api
    const router =  express.Router();
    //nivel2
    //     /Home/  
    //     /Home/index
    //     /Home/MostrarMensaje
    const apiRoutes = express.Router();
     apiRoutes.use(express.json())
     .use(cors())
     .use(helmet())
     .use(compression())

     apiRoutes.use('/home', HomeRoutes );
     router.use("/v1/api", apiRoutes);
    return router;

    //localhost:5000/v1/api/home/mostrarMEnsaje


}
