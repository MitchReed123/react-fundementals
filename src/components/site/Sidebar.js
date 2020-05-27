import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import Home from "./Home";
import Resources from "./Resources";
import FunctionalComponentDemo from "../concepts/FunctionalComponentDemo";
import JSXRules from "../concepts/JSXRules";
import State from "../concepts/State";
import PropsDemo from "../concepts/PropsDemo";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-list-styling">
        <ul className="sidebar-list list-unstyled">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/functionalcomponent">Functional Component</Link>
          </li>
          <li>
            <Link to="/Resources">Resources</Link>
          </li>
          <li>
            <Link to="/JSXRules">JSX Rules</Link>
          </li>
          <li>
            <Link to="/state">useState</Link>
          </li>
          <li>
            <Link to="/propsdemo">Props Demo</Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-route">
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/Resources">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/functionalcomponent">
            <FunctionalComponentDemo />
          </Route>
          <Route exact path="/jsxrules">
            <JSXRules />
          </Route>
          <Route exact path="/state">
            <State />
          </Route>
          <Route exact path="/propsdemo">
            <PropsDemo />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Sidebar;
