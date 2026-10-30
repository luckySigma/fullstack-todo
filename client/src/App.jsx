import { useEffect, useState } from "react";
import "./index.css";
import { getTodos } from "./apis/todos";
import TodoList from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";
import TodoForm from "./components/TodoForm";

function App() {
  const { todos, loading, error, addTodo } = useTodos();


  return (
    <>
      <main className="container">
        <h1>Todos</h1>

        <TodoForm onAdd={addTodo} />
        {loading && <p>Loading todos...</p>}
        {!loading && error && <p className="error">{error}</p>}
        {!loading && !error && todos.length === 0 && (
          <p>No todos yet. Add one.</p>
        )}

        {!loading && !error && todos.length > 0 && <TodoList todos={todos} />}
      </main>
    </>
  );
}

export default App;
