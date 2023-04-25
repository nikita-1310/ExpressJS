const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("Home page")
})
app.get('/about', (req,res)=>{
    res.send("About page")
})
app.get('/contact', (req,res)=>{
    res.send("Contact page")
})
app.get('/temp', (req,res)=>{
    res.send("Temperature page")
})

app.listen(8000,()=>{
    console.log("Server is started")
})