import React from "react";
import styled from "styled-components";

const Forgot = () => {
  return (
    <div>
      <Container>
        {/* <Wrap> */}
        <Form>
          {/* <Input></Input> */}
          {/* <Button> */}
          <Wrap>
            <input placeholder="email" />

            <button>Submit</button>
          </Wrap>
          {/* </Button> */}
        </Form>
        {/* </Wrap> */}
      </Container>
    </div>
  );
};

export default Forgot;
const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff9505;
`;
const Form = styled.div`
  width: 350px;
  height: 150px;
  background-color: white;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
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

  input {
    border: 1px solid #ff9505;
    outline: none;
    height: 35px;
    width: 90%;
    color: black;
    font-size: 12px;
    font-weight: 300;
    font-family: poppins;
    border-radius: 6px;
  }
`;
const Button = styled.div`
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
const Input = styled.div``;
const Wrap = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
// const Container = styled.div``
