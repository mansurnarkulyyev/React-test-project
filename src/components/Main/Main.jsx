import React from "react";
import Header from "components/Main/Header/Header";
import Navbar from "./Navbar/Navbar";
import MyPast from "./MyPast/MyPast";
import FuturePlans from "./FuturePlans/FuturePlans";
import Dialogs from "./MyMessages/MyMessages";
import NotFoundPage from "./NotFoundPage";
// import Sidebar from "components/Sidebar";

import { Routes, Route } from "react-router-dom";

import st from "components/Main/Main.module.css";

const Main = (props) => {
  return (
    <main className={st.main}>
      {/* <Sidebar /> */}
      <Header />
      <Routes>
        <Route path="/navbar" exact element={<Navbar />} />
        <Route path="/myPast" element={<MyPast />} />
        <Route
          path="/future"
          element={
            <FuturePlans
              posts={props.posts}
              futurePage={props.futurePage}
              dispatch={props.dispatch}
            />
          }
        />
        <Route
          path="/messages"
          element={
            <Dialogs
              dialogsData={props.dialogsData}
              messagesData={props.messagesData}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main >
  );
};

export default Main;
