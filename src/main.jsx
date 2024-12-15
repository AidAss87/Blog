import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Router from "./Router"; // Импортируем Router
import "./index.css";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
