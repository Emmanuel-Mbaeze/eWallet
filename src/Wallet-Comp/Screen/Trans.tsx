import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Sides from "./Sides";

import axios from "axios";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import { useRecoilState, useRecoilValue } from "recoil";
import { account } from "../Global/GLobalstate";
const url = "http://localhost:2245";

const Trans = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    accountNumber: yup.number().required("Please enter your Account"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [acc, setAcc] = useRecoilState(account);
  const viewAcc = useRecoilValue(account);

  console.log("View Acc: ", viewAcc);

  const getAccount = handleSubmit(async (data) => {
    console.log(data);
    const { accountNumber } = data;

    await axios
      .get(`${url}/api/user/search?accountNumber=${accountNumber}`)
      .then((res) => {
        Swal.fire("Good job!", "Registration Successful!", "success");
        setAcc(res.data.data);
        console.log(res.data.data);

        // navigate("/");
      })
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <Container>
        <Sides />
        <Main onSubmit={getAccount}>
          <Up>
            {" "}
            <p>Make a quick Transaction with friends, family or loved ones</p>
            <Search>
              <Text>Account Number</Text>
              <Icon>
                <input
                  placeholder="Enter Account Number"
                  {...register("accountNumber")}
                />
                <Error>
                  {errors?.accountNumber && <p>Please provide your Password</p>}
                </Error>
                <button>
                  <FaSearch color="#ff9505" fontSize="23px" cursor="pointer" />
                </button>
              </Icon>
            </Search>
          </Up>

          {viewAcc?.length !== 0 ? (
            <div>
              <Display>
                <Card>
                  <Texts>{viewAcc![0]?.fullName}</Texts>
                  <Texts>{viewAcc![0]?.accountNumber}</Texts>
                </Card>
              </Display>
              <Button to="/Finish Payment">
                <button type="submit">Proceed Payment</button>
              </Button>
            </div>
          ) : null}
        </Main>
      </Container>
    </div>
  );
};

export default Trans;
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
const Up = styled.div`
  width: 510px;
  min-height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* background-color: #352b1e; */

  p {
    font-size: 18px;
    font-weight: bold;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;
const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: #352b1e; */
`;

//box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
//FaHome
//BsClockHistory
//MdManageAccounts  MdAccountCircle
//box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
//box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
//TbTransferOut
//AiOutlineTransaction
//GrTransaction
//FaAmazonPay
const Main = styled.form`
  // background-color: burlywood;
  flex: 1;
  height: 70%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  /* background-color: gray; */

  @media (max-width: 425px) {
    /* width: calc(100% -100px); */
    width: 345px;
    /* display: none; */
  }
  @media (max-width: 375px) {
    /* width: calc(100% -100px); */
    width: 300px;
  }
  @media (max-width: 320px) {
    /* width: calc(100% -100px); */
    width: 270px;
  }
`;

const Text = styled.div`
  font-size: 25px;
  font-weight: bold;
  font-family: poppins;
  width: 220px;
  height: 25px;
  /* background-color: pink; */

  color: #ff9505;
  @media (max-width: 425px) {
    font-size: 20px;
    margin-bottom: 7px;
    /* display: none; */
  }
`;
const Texts = styled.div`
  font-size: 25px;
  font-weight: bold;
  font-family: poppins;
  /* width: 220px; */
  height: 25px;
  text-transform: capitalize;
  /* background-color: pink; */
  // color: #ff9505;
  @media (max-width: 425px) {
    font-size: 20px;
    margin-bottom: 7px;
    /* display: none; */
  }
`;
const Search = styled.div`
  width: 500px;
  min-height: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* background-color: #ff9505; */

  align-items: center;

  @media (max-width: 425px) {
    width: 96%;
    /* padding: 0 5px; */
  }
`;
const Icon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 220px;
  height: 28px;
  border: 1px solid #ff9505;
  border-radius: 5px;
  @media (max-width: 425px) {
    width: 100%;
  }
  input {
    border: none;
    outline: none;
    height: 100%;
    background-color: transparent;
    flex: 1;
    color: black;
    font-size: 12px;
    font-weight: 300;
    font-family: poppins;
    margin-right: 7px;
    /* @media (max-width: 425px) {
      width: 290px;
    } */
  }
  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 7px;
    background-color: transparent;
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
const Display = styled.div`
  width: 500px;
  height: 350px;
  /* background-color: blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 425px) {
    width: 100%;
  }
`;
const Card = styled.div`
  width: 400px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  @media (max-width: 320px) {
    width: 255px;
    height: 320px;
    /* background-color: gray; */
  }
  @media (min-width: 375px) and (max-width: 425px) {
    width: 323px;
    height: 330px;
  }
`;
const Button = styled(Link)`
  /* width: 500px; */
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  /* background-color: burlywood; */

  button {
    padding: 10px 55px;
    background-color: #ff9505;
    color: white;
    font-size: 17px;
    font-weight: 500;
    font-family: poppins;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 5px;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;
