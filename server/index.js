const express = require('express')
const app = express();

const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;


app.use(bodyParser.urlencoded({extended:true}))

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    mobile: Number,
    password: String,
    createdAt: Date,
    updatedAt: Date
})

const jobSchema = mongoose.Schema({
    company_name: String,
    logo_url: String,
    job_position: String,
    monthly_salary: Number,
    job_type: String,
    remote_or_office: String,
    location: String,
    job_description: String,
    about_company: String,
    skills_required: String,
    information: String
})


const User = mongoose.model('User', userSchema);
const Job = mongoose.model('Job',jobSchema);


app.get('/', async (req,res)=>{
    try{
        const userData = await User.find();
        res.json(userData);
    }
    catch(error){
        res.status(500).json({
            status:'Failed',
            message: error.message
        })
    }
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