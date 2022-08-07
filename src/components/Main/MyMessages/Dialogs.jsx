import React from "react";
import DialogItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";

import st from "./Dialogs.module.css";
import { Navigate } from "react-router-dom";
// import { sendMessageCreator, updateNewMessageBodyCreator } from "Redux/dialogs-reducer";


const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map((el) => (
    <DialogItem key={el.id} name={el.name} id={el.id} src={el.src} />
  ));

  let messageElements = state.messagesData.map((el) => (
    <Messages key={el.id} message={el.message} id={el.id} />
  ));

  // let newMessageBody = state.newMessageBody;

  // let onSendMessage = () => {
  //   props.sendMessage();
  // }

  // let onNewMessageChange = (e) => {
  //   e.preventDefault();
  //   let body = e.target.value;
  //   props.updateNewMessageBody(body);
  // }


  if (props.isAuth === false) return <Navigate to={"/login"} />



  return (
    <div className={st.dialogs}>
      <ul className={st.team}>{dialogsElements}</ul>
      <div className={st.messages}>
        <div>{messageElements}</div>
        <AddMessageForm />
      </div>
    </div>
  );
};



const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <input
          name=" newMessageBody"
          placeholder="Enter your message"

        />
      </div>
      <div><button>send</button></div>
    </form>
  )
}

export default Dialogs;
