const TodoModel = require("../models/todo_model")

class TodoServices{
    static async createTodo(userId , title , desc){
         const createTodo = await TodoModel.create({
              userId , title , desc
         })

         return createTodo;
    }

    static async getTodoList(userId){
     const  todoList = await TodoModel.find({userId});
     
     return todoList;
    }

    static async deleteitem(id){
     const  deleted = await TodoModel.findOneAndDelete({_id:id}); 
     return deleted;
    }
}

module.exports = TodoServices;