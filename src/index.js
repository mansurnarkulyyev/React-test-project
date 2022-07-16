import store from 'Redux/redux-store';
// import { rerenderEntireTree } from 'reder';
// import * as serviceWorker from './serwiceWorker'
import React from "react"; 
import ReactDOM from "react-dom/client";
// import { addPost, updateNewPostText } from "Redux/state";

import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import  { Provider } from 'StoreContext';


const root = ReactDOM.createRoot(document.getElementById("root")); 
let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider value={store}>
             <App  />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

rerenderEntireTree();

store.subscribe(() => {
  // let state = store.getState();
  rerenderEntireTree(); //когда стейт измениться вызываем эту функцию иначе стейт будет андефайнед
})
