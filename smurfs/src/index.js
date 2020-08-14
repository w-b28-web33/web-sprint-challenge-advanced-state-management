import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from "./reducers/rootReducer";
import thunk from 'react-thunk';
import logger from 'redux-logger'



import "./index.css";
import App from "./components/App";

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

ReactDOM.render(<Provider store={store}><App /></Provider>, 
            document.getElementById("root"));
