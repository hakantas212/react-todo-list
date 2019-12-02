import React from "react";
import styled from "styled-components";
import Background from "../assets/background.svg";

function Header() {
  return (
    <Container>
      <AppHeader>
        <Greeting>
          <h4>Hello Brenda!</h4>
          <span>Today you have 9 tasks</span>
        </Greeting>
        <img alt="profile-pic" src={"./Photo.png"} />
      </AppHeader>
    </Container>
  );
}

const Container = styled.div`
  background-image: url(${Background});
  width: 375px;
  height: 106px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const AppHeader = styled.div`
  padding-top: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  color: white;
  img {
    max-width: 100%;
    margin-right: -10px;
    margin-top: 20px;
  }
`;

const Greeting = styled.div`
  line-height: 0;
  margin-left: 18px;
`;

export default Header;
