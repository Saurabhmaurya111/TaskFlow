const TodoModel = require("../models/todo_model")

class TodoServices{
    static async createTodo(userId , title , desc){
         const createTodo = await TodoModel.create({
              userId , title , desc
         })

         return createTodo;
    }
}

module.exports = TodoServices;