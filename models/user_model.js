const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const UserSchema = new mongoose.Schema({
    email:{
        type: String ,
        required: true,
        lowercase:true
    },
    password:{
        type: String ,
        required: true 
    }
})

UserSchema.pre("save",async function(){
    var user = this;
    try{
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password,salt);
        user.password = hash;
    }catch(err){
        throw err;
    }
});

UserSchema.methods.comparePassword = async function(userPassword){
     try{
       const isMatch  = await bcrypt.compare(userPassword , this.password);
       return isMatch;
     }catch(error){
          throw error;
     }
}

const User = mongoose.model("user" , UserSchema);

module.exports = User;
