import { useState } from "react";

export function TodoItem({
  completed,
  id,
  title,
  text,
  toggleTodo,
  deleteTodo,
}) {
  const [showMore, setShowMore] = useState(false);

  return (
    <li
      className="box listitem"
      onClick={() => setShowMore((prevState) => !prevState)}
    >
      <div className="list">
        <input
          type="checkbox"
          onChange={(e) => toggleTodo(id, e.target.checked)}
          checked={completed}
        />
        <h3>{title}</h3>
        <button
          className="button is-small is-danger is-light"
          onClick={() => deleteTodo(id)}
        >
          X
        </button>
      </div>
      {showMore && !completed && <p>{text}</p>}
    </li>
  );
}
