import { useEffect, useState } from "react";
import "./App.css";
import { getTodos } from "./apis/todos";

function App() {
  useEffect(() => {
    getTodos().then((todos) => console.log(todos));
  }, []);

  return (
    <>
      <main className="container">
        <h1>Todos</h1>
      </main>
    </>
  );
}

export default App;
