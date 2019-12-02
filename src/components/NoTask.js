import React from "react";
import { ReactComponent as NoTaskIcon } from "../assets/clipboard.svg";
import styled from "styled-components";

function NoTask() {
  return (
    <Container>
      <NoTaskIcon id="icon"></NoTaskIcon>
      <h2>No Tasks</h2>
      <span>You have no task to do</span>
    </Container>
  );
}
const Container = styled.div`
  text-align: center;
  h2 {
    color: #554e8f;
    font-weight: 500;
    font-size: 22px;
  }
  span {
    color: #82a0b7;
    font-size: 17px;
  }
  #icon {
    width: 120px;
    height: 165px;
    display: block;
    margin: 7em auto;
  }
`;

export default NoTask;
