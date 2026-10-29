import { useEffect, useState } from "react";
import "./App.css";
import { getTodos } from "./apis/todos";
import TodoList from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";

function App() {
  const { todos, loading, error } = useTodos();

  useEffect(() => {
    getTodos().then((todos) => console.log(todos));
  }, []);

  return (
    <>
      <main className="container">
        <h1>Todos</h1>
        {loading && <p>Loading todos...</p>}
        {!loading && error && <p>{error}</p>}
        {!loading && !error && todos.length === 0 && <p>No todos yet. Add one.</p>}

        {!loading && !error && todos.length > 0 && <TodoList todos={todos}/>}
      </main>
    </>
  );
}

export default App;
