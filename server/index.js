const express = require('express')
const app = express();

const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
dotenv.config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;
const SECRET_KEY = process.env.SECRET_KEY;


app.use(bodyParser.urlencoded({extended:true}))

const userSchema = mongoose.Schema({
    name: {type:String, required:true} ,
    email: {type:String, required:true} ,
    mobile: {type:Number, required:true},
    password: {type:String, required:true},
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


app.get('/api/health',(req,res)=>{
    res.json({
        status:'active',
        service:'job listing backend',
        time: new Date()
    })
})

app.post('/register', async (req,res)=>{
    try{
        const {name,email,mobile,password} = req.body;
        if(!email){
            throw {message:'Email is required'}
        }
        const userExits = await User.findOne({email});
        // console.log(userExits);
        if(userExits){
            throw {message:'Email already exits'}
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = {name,email,mobile,password:hashedPassword};
        await User.create(newUser);

        res.status(200).json({message: 'Registration Successful'});
    }
    catch(error){
        res.status(500).json({
            message: error.message
        })
    }
})

app.post('/login', async (req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            throw {message:'Email and Password required'}
        }
        const user = await User.findOne({email});
        if(!user){
            throw {message:'User does not exist'}
        }
        const passwordMatched = await bcrypt.compare(password, user.password);
        if(!passwordMatched){
            throw {message:'Invalid Password'}
        }
        const token = jwt.sign({user},SECRET_KEY,{expiresIn: '1w'});
        
        res.status(200).json({
            message: 'Login Successful',
            token: token
        });
    }
    catch(error){
        res.status(500).json({
            message: error.message
        })
    }
})



app.listen(PORT,(err)=>{
    mongoose
        .connect(MONGODB_URL)
        .then(()=>console.log(`server started successfully at http://localhost:${PORT}`))
        .catch((err)=>console.log(err))
})