import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
const store = legacy_createStore(Reducer);
import { Provider } from "react-redux";
import Reducer from "./store/Reducer";
import { legacy_createStore } from "redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
