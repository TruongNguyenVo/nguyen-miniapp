// components/TodoList.tsx
"use client";
import { useEffect, useState } from "react";

type Todo = { id: number; title: string; completed: boolean; createdAt: string };

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    try {
      const res = await fetch("/api/todos");
      const data = await res.json();
      setTodos(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();

    // lắng nghe sự kiện khi 1 todo mới được thêm
    function onAdded() {
      load();
    }
    window.addEventListener("todo-added", onAdded as EventListener);
    return () => window.removeEventListener("todo-added", onAdded as EventListener);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (todos.length === 0) return <p>No todos yet</p>;

  return (
    <ul>
      {todos.map((t) => (
        <li key={t.id} style={{ marginBottom: 8 }}>
          <strong>{t.title}</strong> — <em>{t.completed ? "Done" : "Open"}</em>
          <div style={{ fontSize: 12, color: "#666" }}>{new Date(t.createdAt).toLocaleString()}</div>
        </li>
      ))}
    </ul>
  );
}
