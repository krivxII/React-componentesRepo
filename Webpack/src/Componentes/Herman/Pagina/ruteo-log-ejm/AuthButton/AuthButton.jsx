import React, { useContext, createContext, useState } from "react";
import {  useHistory, } from "react-router-dom";
import {authContext} from "../contex/authContext.js"

export default function AuthButton() {
    let history = useHistory();
    let auth = useContext(authContext);
   
    return auth.user ? (
      

      <p>
        Welcome!{" "+auth.user+" "}
        <button
          onClick={() => {
            auth.signout(() => history.push("/"));
          }}
          >
          Sign out
        </button>
      </p>
          
    ) : (
      <p>You are not logged in.</p>
    );
  };
