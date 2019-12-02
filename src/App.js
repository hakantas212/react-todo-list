import React, { useState } from "react";
import TodoItem from "./components/TodoItem";
import NoTask from "./components/NoTask";
import Header from "./components/Header";
import { ReactComponent as AddTaskIcon } from "./assets/Button.svg";
import "./App.css";
import styled from "styled-components";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "",
      isCompleted: false
    }
  ]);

  return (
    <div className="App">
      <Container>
        <Header></Header>
        <NoTask></NoTask>
        <AddTaskIcon id="addtask"></AddTaskIcon>
        {todos.map((todo, index) => (
          <TodoItem key={index} index={index} todo={todo}></TodoItem>
        ))}
      </Container>
    </div>
  );
}

const Container = styled.div`
  #addtask {
    width: 100px;
    height: 100px;
    display: block;
    float: right;
  }
`;

export default App;
