import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Cat from './Cat/Cat.jsx';
import Mouse from './Mouse/Mouse.jsx';


  class MouseTracker extends React.Component {
    render() {
      return (
        <div>
          <h1>Move the mouse around!</h1>
          <Mouse windows={this.props.windows} render={ mouse => ( <Cat mouse={mouse} />)}/>
        </div>
      );
    }
  }

  export default hot(module)(MouseTracker);