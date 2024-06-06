const express = require('express')

const app = express()

app.use(express.text()) //Linea para que express entienda la info que esta recibiendo
app.use(express.json())  //Linea para que express entienda la info que esta recibiendo
app.use(express.urlencoded({extended:false})) //Linea para que express entienda la info que esta recibiendo

app.post('/envio',(req,res)=>{
    console.log(req.body)
    res.send('Info enviada')
})

app.listen(3000)
console.log('Puerto activo')