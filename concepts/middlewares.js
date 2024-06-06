const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log('Paso por aqui')

    next()
})

app.get('/Juegos',(req,res)=>{
    res.send('Bienvenido a juegos y jueguitos')
})

app.use((req,res,next)=>{
    if(req.query.user === 'Nicolas'){
        next() 
    } else {
        res.send('No tienes acceso')
    }
})

app.get('/Privado',(req,res)=>{
    res.send('Archivos privados');
})


app.listen(3000);
console.log('Puerto activo')