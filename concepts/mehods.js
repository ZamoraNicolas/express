const express = require('express')

const app = express()

app.get('/help', (req,res) =>{
    res.send('Esta mostrando info')
})

app.post('/help', (req,res) =>{
    res.send('Esta enviando info')
})

app.put('/help', (req,res) =>{
    res.send('Esta cambiando toda la info')
})

app.patch('/help', (req,res) =>{
    res.send('Esta cambiando una parte de la info')
})

app.delete('/help', (req,res) =>{
    res.send('Esta borrando info')
})

app.listen(3000)
console.log("Server activo en puerto 3000") 