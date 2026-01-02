const User = require("../models/user_model")
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
}

module.exports = UserServices;