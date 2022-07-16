import React from "react";

import { sendMessageCreator, updateNewMessageBodyCreator } from "Redux/dialogs-reducer";
import StoreContext from "StoreContext";
import Dialogs from "./Dialogs";


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage;
                let onSendMessage = () => {
                    store.dispatch(sendMessageCreator())
                }

                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                }

                <Dialogs updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessage}
                    dialogsPage={state}
                />
            }}
        </StoreContext.Consumer>
    );
};
export default DialogsContainer;
