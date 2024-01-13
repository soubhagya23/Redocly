
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import { Container } from "semantic-ui-react";

import MetaData from './MetaData';

const root = ReactDOM.createRoot(document.getElementById('root'));

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);


root.render(

  
  <React.StrictMode>
    <BrowserRouter>
    <App />
    
    </BrowserRouter>
    <Container style={{ margin: 20 }}>
   <MetaData />
  </Container>
  </React.StrictMode>
);

  document.getElementById("root")

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
