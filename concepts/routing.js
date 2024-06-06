const express = require('express')

const app = express()

app.get('/', (req,res) =>{
    res.send('Bienvenido')
})

app.get('/about', (req,res) =>{
    res.send('Acerca de nosotros')
})

//Esto es para las rutas que no esten definidas

app.use((req,res)=>{
    res.status(400).send('Aqui no hay nada')
})

app.listen(3000)
console.log("Server activo en puerto 3000") 