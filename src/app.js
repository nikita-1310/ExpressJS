const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("Hello data from express data")
})

app.listen(9000,()=>{
    console.log("Server is started")
})