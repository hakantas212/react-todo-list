import React, { useState } from "react";
import TodoItem from "./components/TodoItem";
import NoTask from "./components/NoTask";
import Header from "./components/Header";
import { ReactComponent as AddTaskIcon } from "./assets/Button.svg";
import "./App.css";
import styled from "styled-components";
import ToggleModal from "./components/ToggleModal";
import Modal from "./components/Modal";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "",
      isCompleted: false
    }
  ]);
  const { isShowing, toggle } = ToggleModal();

  return (
    <div className="App">
      <Container>
        <Header></Header>
        <NoTask></NoTask>
        <Modal isShowing={isShowing} hide={toggle} />
        <AddTaskIcon onClick={toggle} id="addtask"></AddTaskIcon>

        {todos.map((todo, index) => (
          <TodoItem key={index} index={index} todo={todo}></TodoItem>
        ))}
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
  }
`;

export default App;
