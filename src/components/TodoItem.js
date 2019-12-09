import React from "react";
import styled from "styled-components";
import { ReactComponent as DeleteIcon } from "../assets/trash.svg";
import Complete from "../assets/checked.svg";
import UnComplete from "../assets/circle.svg";

function TodoItem({ todo, index, removeTodo, completeTodo }) {
  return (
    <Wrapper>
      <ItemCategory style={{ backgroundColor: todo.category }} />
      <Item className="todo" value={index}>
        <div
          style={{
            width: "18px",
            height: "18px",
            backgroundImage: todo.completed
              ? `url(${Complete})`
              : `url(${UnComplete})`
          }}
          value={todo.index}
          onClick={() => completeTodo(index)}
        ></div>
        <Task
          style={{
            textDecoration: todo.completed ? "line-through" : "",
            color: todo.completed ? "#D9D9D9" : ""
          }}
        >
          {todo.task}
        </Task>
        <DeleteIcon
          style={{ width: "18px", height: "18px" }}
          value={todo.index}
          onClick={() => removeTodo(index)}
        ></DeleteIcon>
      </Item>
    </Wrapper>
  );
}

const Item = styled.div`
  position: relative;
  width: 298px;
  color: #554e8f;
  height: 60px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 9px #0000000d;
  border-radius: 0 5px 5px 0;
  margin-bottom: 6px;
  margin: 1.7rem auto;
  padding-right: 1rem;
  padding-left: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: center;
`;
const Wrapper = styled.div``;
const Task = styled.div`
  text-align: left;
`;

const ItemCategory = styled.div`
  position: absolute;
  width: 30px;
  margin-left: 17px;
  height: 60px;
  margin-right: 3px;
  border-radius: 5px;
`;

export default TodoItem;
