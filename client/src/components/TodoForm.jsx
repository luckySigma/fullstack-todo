import { useState } from "react";

function TodoForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    try {
      await onAdd({ title, description });
      setTitle("");
      setDescription("");
      setError("");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setError("");
        }}
      />
      <textarea
        placeholder="Description(optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
