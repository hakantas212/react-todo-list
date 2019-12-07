import React, { useState } from "react";

function AddTask({ addTodo }) {
  const [value, setValue] = useState("");
  const [color, setColor] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div>
      <p>Add new task</p>
      <form>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
      <div className="table">
        <ul className="color-list">
          <li>Personal</li>
          <li>Work</li>
          <li>Meeting</li>
          <li>Study</li>
          <li>Shopping</li>
        </ul>
      </div>
      <button className="addtask-button" onClick={handleSubmit}>
        Add task
      </button>
    </div>
  );
}

export default AddTask;
