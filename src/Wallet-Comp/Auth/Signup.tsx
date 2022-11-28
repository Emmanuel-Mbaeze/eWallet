import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";

const url: string = "http://localhost:2245";
const Signup = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    fullName: yup.string().required("Fullname is required"),
    userName: yup.string().required("userName is required"),
    email: yup.string().required("email is required"),
    password: yup.string().required("password is required"),
    confirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "password doesn't match"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const Registerme = handleSubmit(async (data) => {
    console.log(data);
    const { fullName, userName, email, password } = data;

    await axios
      .post("http://localhost:2245/api/user/create", {
        fullName: fullName,
        userName: userName,
        email: email,
        password: password,
      })
      .then(async (res) => {
        await axios
          .post(`http://localhost:2245/api/wallet/${res.data.data._id}/create`)
          .then(() => {
            Swal.fire("Good job!", "Registration Successful!", "success");
            navigate("/LandingPage");
          });
      })

      .catch((err) => console.log(err));
  });

  return (
    <div>
      <Container>
        {/* <Wrap> */}
        <Form onSubmit={Registerme}>
          <Wrap>
            <Input>
              <input placeholder="Fullname" {...register("fullName")} />
              <Error>{errors?.fullName && <p>REQUIRED</p>}</Error>
              <input placeholder="userName" {...register("userName")} />
              <Error>{errors?.userName && <p>REQUIRED</p>}</Error>

              <input placeholder="email" {...register("email")} />
              <Error>{errors?.email && <p>REQUIRED</p>}</Error>

              <input placeholder="password" {...register("password")} />
              <Error>{errors?.password && <p>REQUIRED</p>}</Error>

              <input placeholder="Confirm password" {...register("confirm")} />
              <Error>{errors?.confirm && <p>password mismatch</p>}</Error>
            </Input>

            <Button>
              <button type="submit">Sign Up</button>
            </Button>

            <Text>
              Already have an account?
              <Link to="/Signin">
                <span>Signin</span>
              </Link>
            </Text>
          </Wrap>
        </Form>
        {/* </Wrap> */}
      </Container>
    </div>
  );
};

export default Signup;
const Error = styled.div`
  p {
    font-size: 10px;
    color: red;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;
  }
`;
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
  height: 450px;
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
  height: 280px;
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
  height: 390px;
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
  text-decoration: none;

  align-items: flex-end;
  span {
    color: #ff9505;
    font-weight: 500;
  }
`;
