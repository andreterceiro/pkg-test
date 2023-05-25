const express = require('express')
const app =  express()
app.get('/', (req, res)=>{
    res.send('Bem vindo ao meu-app')
})
app.listen(3000, ()=>{
    console.log('Running meu-app')
})

const { exec } = require("child_process");
exec("node ./externo/index.js", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});