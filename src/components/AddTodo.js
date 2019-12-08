import React, { useState } from "react";

function AddTask({ addTodo }) {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState([{ value: "" }]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
  };

  const addCategory = e => {
    setCategory(e.target.value);
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
        <button
          style={{ backgroundColor: "red" }}
          value="blue"
          onChange={addCategory}
          type="button"
        >
          WORK
        </button>
        <button value="green" onChange={addCategory} type="button">
          FREE
        </button>
      </div>
      <button className="addtask-button" onClick={handleSubmit}>
        Add task
      </button>
    </div>
  );
}

export default AddTask;
