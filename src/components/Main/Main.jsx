import React from "react";
// import Header from "components/Main/Header/Header";
import Navbar from "./Navbar/Navbar";
// import MyPast from "./MyPast/MyPast";
// import FuturePlans from "./FuturePlans/FuturePlans";
// import Dialogs from "./MyMessages/Dialogs";
import NotFoundPage from "./NotFoundPage";
// import Sidebar from "components/Sidebar";
import DialogsContainer from "./MyMessages/DialogsContainer";
// import Users from "./Users";

import { Routes, Route } from "react-router-dom";

import st from "components/Main/Main.module.css";
import UsersContainer from "./Users/usersContainer";
import MyPastContainer from "./MyPast/MyPastContainer";
import FuturePlansContainer from "./FuturePlans/FuturePlansContainer";
import HeaderContainer from "./Header/HeaderContainer";
import LoginPage from "components/Login";
// import FuturePlans from "./FuturePlans";
// import store from "Redux/state";

const Main = () => {
  return (
    <main className={st.main}>
      {/* <Sidebar /> */}
      <HeaderContainer />
      <Routes>
        <Route path="/navbar" exact element={<Navbar />} />
        <Route path="/myPast" element={<MyPastContainer />} />
        <Route
          path="/login"
          element={<LoginPage />} />

        <Route
          path="/future/*"
          element={
            // render={() =>
            <FuturePlansContainer
            // posts={props.futurePage.posts}
            // futurePage={props.state.futurePage}
            // dispatch={props.dispatch}
            // store={props.store}
            />
          }
        />
        <Route
          path="/future/:userId"
          element={
            <FuturePlansContainer
            />
          }
        />

        {/* <Route path='/future' element={<FuturePlansContainer />} /> */}
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
