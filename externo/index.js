const express = require('express')
const app =  express()
app.get('/', (req, res)=>{
    res.send('Bem vindo ao meu-app')
})
app.listen(3001, ()=>{
    console.log('Running meu-app')
})