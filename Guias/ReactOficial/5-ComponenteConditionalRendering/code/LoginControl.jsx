import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Greeting from "./Greeting.jsx";
import LogButton from "./LogButton.jsx"


function Prueba(props) {
  return <h1>herman</h1>;
}
function Prueba2(props) {
  return <h1>herman2</h1>;
}


class LoginControl  extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogClick = this.handleLogClick.bind(this);
    this.elemento = <Prueba></Prueba>;
    this.state = {isLoggedIn: false, elemento: <Prueba></Prueba>};
  }

  handleLogClick() {
    this.setState((state, props) => {
      if (state.isLoggedIn) return {isLoggedIn: false}
      else  return {isLoggedIn: true}
    });
  }


  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = <LogButton onClick={this.handleLogClick} isLoggedIn={isLoggedIn}></LogButton>
   
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        {this.elemento}
        {this.state.elemento}
      </div>
    );
  }
}



export default hot(module)(LoginControl);