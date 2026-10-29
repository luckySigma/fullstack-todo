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

export async function updateTodo(req, res) {
  const { title, description } = req.body || {};
  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    { title, description },
    { new: true, runValidators: true },
  );
  res.json(todo);
}

export async function toggleDone(req, res) {
  const todo = await Todo.findById(req.params.id);

  todo.done = !todo.done;
  await todo.save();

  res.json(todo);
}

export async function deleteTodo(req, res) {
  const todo = await Todo.findByIdAndDelete(req.params.id);

  res.json({ message: "Todo deleted", id: todo._id });
}
