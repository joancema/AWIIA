//core
const express = require('express');
//terceros
const compression = require('compression')
const cors = require('cors');
require('express-async-errors');
const  helmet = require('helmet');
//propios
const { NoFoundMiddleware, ErrorMiddleware }  = require('../middlewares');



module.exports =  function({HomeRoutes, UserRoutes }){
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
     apiRoutes.use('/user', UserRoutes );



     router.use("/v1/api", apiRoutes);

        ///middewares lOgicos

        router.use(NoFoundMiddleware);
        router.use(ErrorMiddleware);


    return router;

    //localhost:5000/v1/api/home/mostrarMEnsaje


}
