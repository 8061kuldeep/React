import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import User from "./User";
import App from "../App";
import Navbar from "../components/Navbar";
import Hook from "./Hook";
import Hero from "./Hero";
import Error from "./Error";
export default () => {
  return (
    <Router>
      <div>
        <Error>
          <Hero heroName={"Salman"}></Hero>
          <Hero heroName={"Shahrukh"}></Hero>
        </Error>
        <Hook></Hook>
        <Navbar></Navbar>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/signup">
            <About />
          </Route>
          <Route path="/login">
            <User />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
