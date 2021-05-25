import React, { useContext } from "react";
import {authContext} from "../contex/authContext"
import {
  Route,
  Redirect,
} from "react-router-dom";


export default function PrivateRoute({ children, ...rest }) {
    let auth = useContext(authContext);


 
    return (
      <Route 
          {...rest} //Aca se le pasa la ruta
          render={({ location }) =>
            auth.user ? 
            (children)
            :
            (<Redirect to={ { pathname: "/login", state: { from: location } } }/>)
            }
      />
    );

    
  }