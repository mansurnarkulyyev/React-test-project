import dialogsReducer from "./dialogs-reducer";
import futureReducer from "./future-reducer";
import sidebarReducer from "./sidebar-reducer";

// const ADD_POST = "ADD-POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
// const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
// const SEND_MESSAGE = "SEND_MESSAGE";
  
let store = {
  _state: {
    futurePage:{
        posts: [
            { id: "1", message: "nayanayanaya some message", likesCount: 11 },
            { id: "2", message: "Hahahahahahsr message", likesCount: 25 },
            { id: "3", message: "Hasomr message", likesCount: 2 },
            { id: "4", message: "Hahahadjjhahahsr message", likesCount: 44 },
            { id: "5", message: "abarahsr message", likesCount: 5 },
            { id: "6", message: "Hdnwjssr message", likesCount: 26 },
          ],
          newPostText:'Project By Olga',
    },
    
    dialogsPage:{
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
      newMessageBody:"",
    },

    sideBar:{},
  },
  _callSubscriber(){
  console.log('State Changed');
  },
  
  getState() {
    return this._state;
  }, 

  subscribe(observer) {
  this._callSubscriber = observer; // publisher - observer паттерн наблюдатель как онклик
  },
   

  dispatch(action) { //{type: "ADD-POST"}
    this._state.futurePage = futureReducer(this._state.futurePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sidebarReducer(this._state.sideBar, action);
    this._callSubscriber(this._state);

     
  //   if (action.type === ADD_POST) {
  //     let newPost = {
  //   id:7,
  //   message: this._state.futurePage.newPostText,
  //   likesCount: 0
  // };
  // this._state.futurePage.posts.push(newPost);
  // this._state.futurePage.newPostText ='';
  // this._callSubscriber(this._state);
  //   } else if (action.type === UPDATE_NEW_POST_TEXT) {
  //      this._state.futurePage.newPostText = action.newText;
  //      this._callSubscriber(this._state);
  //   } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
  //     this._state.dialogsPage.newMessageBody = action.body;
  //     this._callSubscriber(this._state);
  //   } else if (action.type === SEND_MESSAGE) {
  //     let body = this._state.dialogsPage.newMessageBody;
  //     this._state.dialogsPage.newMessageBody = '';
  //     this._state.dialogsPage.messagesData.push( { id: "6", message: body })
  //     this._callSubscriber(this._state);
  //   }
  },
}


export default store;
window.store = store;