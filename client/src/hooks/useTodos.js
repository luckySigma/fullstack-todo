import * as api from "../apis/todos";
import { useState, useEffect } from "react";

export function useTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [actionError, setActionError] = useState(null);

  useEffect(() => {
    async function loadTodos() {
      try {
        const data = await api.getTodos();
        setTodos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadTodos();
  }, []);

  async function addTodo(newTodo) {
    const created = await api.createTodo(newTodo);
    setTodos((current) => [created, ...current]);
  }

  async function toggleTodo(id) {
    setActionError(null);
    try {
      const updated = await api.toggleTodo(id);
      setTodos((current) =>
        current.map((todo) => (todo._id == id ? updated : todo)),
      );
    } catch (error) {
      setActionError(err.message);
    }
  }

  async function removeTodo(id) {
    setActionError(null);
    try {
      await api.deleteTodo(id);
      setTodos((current) => current.filter((todo) => todo._id !== id));
    } catch (error) {
      setActionError(err.message);
    }
  }

  return { todos, loading, error, addTodo, toggleTodo, removeTodo };
}
