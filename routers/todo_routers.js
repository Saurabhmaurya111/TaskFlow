const router = require("express").Router()
const TodoController = require("../controllers/todo_controllers")

router.post("/storeTodo" , TodoController.createTodo);
router.post("/getUserTodoList" , TodoController.getUserTodo)
router.delete("/deleteTodo" , TodoController.deleteitem)

module.exports = router;