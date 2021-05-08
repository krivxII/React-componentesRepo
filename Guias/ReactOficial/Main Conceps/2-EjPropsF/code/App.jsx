import React, { Component} from "react";
import {hot} from "react-hot-loader";

function App (props){
  return(
    <div className="App">
      <h1> Hello,  {props.text} </h1>
    </div>
  );
}


export default hot(module)(App);