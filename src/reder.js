import React from "react";
import ReactDOM from "react-dom/client";
import { addPost, updateNewPostText } from "Redux/state";

import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// export let rerenderEntireTree = (state)=>{
//     ReactDOM.createRoot(document.getElementById('root')).render(
//         <React.StrictMode>
//           <BrowserRouter>
//           <App state={state} addPost={addPost}
//            updateNewPostText={updateNewPostText}/>
//           </BrowserRouter>
//         </React.StrictMode>
//       );

// }

const root = ReactDOM.createRoot(document.getElementById("root")); // ВОТ ЭТА СТРОКА
export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};
