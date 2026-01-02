const UserServices = require("../services/user_services")

exports.register = async (req , res , next)=>{
    try{
     const {email , password} = req.body;
     const succesRes = await UserServices.registerUser(email, password);

     res.json({
        status:true , success: "User Registered Successfully"
     })
    }catch(err){
       throw err
    }
}