import * as api from "../apis/todos";
import { useState, useEffect } from "react";

export function useTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return { todos, loading, error, addTodo };
}
