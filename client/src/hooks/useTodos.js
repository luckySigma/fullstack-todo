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
        current.map((todo) => (todo._id === id ? updated : todo)),
      );
    } catch (err) {
      setActionError(err.message);
    }
  }

  async function removeTodo(id) {
    setActionError(null);
    try {
      await api.deleteTodo(id);
      setTodos((current) => current.filter((todo) => todo._id !== id));
    } catch (err) {
      setActionError(err.message);
    }
  }

  async function editTodo(id, changes) {
    setActionError(null);

    const updated = await api.updateTodo(id, changes);
    setTodos((current) =>
      current.map((todo) => (todo._id === id ? updated : todo)),
    );
  }

  return { todos, loading, error,actionError, addTodo, toggleTodo, removeTodo, editTodo };
}
