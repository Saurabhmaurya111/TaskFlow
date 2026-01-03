const TodoServices = require("../services/todo_services")

exports.createTodo = async (req , res , next)=>{
    try{
     const {userId , title , desc} = req.body;
     let todo = await TodoServices.createTodo(userId , title, desc);
     res.json({status:true , success: todo})
    }catch(err){
        next(err);
    }
}

exports.getUserTodo = async (req , res , next)=>{
    try{
       const {userId} = req.body;
       let todoList = await TodoServices.getTodoList(userId);

     res.json({status:true , success: todoList})
    }catch(err){
       next(err);
    }
}
exports.deleteitem = async (req , res , next)=>{
    try{
       const {id} = req.body;
       let deletedItem = await TodoServices.deleteitem(id);

     res.json({status:true , success: deletedItem})
    }catch(err){
       next(err);
    }
}