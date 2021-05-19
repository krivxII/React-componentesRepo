import React, { Component} from "react";
import {hot} from "react-hot-loader";


class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(), count: 0};
  }

  
///Que hacer al montar el componente
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  //Que Hacer al desmontar el componente
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  

  tick() {
    this.setState(
      (state, props) => ({date: new Date(),count: state.count + 1})
    );
  }

  /*
  -------------------
  Buena practica: pasar el estado y las propiedades como parametros
  -------------------
  this.setState(function(state, props) {
    return {
      counter: state.counter + props.increment
    };
  });
------------------------------------
  this.setState((state, props) => ({
  counter: state.counter + props.increment
  }));

*/


  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}


export default hot(module)(Toggle);