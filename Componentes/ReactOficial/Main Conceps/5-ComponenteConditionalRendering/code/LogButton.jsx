import React from "react";
import {hot} from "react-hot-loader";

function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }

  function LogButton(props){
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <LoginButton onClick={props.onClick} />;
    }
    return <LogoutButton onClick={props.onClick}/>;

  }

  export default hot(module)(LogButton);