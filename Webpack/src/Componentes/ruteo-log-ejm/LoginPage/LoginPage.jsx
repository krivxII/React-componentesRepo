import React,{ useContext } from "react";
import {
  useHistory,
  useLocation
} from "react-router-dom";
import {authContext} from "../contex/authContext"

export default function LoginPage() {
    let history = useHistory();
    let location = useLocation();
    let auth = useContext(authContext);
  
    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
      auth.signin(() => {
        history.replace(from);
      });
    };
  
    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={login}>Log in</button>
      </div>
    );
  }
  