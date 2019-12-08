import React, { useState } from "react";
import NoTask from "./components/NoTask";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import { ReactComponent as AddTaskIcon } from "./assets/Button.svg";
import "./App.css";
import styled from "styled-components";
import { ReactComponent as ButtonClose } from "./assets/ButtonClose.svg";
import AddTask from "./components/AddTodo";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [todos, setTodos] = useState("");

  const addTodo = task => {
    const newTodos = [
      ...todos,
      { task: task.v, completed: false, category: task.category }
    ];
    if (!task.v) return;
    setTodos(newTodos);
    setOpenModal(false);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <Container>
        <Header todos={todos}></Header>
        {(() => {
          if (todos.length > 0) {
            return todos.map((todo, index) => (
              <TodoItem
                key={index}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              ></TodoItem>
            ));
          } else {
            return <NoTask />;
          }
        })()}

        {openModal && (
          <div className="modal-wrapper">
            <div className="modal">
              <ButtonClose
                type="button"
                onClick={() => setOpenModal(false)}
                id="close-button"
              ></ButtonClose>
              <AddTask addTodo={addTodo}></AddTask>
            </div>
          </div>
        )}
        <AddTaskIcon
          onClick={() => setOpenModal(true)}
          id="addtask"
        ></AddTaskIcon>
      </Container>
    </div>
  );
}

const Container = styled.div`
  #addtask {
    width: 80px;
    height: 80px;
    display: block;
    float: right;
    box-shadow: 0px 7px 9px #f456c378;
  }
`;

export default App;
