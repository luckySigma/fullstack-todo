import Todo from "../models/Todo.js";

export async function getTodos(req, res) {
  const todos = await Todo.find().sort({ createdAt: -1 });
  res.json(todos);
}

export async function createTodo(req, res) {
  const { title, description } = req.body || {};
  const todo = await Todo.create({ title, description });
  res.status(201).json(todo);
}
