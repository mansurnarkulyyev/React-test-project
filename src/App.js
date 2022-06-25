import React from "react";

import BgVideo from "components/BgVideo/BgVideo";
import Sidebar from "components/Sidebar/Sidebar";
import Main from "components/Main/Main";
import st from "./App.module.css";

const App = (props) => {
  return (
    <div className={st.wrap}>
      <BgVideo />
      <Sidebar />
      <Main
        posts={props.state.futurePage.posts}
        dialogsData={props.state.dialogsPage.dialogsData}
        messagesData={props.state.dialogsPage.messagesData}
      />
    </div>
  );
};

export default App;
