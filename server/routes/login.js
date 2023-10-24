const express= require('express')
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET_KEY = process.env.SECRET_KEY;

router.post('/login', async (req,res,next)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            throw {message:'Email and Password required'}
        }
        const userData = await User.findOne({email});
        if(!userData){
            throw {message:'User does not exist'}
        }
        const passwordMatched = await bcrypt.compare(password, userData.password);
        if(!passwordMatched){
            throw {message:'Invalid Password'}
        }
        const token = jwt.sign({userData},SECRET_KEY,{expiresIn: '1w'});
        res.header('Authorization', token);

        res.status(200).json({
            message: 'Login Successful',
            token: token
        });
    }
    catch(error){
        next(error)
    }
})

module.exports = router