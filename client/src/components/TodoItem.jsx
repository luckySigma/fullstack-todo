import React from "react";

function TodoItem({ todo }) {
  return (
    <li className={todo.done ? "todo-item done" : "todo-item"}>
      <div>
        <span className="todo-title">{todo.title && <p>{todo.title}</p>}</span>
        {todo.description && <p>{todo.description}</p>}
      </div>
    </li>
  );
}

export default TodoItem;
