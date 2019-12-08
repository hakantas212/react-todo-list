import React from "react";

function TodoItem({ todo, index, removeTodo, completeTodo }) {
  return (
    <div>
      <div
        className="todo"
        value={index}
        style={{ backgroundColor: todo.category }}
      >
        <div style={{ textDecoration: todo.completed ? "line-through" : "" }}>
          <button value={todo.index} onClick={() => completeTodo(index)}>
            COMPLETE
          </button>

          {todo.task}
        </div>
        <button value={todo.index} onClick={() => removeTodo(index)}>
          DELETE
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
