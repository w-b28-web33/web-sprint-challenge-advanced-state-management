import React, { Component } from "react";
import Form from './Form';

import Container from './Container';
import { fetchSmurfs } from '../actions/index';
import { connect } from 'react-redux';
import "./App.css";



class App extends Component {
 

   componentDidMount() {
     console.log ("is mounted")
     this.props.fetchSmurfs()
   }
  

  render() {
    // console.log(this.props)
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <Form />
        <Container />
      </div>
    );
  }
}
  const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, { fetchSmurfs })(App);
