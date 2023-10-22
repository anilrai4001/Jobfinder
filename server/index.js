const express = require('express')
const bodyparser = require('body-parser');
const dotenv = require('dotenv')
dotenv.config();

app.use(express.bodyparser({extended:true}));

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(process.env.PORT,(err)=>{
    if(err) return console.log(error);
    console.log('server started successfully at http://localhost:5000')
})