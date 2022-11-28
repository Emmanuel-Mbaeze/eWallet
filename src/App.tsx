import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forgot from "./Wallet-Comp/Auth/Forgot";
import Signin from "./Wallet-Comp/Auth/Signin";
import Signup from "./Wallet-Comp/Auth/Signup";
import Dashboard from "./Wallet-Comp/Screen/Dashboard";
import FinishTrans from "./Wallet-Comp/Screen/FinishTrans";
import Header from "./Wallet-Comp/Screen/Header";
import History from "./Wallet-Comp/Screen/History";
import Home from "./Wallet-Comp/Screen/Home";
import Landingpage from "./Wallet-Comp/Screen/Landingpage";
import Trans from "./Wallet-Comp/Screen/Trans";

const app: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Landingpage" element={<Landingpage />} />
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Forgotpassword" element={<Forgot />} />
          <Route path="/Mydashboard" element={<Dashboard />} />
          <Route path="/Transactions" element={<Trans />} />
          <Route path="/History" element={<History />} />
          <Route path="/Finish Payment" element={<FinishTrans />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default app;
