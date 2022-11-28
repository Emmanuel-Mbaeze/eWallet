import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";

import { users } from "../Global/GLobalstate";
import { useRecoilState } from "recoil";

const Signin = () => {
  const navigate = useNavigate();
  const url: string = "http://localhost:2245";

  const [userData, setUserData] = useRecoilState(users);
  console.log("userData:", userData);
  const schema = yup.object().shape({
    email: yup.string().required("required"),
    password: yup.string().required("required"),
  });

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  const signInUser = handleSubmit(async (data) => {
    console.log(data);
    const { password, email } = data;

    await axios
      .post(`${url}/api/user/signin`, {
        password: password,
        email: email,
      })
      .then((res) => {
        Swal.fire("Good job!", "Registration Successful!", "success");
        setUserData(res.data.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <Container>
        {/* <Wrap> */}
        <Form onSubmit={signInUser}>
          <Wrap>
            <Input>
              <input placeholder="email" {...register("email")} />
              <input placeholder="Password" {...register("password")} />
            </Input>

            <Button>
              <button type="submit">Signin</button>
            </Button>

            <Text>
              Don't have an account?{" "}
              <Link to="/Signup">
                <span>Signup</span>
              </Link>
            </Text>
          </Wrap>
        </Form>
        {/* </Wrap> */}
      </Container>
    </div>
  );
};

export default Signin;
const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff9505;
`;
const Form = styled.form`
  width: 350px;
  height: 290px;
  background-color: white;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.div`
  width: 100%;
  height: 70px;
  /* background-color: red; */
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
`;
const Input = styled.div`
  width: 100%;
  height: 100px;
  /* background-color: rebeccapurple; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  input {
    border: 1px solid #ff9505;
    outline: none;
    height: 40px;
    width: 90%;
    color: black;
    font-size: 12px;
    font-weight: 300;
    font-family: poppins;
    border-radius: 6px;
  }
`;
const Wrap = styled.div`
  width: 100%;
  height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Text = styled.div`
  width: 100%;
  height: 30px;
  /* background-color: gainsboro; */
  display: flex;
  justify-content: center;
  align-items: flex-end;
  span {
    color: #ff9505;
    font-weight: 500;
    text-decoration: none;
  }
`;
// const Container = styled.div``
