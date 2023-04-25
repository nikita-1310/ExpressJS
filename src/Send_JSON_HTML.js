const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("<h1>To send HTML data using ExpressJS</h1>")
})

app.get('/about',(req,res)=>{
    res.send({
        id:1,
        name:"Nikita Agarwal"
    })
})
app.get('/data',(req,res)=>{
    res.send([{
        id:1,
        name:"Nikita Agarwal"
    },
    {
        id:2,
        name:"Neha Agarwal"
    }
])
})

app.get('/json',(req,res)=>{
    res.json([{
        id:null,
        name:"Nikita Agarwal"
    },
    {
        id:2,
        name:"Neha Agarwal"
    }
])
})
app.listen(8000,()=>{
    console.log("Server is started")
})