import React, { Component } from "react";
class Hello extends Component {
  constructor() {
    super();
    this.state = {
      name: "karan"
    };
  }
  changemsg = () => {
    this.setState({
      name: "welcome karan"
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.changemsg}>subscrib</button>
      </div>
    );
  }
}
export default Hello;
