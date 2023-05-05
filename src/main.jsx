import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // importando a fonte para o componente principal
import { GlobalStyles } from "./GlobalStyles.js"; // global styles importado para todo o projeto

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
