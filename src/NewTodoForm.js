import { useState } from "react";

export function NewTodoForm({ addTodo }) {
  const [newItemTitle, setNewItemTitle] = useState("");
  const [newItemText, setNewItemText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItemTitle === "") return;
    setNewItemTitle("");
    setNewItemText("");
    addTodo(newItemTitle, newItemText);
  }

  return (
    <form onSubmit={handleSubmit} className="box has-background-grey-white-ter">
      <div className="field">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Att göra..."
            value={newItemTitle}
            onChange={(e) => setNewItemTitle(e.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <textarea
            className="textarea has-fixed-size"
            rows="3"
            placeholder="Beskrivning..."
            value={newItemText}
            onChange={(e) => setNewItemText(e.target.value)}
          ></textarea>
        </div>
      </div>

      <div className="control">
        <button
          className="button is-link"
          disabled={newItemTitle === "" ? true : false}
        >
          Lägg till
        </button>
      </div>
    </form>
  );
}
