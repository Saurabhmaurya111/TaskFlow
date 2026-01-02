const User = require("../models/user_model")
const jwt = require("jsonwebtoken")
class UserServices{
    static async registerUser(email , password){
        try{
         const user = await User.create({
            email,
             password
           })
           return user;
        }catch(err){
           throw err;
        }
    }
    static async checkUser(email){
        try{
         return await User.findOne({email});
        }catch(err){
           throw err;
        }
    }

    static async generateToken (tokenData , secreteKey , jwt_expire){
        return jwt.sign(tokenData , secreteKey ,{expiresIn: jwt_expire})
    }
}

module.exports = UserServices;