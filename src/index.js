import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "modern-normalize/modern-normalize.css";
import "./styles/base.scss";

import App from "./App";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
