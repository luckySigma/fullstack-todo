import React from "react";

function TodoItem({ todo }) {
  return (
    <li>
      <span>{todo.description && <p>{todo.description}</p>}</span>
    </li>
  );
}

export default TodoItem;
