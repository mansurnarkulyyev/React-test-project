// import React from "react";
import { connect } from "react-redux";

import { sendMessageCreator, updateNewMessageBodyCreator } from "Redux/dialogs-reducer";
// import StoreContext from "StoreContext";
import Dialogs from "./Dialogs";


// const DialogsContainer = () => {

//     return <StoreContext.Consumer>
//         {(store) => {
//             // let state = store.getState().dialogsPage;
//             let onSendMessage = () => {
//                 store.dispatch(sendMessageCreator())
//             }

//             let onNewMessageChange = (body) => {
//                 store.dispatch(updateNewMessageBodyCreator(body))
//             }

//             <Dialogs updateNewMessageBody={onNewMessageChange}
//                 sendMessage={onSendMessage}
//                 dialogsPage={store.getState().dialogsPage}
//             />
//         }}
//     </StoreContext.Consumer>
// };

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        auth: state.auth.isAuth,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;
