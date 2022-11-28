import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaUserFriends } from "react-icons/fa";
import { BsClockHistory, BsLockFill } from "react-icons/bs";
import {
  MdManageAccounts,
  MdAccountCircle,
  MdPrivateConnectivity,
} from "react-icons/md";
import { TbTransferOut } from "react-icons/tb";

import { users, wallet } from "../Global/GLobalstate";
import { useRecoilState, useRecoilValue } from "recoil";
import axios from "axios";
const Sides = () => {
  const [logOut, setLogOut] = useRecoilState(users);
  const user = useRecoilValue(users);
  const [viewWallet, setViewWallet] = useRecoilState(wallet);
  const uWallet = useRecoilValue(wallet);

  // const getWallet = async () => {
  //   await axios
  //     .get(`http://localhost:2245/api/wallet/${user?._id}/wallet`)
  //     .then((res) => {
  //       setViewWallet(res);
  //     });
  // };
  // console.log(uWallet?.wallets[0].totalBalance);
  return (
    <div>
      <Container>
        <Side>
          <Wrap>
            <Name>
              <Username to="/mydashboard">{user?.userName}</Username>
              <Fullname>{user?.fullName}</Fullname>
            </Name>

            <Navs>
              <Nav to="/">Home</Nav>
              <Nav to="/mydashboard">Account</Nav>
              <Nav to="/History">History</Nav>
              <Nav to="/Transactions">Tranfer</Nav>
            </Navs>

            <Navss>
              <Nav to="/">
                <FaHome color="white" fontSize="27px" cursor="pointer" />
              </Nav>
              <Nav to="/History">
                <BsClockHistory
                  color="white"
                  fontSize="27px"
                  cursor="pointer"
                />
              </Nav>
              <Username to="/mydashboard">
                <MdManageAccounts
                  color="white"
                  fontSize="27px"
                  cursor="pointer"
                />
              </Username>
              <Buttons to="/LandingPage">
                <TbTransferOut color="white" fontSize="27px" cursor="pointer" />
              </Buttons>
            </Navss>

            <Buttons to="/LandingPage">
              <button
                onClick={() => {
                  setLogOut(null);
                }}
              >
                Log Out
              </button>
            </Buttons>
          </Wrap>
        </Side>
        <Main></Main>
      </Container>
    </div>
  );
};

export default Sides;
const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #352b1e;
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
  // background-color: burlywood;
  flex: 1;
  min-height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
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
