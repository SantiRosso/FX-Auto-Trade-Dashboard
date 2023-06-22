import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app.js";
import { BrowserRouter } from "react-router-dom";
// import axios from "axios";

// axios.defaults.baseURL = process.env.REACT_APP_API;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
