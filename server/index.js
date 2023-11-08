const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
dotenv.config();

const registerRoute = require('./routes/register.js');
const loginRoute = require('./routes/login.js')
const jobRoute = require('./routes/job.js')

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get('/health',(req,res)=>{
    res.json({
        status:'active',
        service:'job listing backend',
        time: new Date()
    })
})

app.use(registerRoute);
app.use(loginRoute);
app.use(jobRoute);


app.use((req,res,next)=>{
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
})

// Error handler

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        status: error.status || 500,
        message: error.message
    })
})


app.listen(PORT,(err)=>{
    mongoose
        .connect(MONGODB_URL)
        .then(()=>console.log(`server started successfully at http://localhost:${PORT}`))
        .catch((err)=>console.log(err))
})
