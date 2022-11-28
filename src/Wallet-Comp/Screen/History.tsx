import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { MdManageAccounts, MdAccountBalanceWallet } from "react-icons/md";
import { TbTransferOut } from "react-icons/tb";
import { useRecoilState, useRecoilValue } from "recoil";
import { wallet, users } from "../Global/GLobalstate";
import axios from "axios";
import Sides from "./Sides";

const url: string = "http://localhost:2245";
const History = () => {
  const user = useRecoilValue(users);
  const myWallet = useRecoilValue(wallet);
  const [viewWallet, setViewWallet] = useRecoilState(wallet);

  const getWallet = async () => {
    await axios.get(`${url}/api/wallet/${user?._id}/wallet`).then((res) => {
      setViewWallet(res.data.data);
    });
  };
  // console.log(myWallet?.wallet.totalBalance);
  return (
    <div>
      <Container>
        <Sides />
        <Main>
          <Up>
            <AccountNo>
              <AccNoIcon></AccNoIcon>
              <Test>
                <Usernames>Available Balance</Usernames>
                <Fullnames>
                  {/* {myWallet && myWallet?.wallets.totalBalance} */}
                  {user.totalBalance}
                  <span> ₦</span>
                </Fullnames>
              </Test>
            </AccountNo>
          </Up>
          <Card>
            <Hold>
              <h4>
                Rental Ride <span style={{ color: "gray" }}>paid</span>{" "}
                <span> Emmanuel Mbaeze</span>
              </h4>
              <p>
                payment was successful ....{" "}
                <span style={{ color: "gray" }}>12, may 2022</span>
              </p>
            </Hold>
            <Amo>#64,000</Amo>
          </Card>
          <Card>
            <Hold>
              <h4>
                Emmanuel Mbaeze <span style={{ color: "gray" }}>paid</span>{" "}
                <span>Rental Ride</span>
              </h4>
              <p>
                payment was successful ....{" "}
                <span style={{ color: "gray" }}>12, may 2022</span>
              </p>
            </Hold>
            <Amo>#12,000</Amo>
          </Card>
          <Card>
            <Hold>
              <h4>
                Rental Ride <span style={{ color: "gray" }}>paid</span>{" "}
                <span> Emmanuel Mbaeze</span>
              </h4>
              <p>
                payment was successful ....{" "}
                <span style={{ color: "gray" }}>12, may 2022</span>
              </p>
            </Hold>
            <Amo>#41,000</Amo>
          </Card>
          <Card>
            <Hold>
              <h4>
                Emmanuel Mbaeze <span style={{ color: "gray" }}>paid</span>{" "}
                <span>Rental Ride</span>
              </h4>
              <p>
                payment was successful ....{" "}
                <span style={{ color: "gray" }}>12, may 2022</span>
              </p>
            </Hold>
            <Amo>#54,000</Amo>
          </Card>
          <Card>
            <Hold>
              <h4>
                Emmanuel Mbaeze<span style={{ color: "gray" }}>paid</span>{" "}
                <span>Mbaeze Somtochukwu</span>
              </h4>
              <p>
                payment was successful ....{" "}
                <span style={{ color: "gray" }}>12, may 2022</span>
              </p>
            </Hold>
            <Amo>#14,000</Amo>
          </Card>
        </Main>
      </Container>
    </div>
  );
};

export default History;
const Amo = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #51d803;
`;

const Card = styled.div`
  width: 94%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
  padding-left: 20px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;

  h4 {
    margin-bottom: 0;
  }

  p {
    font-size: 12px;
  }
`;
const Hold = styled.div``;
const AccNoIcon = styled(MdAccountBalanceWallet)`
  color: orange;
  font-size: 40px;
  cursor: pointer;
  @media (max-width: 320px) {
    font-size: 30px;
  }
`;

const Followers = styled.div`
  width: 30%;
  min-height: 140px;
  box-shadow: rgba(20, 18, 18, 0.2) 0px 2px 8px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  @media (max-width: 768px) {
    margin: 5px;
    width: 94%;
    min-height: 100px;
  }
  @media (max-width: 425px) {
    width: 91%;
  }
  @media (max-width: 320px) {
    width: 89%;
  }
`;

const Test = styled.div`
  /* background-color: #8b9baa; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  height: 30px;
`;
const Usernames = styled.div`
  width: 100%;
  height: 50px;
  color: #fa9e1c;
  font-size: 28px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 425px) {
    font-size: 24px;
  }
  @media (max-width: 320px) {
    font-size: 20px;
  }
`;
const Fullnames = styled.div`
  font-size: 22px;
  font-weight: 500;
  font-family: poppins;
  color: #fa9e1c;
  /* background-color: red; */
  @media (max-width: 320px) {
    font-size: 20px;
  }
`;

const AccountNo = styled.div`
  width: 50%;
  min-height: 80px;
  box-shadow: rgba(7, 6, 6, 0.2) 0px 2px 8px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  @media (max-width: 768px) {
    margin: 6px;
    width: 98%;
    min-height: 100px;
  }
`;
const Acct = styled.div`
  width: 100%;
  min-height: 140px;
  display: flex;
  /* background-color: #fa9e1c; */
  /* flex-wrap: wrap; */
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Details = styled.div`
  width: 95%;
  min-height: 305px;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  align-items: center;
  /* background-color: #fa9e1c; */
  border-radius: 5px;
`;

const Up = styled.div`
  width: 94%;
  min-height: 75px;
  display: flex;
  /* flex-direction: column; */
  /* flex-wrap: wrap; */
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding-left: 13px;
  @media (max-width: 768px) {
  }
`;
const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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
const Main = styled.div`
  /* background-color: burlywood; */
  flex: 1;
  min-height: 98%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding-top: 12px;
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
