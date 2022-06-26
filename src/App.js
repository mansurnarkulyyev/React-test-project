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
        newPostText={props.state.futurePage.newPostText}
        dialogsData={props.state.dialogsPage.dialogsData}
        messagesData={props.state.dialogsPage.messagesData}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default App;
