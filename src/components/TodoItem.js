import React from "react";

function TodoItem({ todo, index }) {
  return (
    <div>
      <div className="todo" id={index}>
        {todo.task}
      </div>
    </div>
  );
}

export default TodoItem;
