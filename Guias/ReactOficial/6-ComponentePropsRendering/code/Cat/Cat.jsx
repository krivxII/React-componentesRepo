import React, { Component} from "react";
import Catt from "./cat.jpg"
import {hot} from "react-hot-loader";


class Cat extends React.Component {
    render() {
      const mouse = this.props.mouse;
      return (
        <img src= {Catt} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
      );
    }
  }
  


  export default hot(module)(Cat);