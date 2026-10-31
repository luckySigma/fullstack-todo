import { useState } from "react";

function TodoItem({ todo, onToggle, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function handleSave() {
    if (!title.trim()) {
      return;
    }
    setSaving(true);
    setError("");
    try {
      await onEdit(todo._id, { title, description });
      setIsEditing(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  function startEditing() {
    setTitle(todo.title);
    setDescription(todo.description);
    setError("");
    setIsEditing(true);
  }

  if (isEditing) {
    return (
      <li className="todo-item">
        <div>
          <input
            value={title}
            maxLength={100}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={500}
          />
          {error && <p className="error">{error}</p>}
        </div>
        <button onClick={handleSave} disabled={saving || !title.trim()}>
          {saving ? "Saving..." : "Save"}
        </button>
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
        <p className="todo-title">{todo.title}</p>
        {todo.description && <p>{todo.description}</p>}
      </div>
      <button onClick={startEditing}>Edit</button>
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
