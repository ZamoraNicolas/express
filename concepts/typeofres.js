const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('Bienvenido, estoy usando send')
})

app.get('/file',(req,res)=>{
    res.sendFile('./img.jpg', {
        root: __dirname
    }
    )
})

app.get('/info',(req,res)=>{
    res.json({"Name": "Nicolas"})
})

app.get('/status',(req,res)=>{
    res.status(404).end('Estoy enviando un status')
})

app.listen(3000)
console.log('Puerto activo')