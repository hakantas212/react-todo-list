import React, { useState } from "react";
import styled from "styled-components";

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
            <ButtonContainer personal value="#FFD506" onClick={handleCategory}>
              <span class="dot" style={{ backgroundColor: "#ffd506" }}></span>
              Personal
            </ButtonContainer>
          </li>
          <li>
            <ButtonContainer work value="#5DE61A" onClick={handleCategory}>
              <span class="dot" style={{ backgroundColor: "#5DE61A" }}></span>
              Work
            </ButtonContainer>
          </li>
          <li>
            <ButtonContainer meeting value="#D10263" onClick={handleCategory}>
              <span class="dot" style={{ backgroundColor: "#D10263" }}></span>
              Meeting
            </ButtonContainer>
          </li>
          <li>
            <ButtonContainer study value="#3044F2" onClick={handleCategory}>
              <span class="dot" style={{ backgroundColor: "#3044F2" }}></span>
              Study
            </ButtonContainer>
          </li>
          <li>
            <ButtonContainer shopping value="#F29130" onClick={handleCategory}>
              <span class="dot" style={{ backgroundColor: "#F29130" }}></span>
              Shopping
            </ButtonContainer>
          </li>
        </ul>
      </div>
      <div className="single-border"></div>
      <button className="addtask-button" onClick={handleSubmit}>
        Add task
      </button>
    </div>
  );
}

const ButtonContainer = styled.button`
  color: #8e8e8e;
  border: 0;
  padding: 2px;
  font-size: 15px;
  width: 80px;
  &:focus {
    outline: 0;
    color: white;
    border-radius: 2px;
    background-color: ${props => (props.personal ? "#FFD506" : "")};
    background-color: ${props => (props.work ? "#5DE61A" : "")};
    background-color: ${props => (props.meeting ? "#D10263" : "")};
    background-color: ${props => (props.study ? "#3044F2" : "")};
    background-color: ${props => (props.shopping ? "#F29130" : "")};
    box-shadow: ${props => (props.personal ? "0px 3px 6px #FFD506" : "")};
    box-shadow: ${props => (props.work ? "0px 3px 6px #5DE61A" : "")};
    box-shadow: ${props => (props.meeting ? "0px 3px 6px #D10263" : "")};
    box-shadow: ${props => (props.study ? "0px 3px 6px #3044F2" : "")};
    box-shadow: ${props => (props.shopping ? "0px 3px 6px #F29130" : "")};
  }
`;

export default AddTask;
