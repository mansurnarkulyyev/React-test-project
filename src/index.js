import React from 'react';
import ReactDOM from 'react-dom/client';
import state from 'Redux/state';

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App state={state}/>
    </BrowserRouter>
  </React.StrictMode>
);

