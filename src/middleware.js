const express = require('express');
const path = require('path');
const app = express();

const staticPath = path.join(__dirname,"../public")

// To use middleware to serve the static files
app.use(express.static(staticPath))

app.get('/', (req,res)=>{
    res.send("Hello data from express data")
})

app.listen(8000,()=>{
    console.log("Server is started")
})
