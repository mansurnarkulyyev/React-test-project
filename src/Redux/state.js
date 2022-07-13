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
    },
       
  },
  _callSubscriber(){
  console.log('State Changed');
  },

  
  getSate() {
    return this._state
  }, 
   subscribe(observer) {
  this._callSubscriber = observer;
  },
   
   
  // addPost(){
  // let newPost = {
  //   id:7,
  //   message: this._state.futurePage.newPostText,
  //   likesCount: 0
  // };
  // this._state.futurePage.posts.push(newPost);
  // this._state.futurePage.newPostText='';
  // this._callSubscriber(this._state);
  // },
  // updateNewPostText(newText){
  // this._state.futurePage.newPostText = newText;
  // this._callSubscriber(this._state);
  // },

  dispatch(action) { //{type: "ADD-POST"}
    if (action.type === "ADD-POST") {
      let newPost = {
    id:7,
    message: this._state.futurePage.newPostText,
    likesCount: 0
  };
  this._state.futurePage.posts.push(newPost);
  this._state.futurePage.newPostText='';
  this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
       this._state.futurePage.newPostText = action.newText;
       this._callSubscriber(this._state);
    }
  },
}


export default store;
window.store = store;