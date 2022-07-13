import store from 'Redux/state';
// import { rerenderEntireTree } from 'reder';
// import * as serviceWorker from './serwiceWorker'
import React from "react";
import ReactDOM from "react-dom/client";
// import { addPost, updateNewPostText } from "Redux/state";

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
          dispatch={store.dispatch.bind(store)}
          // addPost={store.addPost.bind(store)}
          // updateNewPostText={store.updateNewPostText.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};

rerenderEntireTree(store.getSate());

store.subscribe(rerenderEntireTree)
