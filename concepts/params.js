const express = require('express')

const app = express()

app.get('/users/:userName/age/:userAge',(req,res)=>{
    res.send(`Bienvenido mi queridisimo amigo ${req.params.userName} que tiene ${req.params.userAge}`)
})

app.listen(3000)
console.log(`server activo en el puerto ${3000}`)

