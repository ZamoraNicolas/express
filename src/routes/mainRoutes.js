const express = require("express");
const axios = require('axios')
const route = express.Router();
const message = "Probando ejs";
const app = express()

app.use(express.json())

route.get("/prueba",async (req, res) => { //la funcion debe ser asincrona
  const users = [
    {
      id: 1,
      name: "Juan",
    },
    {
      id: 2,
      name: "lina",
    },
  ];

    const pokemones = await axios.get('https://pokeapi.co/api/v2/pokemon/') //se solicita la info de la api rick and morty
    console.log(pokemones.data.results)
  res.render("index", { message, users, pokemons:pokemones.data.results }); //renderizamos en este caso la vista con ejs junto a una variable
});

module.exports = route;
