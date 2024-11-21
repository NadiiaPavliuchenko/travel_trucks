import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App.jsx";
import { RootStyles } from "./rootStyles.js";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/travel_trucks">
      <RootStyles />
      <App />
    </BrowserRouter>
  </StrictMode>
);
