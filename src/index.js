import React from "react";
import ReactDOM from "react-dom"; // Without '/client'
import App from "./App";
import "./index.css"; // optional

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
