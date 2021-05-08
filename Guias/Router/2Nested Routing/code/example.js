import React from "react";
import {hot} from "react-hot-loader";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


function App() {
  return (
    <Router>
     
      <div>
      
            <Link to="/">Home </Link>
         
            <Link to="/about">About </Link>
        
            <Link to="/topics">Topics </Link>
         

        <Switch>
          
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route  path="/topics">
            <Topics />
          </Route>
          <Route>
            <Hom2e/>
          </Route>
        </Switch>


      </div>
    </Router>
  );s
}

function Home() {
  return <h2>Home</h2>;
}
function Hom2e() {
  return <h2>No existe esta ruta</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();
  console.log(match);

  return (
    <div>
      <h2>Topics {match.path +" "+ match.url}  </h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>
            Components
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
          
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={`${match.path}/:topicToken`}>
          <Topic />
        </Route>
        <Route  path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

export default hot(module)(App)