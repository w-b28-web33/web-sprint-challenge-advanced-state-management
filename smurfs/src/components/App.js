import React, { Component } from "react";
import "./App.css";
import SmurfList from "./SmurfList";




class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <h2>Smurf Village USA!</h2>
        <SmurfList />
      </div>
    );
  }
}

export default App;