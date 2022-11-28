import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Landingpage = () => {
  return (
    <div>
      <Container>
        <Wrap>
          <Left>
            <Title>
              Maximise Your Money <br />
              with Vaults.
            </Title>

            <Sub>
              {" "}
              Put Money Aside Effortlessly for the things you want with vaults
            </Sub>
            <Button to="/Signup">
              <button>Get Started</button>
            </Button>
          </Left>
          <Right>
            <img src="/wallimg.png" alt="Image" />
          </Right>
        </Wrap>
      </Container>
    </div>
  );
};

export default Landingpage;

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  background-color: #ff9505;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const Wrap = styled.div`
  width: 95%;
  height: 91vh;
  /* background-color: aqua; */
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  /* @media (max-width: 425px) {
    display: flex;
  justify-content: space-between;
  align-items: flex-end;
  } */
`;
const Left = styled.div`
  width: 48%;
  height: 60%;
  @media (max-width: 425px) {
    width: 100%;
  }
`;
const Right = styled.div`
  width: 48%;
  height: 70%;
  /* background-color: #715454; */
  @media (max-width: 425px) {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Button = styled(Link)`
  button {
    padding: 10px 15px;
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
const Title = styled.div`
  font-size: 55px;
  font-weight: bold;
  font-family: poppins;
  color: white;
  margin-bottom: 10px;
  /* width: 220px;
  height: 25px;
  background-color: pink;
 */
  @media (max-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 1224px) {
    font-size: 42px;
  }
  @media (max-width: 320px) {
    /* display: none; */
    font-size: 30px;
    // background-color: firebrick;
  }
  @media (min-width: 375px) and (max-width: 425px) {
    // display: none;
    font-size: 36px;
  }
`;
const Sub = styled.div`
  font-size: 15px;
  font-weight: 500;
  font-family: poppins;
  color: #f5d9b3;
  margin-bottom: 10px;
`;
