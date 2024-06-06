const express = require('express');

const app = express();

app.get('/Nombre',(req,res)=>{
    res.send(`Hola ${req.query.nombre}`)
})

app.listen(3000);
console.log('Puerto activo')