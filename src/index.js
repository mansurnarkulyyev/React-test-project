import state from 'Redux/state';
// import { rerenderEntireTree } from 'reder';

import React from "react";
import ReactDOM from "react-dom/client";
import { addPost, updateNewPostText } from "Redux/state";

import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root")); 
let rerenderEntireTree = (state) => {
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

rerenderEntireTree(state);
