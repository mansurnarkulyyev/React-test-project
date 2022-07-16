import store from 'Redux/redux-store';
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
          store={store}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state); //когда стейт измениться вызываем эту функцию иначе стейт будет андефайнед
})
