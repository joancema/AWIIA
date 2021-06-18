const { createContainer, asClass, asValue, asFunction } = require('awilix');

//importar servicios
const { HomeService } = require("../services");
//importar controladores
const { HomeController } =  require("../controllers")

//importar rutas
const { HomeRoutes  } = require("../routes/index.routes")


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
.register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
})




module.exports = container;