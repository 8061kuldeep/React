import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "karna"
    };
    this.get = this.get.bind(this);
  }
  get(childName) {
    alert("i am working" + this.state.name + "from" + childName);
  }
  render() {
    return (
      <div>
        <Child gethandler={this.get}></Child>
      </div>
    );
  }
}

export default Parent;
