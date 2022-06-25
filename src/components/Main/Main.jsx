import React from "react";
import Header from "components/Main/Header/Header";
import Navbar from "./Navbar/Navbar";
import MyPast from "./MyPast/MyPast";
import FuturePlans from "./FuturePlans/FuturePlans";
import MyMessages from "./MyMessages/MyMessages";

import { Routes, Route } from "react-router-dom";

import st from "components/Main/Main.module.css";

const Main = (props) => {
  return (
    <main className={st.main}>
      <Header />
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/myPast" element={<MyPast />} />
        <Route path="/future" element={<FuturePlans />} />
        <Route path="/messages" element={<MyMessages />} />
      
       
      </Routes>

    </main>
  );
};

export default Main;
