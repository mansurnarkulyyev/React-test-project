import React from "react";
import DialogItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";

import st from "./Dialogs.module.css";
// import { sendMessageCreator, updateNewMessageBodyCreator } from "Redux/dialogs-reducer";


const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map((el) => (
    <DialogItem name={el.name} id={el.id} src={el.src} />
  ));

  let messageElements = state.messagesData.map((el) => (
    <Messages message={el.message} id={el.id} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessage = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e) => {
    e.preventDefault();
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }


  return (
    <div className={st.dialogs}>
      <ul className={st.team}>{dialogsElements}</ul>
      <div className={st.messages}>
        <div>{messageElements}</div>
        <div>
          <div><textarea value={newMessageBody}
            onChange={onNewMessageChange}
            placeholder="Enter your message"></textarea></div>
          <div><button onClick={onSendMessage}>send</button></div>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
