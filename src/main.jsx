import React from "react";
import ReactDOM from "react-dom/client";
// Necessary Import
import { BrowserRouter as Router } from "react-router-dom";
//we import the index file with all routes
import RoutesConfig from "./routes";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <RoutesConfig />
    </Router>
  </React.StrictMode>
);
