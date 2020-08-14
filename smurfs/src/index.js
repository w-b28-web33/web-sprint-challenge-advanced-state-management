import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from "./reducers/rootReducer";
import thunk from 'react-redux';



import "./index.css";
import App from "./components/App";

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(<Provider><App /></Provider>, 
            document.getElementById("root"));
