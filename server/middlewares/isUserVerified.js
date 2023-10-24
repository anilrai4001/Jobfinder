const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

const isUserVerified = async (req,res,next) => {
    try{
        const token = req.header('Authorization');

        if(!token){
            throw {message:'Please log in first'};
        }

        

        jwt.verify(token, SECRET_KEY, (err,decoded)=>{
            if(err){
                throw {message: 'User is not authenticated'}
            }
            req.user = decoded.user;
            next();
        });

    }
    catch(error){
        next(error);
    }

}

module.exports = isUserVerified