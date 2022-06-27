let rerenderEntireTree = () =>{
  console.log('State Changed');
}

let state = {
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
       
};

export let addPost= ()=>{
  let newPost = {
    id:7,
    message: state.futurePage.newPostText,
    likesCount: 0
  };
state.futurePage.posts.push(newPost);
state.futurePage.newPostText='';
rerenderEntireTree(state);
};

export let updateNewPostText= (newText)=>{
state.futurePage.newPostText = newText;
rerenderEntireTree(state);
};

export default state;