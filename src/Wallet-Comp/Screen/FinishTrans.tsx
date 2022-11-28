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
import { account, users } from "../Global/GLobalstate";
const url = "http://localhost:2245";

const FinishTrans = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    token: yup.number().required("Please enter your token"),
    amount: yup.number().required("Please enter your amount"),
    // paymentDescription: yup.string()
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const user = useRecoilValue(users);

  const [acc, setAcc] = useRecoilState(account);
  const viewAcc = useRecoilValue(account);

  console.log("View Acc: ", viewAcc);

  const getAccount = handleSubmit(async (data) => {
    console.log(data);
    const { token, amount, accountNumber } = data;

    await axios
      .patch(`${url}/api/wallet/${user?._id}/${viewAcc![0]?._id}/send`, {
        token: token,
        amount: amount,
      })
      .then(async () => {
        await axios
          .post(`${url}/api/history/${user?._id}/${viewAcc![0]?._id}/create`)
          .then((res) => {
            Swal.fire("Good job!", "Transfer Successful!", "success");
            setAcc(res.data.data);
            console.log(res.data.data);
            navigate("/");
          });
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
            <Input>
              <input placeholder="input amount" {...register("amount")} />
              <Error>{errors?.amount && <p>Please input amount</p>}</Error>
              <input placeholder="input token" {...register("token")} />
              <Error>{errors?.token && <p>Please input token</p>}</Error>
            </Input>
          </Up>
          <Button>
            <button type="submit">Pay</button>
          </Button>
        </Main>
      </Container>
    </div>
  );
};

export default FinishTrans;
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
  width: 500px;
  min-height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 18px;
    font-weight: bold;
  }
  @media (max-width: 425px) {
    width: 100%;
    /* background-color: #352b1e; */
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
const Side = styled.div`
  width: 160px;
  height: 100%;
  background-color: #ff9505;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 425px) {
    width: 40px;
    /* background-color: red; */
  }
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
`;
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

const Input = styled.div`
  width: 500px;
  min-height: 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  /* background-color: #656363; */
  @media (max-width: 425px) {
    // display: flex;
    width: 95%;

    // justify-content: flex-start;
  }
  input {
    border-radius: 5px;
    border: 1px solid #ff9505;
    outline: none;
    height: 28px;
    background-color: transparent;

    width: 220px;
    color: black;
    font-size: 12px;
    font-weight: 300;
    font-family: poppins;
    @media (max-width: 425px) {
      margin: 7px 0;
      width: 100%;
    }
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
const Button = styled.div`
  /* width: 500px; */
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
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
const Wrap = styled.div`
  width: 80%;
  height: 60%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  margin-top: 30px;

  @media (max-width: 425px) {
    width: 95%;
    /* background-color: yellow; */
    padding: 0 6px;
  }
`;
const Buttons = styled(Link)`
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

    @media (max-width: 425px) {
      display: none;
    }
  }
`;
const Username = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 29px;
  font-weight: 500;
  font-family: poppins;
  @media (max-width: 425px) {
    font-size: 22px;
  }
`;
const Navs = styled.div`
  width: 100%;
  height: 90px;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 425px) {
    display: none;
  }
`;
const Navss = styled.div`
  width: 100%;
  height: 150px;
  /* background-color: red; */
  display: none;

  @media (max-width: 425px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
  }
`;
const Nav = styled(Link)`
  font-size: 17px;
  font-weight: 300;
  font-family: poppins;
  cursor: pointer;
  text-decoration: none;
  color: white;
`;
const Name = styled.div`
  width: 100%;
  height: 50px;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 425px) {
    display: none;
  }
`;
const Fullname = styled.div`
  font-size: 16px;
  font-weight: 300;
  font-family: poppins;
  @media (max-width: 425px) {
    display: none;
  }
`;
// const Container = styled.div``
