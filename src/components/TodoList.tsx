import { useState, type FormEvent } from "react";

import type { Todo } from "../types/dashboard";
import Icon from "./Icon";

interface TodoListProps {
  initialItems: Todo[];
}

export default function TodoList({ initialItems }: TodoListProps) {
  const [todos, setTodos] = useState<Todo[]>(initialItems);
  const [newTodo, setNewTodo] = useState("");

  const completedCount = todos.filter((todo) => todo.completed).length;

  const completionPercentage =
    todos.length === 0 ? 0 : Math.round((completedCount / todos.length) * 100);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const title = newTodo.trim();

    if (!title) {
      return;
    }

    setTodos((currentTodos) => [
      ...currentTodos,
      {
        id: crypto.randomUUID(),
        title,
        completed: false,
      },
    ]);

    setNewTodo("");
  }

  function toggleTodo(id: string) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo,
      ),
    );
  }

  function deleteTodo(id: string) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  return (
    <article
      id="tasks"
      className="scroll-mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-base font-bold text-slate-950">To-do list</h2>

          <p className="mt-1 text-sm text-slate-500">
            Keep today's priorities in one place.
          </p>
        </div>

        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
          {completedCount}/{todos.length} done
        </span>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium text-slate-500">Daily progress</span>

          <span className="font-semibold text-slate-700">
            {completionPercentage}%
          </span>
        </div>

        <div
          className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100"
          role="progressbar"
          aria-label="Task completion progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={completionPercentage}
        >
          <div
            className="h-full rounded-full bg-indigo-600 transition-[width] duration-300"
            style={{
              width: `${completionPercentage}%`,
            }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 flex gap-2">
        <label htmlFor="new-todo" className="sr-only">
          Add a new task
        </label>

        <input
          id="new-todo"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
          placeholder="Add a new task..."
          autoComplete="off"
          className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
        />

        <button
          type="submit"
          disabled={!newTodo.trim()}
          className="inline-flex size-10.5 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm transition hover:bg-indigo-700 disabled:bg-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          aria-label="Add task"
        >
          <Icon name="plus" className="size-5" />
        </button>
      </form>

      <ul className="mt-5 space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/70 px-3 py-3 transition hover:border-slate-200 hover:bg-white"
          >
            <button
              type="button"
              onClick={() => toggleTodo(todo.id)}
              aria-label={
                todo.completed
                  ? `Mark "${todo.title}" incomplete`
                  : `Mark "${todo.title}" complete`
              }
              aria-pressed={todo.completed}
              className={`grid size-5 shrink-0 place-items-center rounded-md border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                todo.completed
                  ? "border-indigo-600 bg-indigo-600 text-white"
                  : "border-slate-300 bg-white text-transparent hover:border-indigo-400"
              }`}
            >
              <Icon name="check" className="size-3.5" />
            </button>

            <span
              className={`min-w-0 flex-1 text-sm ${
                todo.completed
                  ? "text-slate-400 line-through"
                  : "font-medium text-slate-700"
              }`}
            >
              {todo.title}
            </span>

            <button
              type="button"
              onClick={() => deleteTodo(todo.id)}
              aria-label={`Delete "${todo.title}"`}
              className="grid size-8 shrink-0 place-items-center rounded-lg text-slate-400 opacity-100 transition hover:bg-rose-50 hover:text-rose-600 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 sm:opacity-0 sm:group-hover:opacity-100"
            >
              <Icon name="trash" className="size-4" />
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <div className="mt-5 rounded-xl border border-dashed border-slate-200 px-4 py-8 text-center">
          <span className="mx-auto grid size-10 place-items-center rounded-full bg-emerald-50 text-emerald-600">
            <Icon name="check" className="size-5" />
          </span>

          <p className="mt-3 text-sm font-semibold text-slate-700">
            Everything is done
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Add another task whenever you are ready.
          </p>
        </div>
      )}
    </article>
  );
}
