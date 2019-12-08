import React, { useState } from "react";

function AddTask({ addTodo }) {
  const [value, setValue] = useState({
    v: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  const handleCategory = e => {
    e.preventDefault();
    setValue({ ...value, category: e.target.value });
  };

  return (
    <div>
      <p>Add new task</p>
      <form>
        <input
          type="text"
          className="input"
          value={value.v}
          onChange={e => setValue({ ...value, v: e.target.value })}
        />
      </form>
      <div className="table">
        <ul className="color-list">
          <li>
            <button value="#FFD506" onClick={handleCategory}>
              Personal
            </button>
          </li>
          <li>
            <button value="#5DE61A" onClick={handleCategory}>
              Work
            </button>
          </li>
          <li>
            <button value="#D10263" onClick={handleCategory}>
              Meeting
            </button>
          </li>
          <li>
            <button value="#3044F2" onClick={handleCategory}>
              Study
            </button>
          </li>
          <li>
            <button value="#F29130" onClick={handleCategory}>
              Shopping
            </button>
          </li>
        </ul>
      </div>
      <button className="addtask-button" onClick={handleSubmit}>
        Add task
      </button>
    </div>
  );
}

export default AddTask;
