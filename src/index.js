import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Router } from "react-router-dom";

// Providers component
import { Provider } from "react-redux";

// Adding bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Importing reducers
import reducers from "./reducers";
import { createStore } from "redux";

// For redux dev tools
import { composeWithDevTools } from "redux-devtools-extension";

// Thunk Stuff
// import { applyMiddleware } from "redux";
// import thunk from "redux-thunk";

import history from "./history";

ReactDOM.render(
  <Provider
    store={createStore(reducers, composeWithDevTools())}
  >
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
