import React from "react";

import BgVideo from 'components/BgVideo/BgVideo';
import Sidebar from "components/Sidebar/Sidebar";
import Main from "components/Main/Main"
import st from "./App.module.css";

const App = () => {
  return (
      <div className={st.wrap}>
       <BgVideo/>
       <Sidebar/>
       <Main/>
      </div>
  );
};

export default App;
