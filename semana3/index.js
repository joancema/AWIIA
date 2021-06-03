const mongoose = require("mongoose");
const cheerio = require("cheerio");
const cron = require("node-cron");
const axios = require("axios").default;

const { MONGO_URI } = require("./config");
const { Noticias } = require("./models");

//conexion a la base de datos
mongoose.connect(MONGO_URI, { useNewUrlParser:true, useUnifiedTopology:true } );
//que se ejecute como un cronjob

cron.schedule("* * * * *",
async () =>{

    //conectarnos a la pAgina web que vamos a hacer web scrapping
    //Obtenemos todo el HTML
    const html = await  axios.get("https://cnnespanol.cnn.com/") ;

    const $ = cheerio.load(html.data);

    const titulos=  $(".news__title");

    let arregloNoticias=[];
    //filtrar las noticias
    titulos.each((index, element)=>{
        //almacenar la informaciOn
        const Noticia = {
              titulo: $(element).text().toString(),
              enlace: $(element).children().attr("href")
        }
        arregloNoticias= [...arregloNoticias, Noticia];
    }) 
    Noticias.create(arregloNoticias);
});
    