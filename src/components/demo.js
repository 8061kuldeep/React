import React, { Component } from "react";

class Demo extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }
  count() {
    this.setState(privState => ({
      counter: privState.counter + 1
    }));
  }
  countfive() {
    this.count();
    this.count();
    this.count();
    this.count();
    this.count();
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={() => this.countfive()}>increace</button>
      </div>
    );
  }
}

export default Demo;
