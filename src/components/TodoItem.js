import React from "react";

function TodoItem({ todo, index, removeTodo, completeTodo }) {
  return (
    <div>
      <div className="todo">
        <div style={{ textDecoration: todo.completed ? "line-through" : "" }}>
          <button value={todo.index} onClick={() => completeTodo(index)}>
            COMPLETE
          </button>
          {todo.task}
        </div>
        <button value={todo.index} onClick={removeTodo}>
          DELETE
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
