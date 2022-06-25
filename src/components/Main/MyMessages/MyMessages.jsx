import React from "react";
import DialogItem from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";

import st from "components/Main/MyMessages/MyMessages.module.css";


const Dialogs = (props) => {
 
  let dialogsElements = props.dialogsData.map((el) => (
    <DialogItem name={el.name} id={el.id} src={el.src} />
  ));

  let messageElements = props.messagesData.map((el) => (
    <Messages message={el.message} id={el.id}/>
  ));

  return (
    <div className={st.dialogs}>
      <ul className={st.team}>{dialogsElements}</ul>

      <div className={st.messages}>{messageElements}</div>
    </div>
  );
};
export default Dialogs;
