const router = require("express").Router()
const TodoController = require("../controllers/todo_controllers")

router.post("/storeTodo" , TodoController.createTodo);

module.exports = router;