const { createContainer, asClass, asValue, asFunction } = require('awilix');


const config = require("../config");

//importar servicios
const { HomeService, UserService } = require("../services");

//importar controladores
const { HomeController } =  require("../controllers")

//importar rutas
const { HomeRoutes  } = require("../routes/index.routes")
const Routes = require("../routes");

// importar modelos

const { User } = require('../models')

//importar repositorios

const { UserRepository }  = require('../repositories');

const app = require('.');

const container =  createContainer();

container
.register(
    {
        app: asClass(app).singleton(),
        router:asFunction(Routes).singleton(),
        config: asValue(config)
    }
)
.register(
    {
        HomeService: asClass(HomeService).singleton(),
        UserService: asClass(UserService).singleton()
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
.register(
    {
        User: asValue(User)
    }
)
.register(
    {
        UserRepository: asClass(UserRepository).singleton()
    }
)


module.exports = container;