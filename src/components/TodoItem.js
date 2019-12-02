import React from "react";

function TodoItem({ todo, index }) {
  return (
    <div>
      <div className="todo">{todo.title}</div>
    </div>
  );
}

export default TodoItem;
