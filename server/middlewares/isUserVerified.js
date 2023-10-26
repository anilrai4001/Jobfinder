const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

const isUserVerified = async (req,res,next) => {
    try{
        const token = req.header('Authorization');

        if(!token){
            throw {message:'Please log in first'};
        }

        const decoded = jwt.verify(token, SECRET_KEY);
        if(!decoded){
            throw {message: 'User is not authenticated'}
        }
        // console.log(decoded.userId);
        req.userId = decoded.userId;
        next();
    }
    catch(error){
        next(error);
    }

}

module.exports = isUserVerified