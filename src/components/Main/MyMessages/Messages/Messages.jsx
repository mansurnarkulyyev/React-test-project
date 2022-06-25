import React from "react";

import st from "components/Main/MyMessages/Messages/Messages.module.css";


const Messages = (props) => {
    return <p className={st.message}>{props.message}</p>;
  };

  export default Messages;