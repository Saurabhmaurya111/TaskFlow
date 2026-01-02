const app = require("./app")
const connectDB = require("./config/db")
const User = require("./models/user_model")
const PORT = 3000;



connectDB("mongodb://127.0.0.1:27017/todo").then(()=>{
    console.log(`connected to db`);
});

app.listen(PORT , ()=>{
    console.log(`Server is running at the ${PORT}`)
})