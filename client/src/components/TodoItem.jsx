import React from "react";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={todo.done ? "todo-item done" : "todo-item"}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo._id)}
      />
      <div>
        <span className="todo-title">{todo.title && <p>{todo.title}</p>}</span>
        {todo.description && <p>{todo.description}</p>}
      </div>
      <button
        className="delete"
        onClick={() => {
          if (window.confirm("Delete this todo?")) {
            onDelete(todo._id);
          }
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
