import React, { Component } from "react";
import Form from './Form'

import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <Form />
      </div>
    );
  }
}

export default App;
