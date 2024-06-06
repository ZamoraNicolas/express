const express = require('express')
const path = require('path')
const route = require('./routes/mainRoutes')
const app = express()
require('ejs')

app.set('view engine','ejs') //configuracion para determinar que motor de vistas se usara
app.set('views',path.join(__dirname,'views')) //direccion de la carpeta con las vistas

app.use(route)
app.use('/estatico',express.static(path.join(__dirname,'static')))


app.listen(3000)
console.log('Escuchando')