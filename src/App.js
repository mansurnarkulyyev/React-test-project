import React from "react";

import BgVideo from 'components/BgVideo/BgVideo';
import Sidebar from "components/Sidebar/Sidebar";
import Main from "components/Main/Main"
import st from "./App.module.css";

const App = (props) => {
  return (
      <div className={st.wrap}>
       <BgVideo/>
       <Sidebar/>
       <Main posts={props.posts} dialogsData={props.dialogsData} messagesData={props.messagesData}/>
      </div>
  );
};

export default App;
