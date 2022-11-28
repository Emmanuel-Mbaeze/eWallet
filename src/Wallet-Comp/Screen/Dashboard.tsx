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
import Sides from "./Sides";

const Dashboard = () => {
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
        <Sides />
        <Main>
          <Up>
            <Text>
              <Title>
                Welcome to your <br />
                AjWallet dashboard
              </Title>
              <Subtitle>
                Find all the information you need about your plan,usage, and how
                to get the most out of,
                {/* <br /> */}
                or even impact AjWallet features
              </Subtitle>
            </Text>
            <Picture>
              <img src="/wallimg.png" alt="image" />
            </Picture>
          </Up>
          <Details>
            <Account>
              <AccountNo>
                <AccNoIcon></AccNoIcon>
                <Test>
                  <Usernames>Account Number</Usernames>
                  5u <Fullnames>{user?.accountNumber}</Fullnames>
                </Test>
              </AccountNo>
              <AccountName>
                <AccNameIcon></AccNameIcon>
                <Test>
                  <Usernames>Account Name</Usernames>
                  <Fullnames>{user?.fullName}</Fullnames>
                </Test>
              </AccountName>
            </Account>
            <Acct>
              <Token>
                <TokenIcon></TokenIcon>
                <Test>
                  <Usernames>Token</Usernames>
                  <Fullnames>{user?.accessToken}</Fullnames>
                </Test>
              </Token>
            </Acct>
          </Details>
        </Main>
      </Container>
    </div>
  );
};

export default Dashboard;

const AccNoIcon = styled(BsLockFill)`
  color: orange;
  font-size: 40px;
  cursor: pointer;
  @media (max-width: 320px) {
    font-size: 30px;
  }
`;
const AccNameIcon = styled(MdAccountCircle)`
  color: orange;
  font-size: 40px;
  cursor: pointer;
  @media (max-width: 320px) {
    font-size: 35px;
  }
`;
const FollowIcon = styled(FaUser)`
  color: orange;
  font-size: 37px;
  cursor: pointer;
  @media (max-width: 320px) {
    font-size: 30px;
  }
`;
const TokenIcon = styled(MdPrivateConnectivity)`
  color: orange;
  font-size: 50px;
  cursor: pointer;
  @media (max-width: 320px) {
    font-size: 45px;
  }
`;
const FolIcon = styled(FaUserFriends)`
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

const Following = styled.div`
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

const Token = styled.div`
  width: 28%;
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
const AccountName = styled.div`
  width: 44%;
  min-height: 140px;
  box-shadow: rgba(20, 18, 18, 0.2) 0px 2px 8px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  @media (max-width: 768px) {
    margin: 6px;
    width: 98%;
    min-height: 100px;
  }
  /* background-color: #fa9e1c; */
`;
const AccountNo = styled.div`
  width: 44%;
  min-height: 140px;
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
const Account = styled.div`
  width: 100%;
  /* background-color: #2f2211; */
  min-height: 140px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    /* background-color: red; */
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

const Text = styled.div`
  width: 400px;
  height: 80%;
  @media (max-width: 425px) {
    height: 100%;
  }
  /* background-color: pink; */
`;
const Title = styled.div`
  font-size: 45px;
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
  @media (max-width: 425px) {
    /* display: none; */
    font-size: 20px;
  }
`;
const Subtitle = styled.div`
  font-size: 15px;
  font-weight: 500;
  font-family: poppins;
  color: #f5d9b3;
`;
const Picture = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 425px) {
    display: none;
  }
`;
const Up = styled.div`
  width: 94%;
  min-height: 85px;
  display: flex;
  /* flex-direction: column; */
  /* flex-wrap: wrap; */
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(20, 18, 18, 0.2) 0px 2px 8px 0px;
  background-color: #fa9e1c;
  border-radius: 5px;
  padding-left: 13px;
  @media (max-width: 768px) {
    display: none;
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
