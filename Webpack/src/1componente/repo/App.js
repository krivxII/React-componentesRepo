import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {hot} from "react-hot-loader";
import "./App.css";
import LogInForm from './Components/LogInForm.jsx';
import RegisterForm from './Components/RegisterForm.js'

const App = () => <Router>
  <Switch>
    <Route exact path="/login">
      <LogInForm />
    </Route>
    <Route exact path="/register">
      <RegisterForm />
    </Route>
    <Route  path="/">
      <Link to="/login">Iniciar sesion</Link>
      &nbsp;
      <Link to="/register">Registrarse</Link>
    </Route>
  </Switch>
</Router>

export default hot(module)(App);
