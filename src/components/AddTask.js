import React, { useState } from "react";
import { ReactComponent as AddTaskIcon } from "../assets/Button.svg";

function AddTask({ addTodo }) {
  const [value, setValue] = useState("");

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
      <AddTaskIcon onClick={handleSubmit}></AddTaskIcon>
    </div>
  );
}

export default AddTask;
