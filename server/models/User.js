const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {type:String, required:true} ,
    email: {type:String, required:true} ,
    mobile: {type:Number, required:true},
    password: {type:String, required:true},
    createdAt: Date,
    updatedAt: Date
})

const User = mongoose.model('User', userSchema);

module.exports = User;