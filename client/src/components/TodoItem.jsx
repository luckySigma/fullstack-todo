import React, { useState } from "react";

function TodoItem({ todo, onToggle, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  async function handleSave() {
    if (!title.trim()) {
      return;
    }
    await onEdit(todo._id, { title, description });
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <li className="todo-item">
        <div>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button onClick={handleSave} disabled={!title.trim()}>Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </li>
    );
  }

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
        onClick={() => {
          setIsEditing(true);
        }}
      >
        Edit
      </button>
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
