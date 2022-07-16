import React from "react";

import BgVideo from "components/BgVideo/BgVideo";
import Sidebar from "components/Sidebar/Sidebar";
import Main from "components/Main/Main";
import st from "./App.module.css";
// import store from "Redux/state";

const App = (props) => {
  return (
    <div className={st.wrap}>
      <BgVideo />
      <Sidebar />
      <Main
      //  futurePage={props.state.futurePage}
        // newPostText={props.state.futurePage}
      //  state={props.state.dialogsPage}
        // messagesData={props.state.dialogsPage.messagesData}
        dispatch={props.dispatch}
        store={props.store}
      />
    </div>
  );
};

export default App;
