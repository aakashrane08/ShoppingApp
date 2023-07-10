import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { store } from "./redux/Store";
import { Toaster } from "react-hot-toast";
import SearchContextProvider from "./context/AppContext";
import AppContextProvider from "./context/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
      <Provider store={store}>
        <AppContextProvider>
        <App />
        <Toaster />
        </AppContextProvider>
      </Provider>
  </BrowserRouter>
);
