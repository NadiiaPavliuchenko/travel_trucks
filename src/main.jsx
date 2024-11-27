import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../node_modules/modern-normalize/modern-normalize.css";
import App from "./components/App/App.jsx";
import { RootStyles } from "./styles/rootStyles.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <RootStyles />
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
