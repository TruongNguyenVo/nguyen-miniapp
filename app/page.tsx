// app/page.tsx
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Todo App — Next.js + SQLite (Prisma)</h1>
      <TodoForm />
      <TodoList />
    </main>
  );
}
