const express = require('express');
const { retrieveAllTodos, retrieveTodoById, addNewTodo, updateTodo, deleteTodo } = require('../controllers/todoController');
const { authenticate } = require('../middlewares/authenticate');
const todoRouter = express.Router();

todoRouter.get('/', authenticate, retrieveAllTodos)

todoRouter.get('/:id', authenticate, retrieveTodoById)

todoRouter.post("/", authenticate, addNewTodo);

todoRouter.put("/:id", authenticate, updateTodo)

todoRouter.delete("/:id", authenticate,deleteTodo);

module.exports = todoRouter