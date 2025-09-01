// components/TodoForm.tsx
"use client";
import { useState } from "react";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    setBusy(true);
    try {
      const res = await fetch("/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: title.trim() }),
      });
      if (!res.ok) {
        const err = await res.json();
        alert(err?.error || "Error");
      } else {
        setTitle("");
        // phát sự kiện để TodoList biết reload
        window.dispatchEvent(new CustomEvent("todo-added"));
      }
    } catch (err) {
        console.log(err);
      // console.error(err);
      alert("Network error");
    } finally {
      setBusy(false);
    }
  };

  return (
    <form onSubmit={submit} style={{ marginBottom: 16 }}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New todo..."
        style={{ padding: 8, width: 300, marginRight: 8 }}
      />
      <button type="submit" disabled={busy}>
        {busy ? "Adding..." : "Add"}
      </button>
    </form>
  );
}
