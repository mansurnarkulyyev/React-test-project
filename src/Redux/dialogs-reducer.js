const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

let initialState = {
    dialogsData: [
            { id: "1", name: "Frank Sinatra", src: "./images/team/Ellipse 5-1.svg" },
            { id: "2", name: "Harvey Specter", src: "./images/team/Ellipse 5-2.svg" },
            { id: "3", name: "Harvey Specter", src: "./images/team/Ellipse 5-3.svg" },
            { id: "4", name: "Harvey Specter", src: "./images/team/Ellipse 4.svg" },
            { id: "5", name: "Harvey Specter", src: "./images/team/Ellipse 5.svg" },
          ],
          messagesData: [
            { id: "1", message: "nayanayanaya some message" },
            { id: "2", message: "wefcf message" },
            { id: "3", message: "Hahahqxwahwcfacwfwhahsr message" },
            { id: "4", message: "Hahqxahahaqcwefchahsr message" },
            { id: "5", message: "Hahahahahahsr message" },
      ],
    newMessageBody: "",
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({ id: "6", message: body })
            return state;
        default:
            return state;
    }

    // if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //     state.newMessageBody = action.body;
    // } else if (action.type === SEND_MESSAGE) {
    //     let body = state.newMessageBody;
    //     state.newMessageBody = '';
    //     state.messagesData.push({ id: "6", message: body })
    // }

    // return state;
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) =>
  ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;