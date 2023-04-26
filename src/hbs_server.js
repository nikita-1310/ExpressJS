const express = require('express')
const app =express()

app.set('view engine','hbs')
app.get("/",(req,res)=>{
    res.render('index.hbs')
})
app.get('/',(req,res)=>{
    res.send("File is send")
})
app.listen(8000,()=>{
    console.log("server is started")
})