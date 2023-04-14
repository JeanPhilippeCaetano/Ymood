import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';



const rootElement = document.querySelector("#root");
//id is given as app

const root = ReactDOM.createRoot(rootElement);
root.render(
  <Router>
    <App />
  </Router>
);


