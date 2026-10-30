import { useEffect, useState } from "react";
import "./index.css";
import { getTodos } from "./apis/todos";
import TodoList from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";
import TodoForm from "./components/TodoForm";

function App() {
  const { todos, loading, error,actionError, addTodo, toggleTodo, removeTodo } = useTodos();

  return (
    <>
      <main className="container">
        <h1>Todos</h1>

        <TodoForm onAdd={addTodo} />
        {actionError && <p className="error">{actionError}</p>}
        {loading && <p>Loading todos...</p>}
        {!loading && error && <p className="error">{error}</p>}
        {!loading && !error && todos.length === 0 && (
          <p>No todos yet. Add one.</p>
        )}

        {!loading && !error && todos.length > 0 && <TodoList todos={todos} onToggle={toggleTodo} onDelete={removeTodo}/>}
      </main>
    </>
  );
}

export default App;
