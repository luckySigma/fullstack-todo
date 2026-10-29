import Todo from "../models/Todo.js";

export async function getTodos(req, res) {
  const todos = await Todo.find().sort({ createdAt: -1 });
  res.json(todos);
}
