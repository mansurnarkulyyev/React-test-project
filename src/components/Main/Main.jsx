import React from "react";
import Header from "components/Main/Header/Header";
import Navbar from "./Navbar/Navbar";
import MyPast from "./MyPast/MyPast";
import FuturePlans from "./FuturePlans/FuturePlans";
// import Dialogs from "./MyMessages/Dialogs";
import NotFoundPage from "./NotFoundPage";
// import Sidebar from "components/Sidebar";
import DialogsContainer from "./MyMessages/DialogsContainer";
// import Users from "./Users";

import { Routes, Route } from "react-router-dom";

import st from "components/Main/Main.module.css";
import UsersContainer from "./Users/usersContainer";
// import store from "Redux/state";

const Main = () => {
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
            // render={() =>
            <FuturePlans
            // posts={props.futurePage.posts}
            // futurePage={props.state.futurePage}
            // dispatch={props.dispatch}
            // store={props.store}
            />
          }
        />
        <Route
          path="/messages"
          element={
            // render={() =>
            <DialogsContainer
            // state={props.state.dialogsPage}
            // dispatch={props.dispatch}
            // store={props.store} 
            // dialogsData={props.state.dialogsData}
            // messagesData={props.state.messagesData}
            />
          }
        />
        <Route
          path="/users"
          element={<UsersContainer />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main >
  );
};

export default Main;
