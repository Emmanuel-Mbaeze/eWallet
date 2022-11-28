import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Container>
        <Wrap>
          <Logo>
            <span>W</span>AjWallet
          </Logo>
          <Button to="/Transactions">
            <button>Pay</button>
            {/* <button>Sign In</button> */}
          </Button>
        </Wrap>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #ff9505;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrap = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled(Link)`
  /* width: 180px; */
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  button {
    padding: 8px 26px;
    background-color: black;
    color: white;
    font-size: 17px;
    font-weight: 500;
    font-family: poppins;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 5px;
  }
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: 500;
  /* font-family: poppins; */
  color: white;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 115px;
  span {
    width: 35px;
    font-size: 23px;
    font-weight: bold;

    height: 35px;
    border-radius: 100%;
    border: 2px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: red; */
  }
`;
