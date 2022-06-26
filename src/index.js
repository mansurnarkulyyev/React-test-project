// import React from 'react';
// import ReactDOM from 'react-dom/client';
import state from 'Redux/state';
// import {addPost} from 'Redux/state';

// import './index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
import { rerenderEntireTree } from 'reder';



rerenderEntireTree(state);
