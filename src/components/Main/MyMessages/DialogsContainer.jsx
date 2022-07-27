// import React from "react";
// import { withAuthNavigate } from "hoc/withAuthNavigate";
import { connect } from "react-redux";
import { compose } from "redux";
// import { Navigate } from "react-router-dom";

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
        // auth: state.auth.isAuth,
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



export default compose(
    // withAuthNavigate,
    connect(mapStateToProps, mapDispatchToProps),
)(Dialogs);


// let AuthNavigateComponent = withAuthNavigate(Dialogs); //из hoc пришли

// //     (props) => {
// //     // if (this.props.isAuth) return <Navigate to={'/login'} />
// //     return <Dialogs {...props} />
// // }

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthNavigateComponent);


// export default DialogsContainer;
