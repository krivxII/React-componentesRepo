import React, { Component} from "react";
import {hot} from "react-hot-loader";


class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div>
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
      <p>{this.state.isToggleOn ? 'prendido' : 'apagado'}</p>
      </div>
    );
  }
}



export default hot(module)(Toggle);