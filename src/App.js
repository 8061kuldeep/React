import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Wellcome from "./components/Wellcome";
import Test from "./components/test";
import Hello from "./components/Hello";
import Demo from "./components/demo";
import Click from "./components/click";
import Parent from "./components/Parent";
import Conditoning from "./components/Conditoning";
import Linsting from "./components/Linsting";
import Todo from "./components/Todo";
import Form from "./components/Form";
import ReactRef from "./components/reactRef";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About";
import User from "./components/User";
import Home from "./components/Home";
import Hero from "./components/Hero";
function App() {
  return (
    <div className="container">
      <Todo></Todo>
      <ReactRef></ReactRef>
      <Hero></Hero>
      
      {/* <Linsting></Linsting>
        <Parent></Parent>
        <Conditoning></Conditoning> */}
      {/* <Test name="Rohit" pincode="12354">
          i am children
        </Test>
        <Hello />
        <Demo />
        <Click />
        <Test pincode="12354" />
        <Test name="Sumit" pincode="12354" />
        {/* <Wellcome /> */}
      {/* <Test name="karan" college="SAGE University" id="0802EC151043"></Test> */}
      <Form></Form>
      <Router>
        <nav>
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
        </nav>

        <Switch>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/users">
            <User></User>
          </Route>
          <Route path="/home">
            <Home> </Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
