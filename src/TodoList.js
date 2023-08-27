import { useState, useEffect } from "react";
import { TodoItem } from "./TodoItem";

export function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
  deleteCompletedTodos,
}) {
  const [undone, setUndone] = useState([]);
  const [done, setDone] = useState([]);

  useEffect(() => {
    setUndone(todos.filter((todo) => !todo.completed));
    setDone(todos.filter((todo) => todo.completed));
  }, [todos]);

  return (
    <>
      <h2 className="is-size-4">Att göra:</h2>
      <ul className="block">
        {todos.length === 0 && "All done!"}
        {undone.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>

      {done.length !== 0 && (
        <>
          <h2 className="is-size-4">Färdiga:</h2>
          <button
            className="button is-small is-danger is-light"
            onClick={deleteCompletedTodos}
          >
            Rensa färdiga
          </button>
        </>
      )}

      <ul className="block done-list">
        {done.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </>
  );
}
