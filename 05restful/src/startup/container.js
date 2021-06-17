const { createContainer, asClass, asValue, asFunction } = require('awilix');

//importar servicios
const { HomeService } = require("../services");
//importar controladores
const { HomeController } =  require("../controllers")


const container =  createContainer();

container.register(
    {
        HomeService: asClass(HomeService).singleton()
    }
)
.register(
    {
        HomeController: asClass(HomeController.bind(HomeController) ).singleton()
    }
)



module.exports = container;