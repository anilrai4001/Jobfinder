const express = require('express')
const app = express();

const mongoose = require('mongoose')
const bodyparser = require('body-parser');
const dotenv = require('dotenv')
dotenv.config();


const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;


app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/api/health',(req,res)=>{
    res.json({
        status:'active',
        service:'job listing backend',
        time: new Date()
    })
})

app.listen(PORT,(err)=>{
    mongoose
        .connect(MONGODB_URL)
        .then(()=>console.log(`server started successfully at http://localhost:${PORT}`))
        .catch((err)=>console.log(err))
})