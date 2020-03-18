import React, { Component } from "react";
import List from "./list";
export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      title: "todo list",
      list: []
    };
  }
  makeList(event) {
    this.setState({ title: event.target.value });
  }
  set() {
    this.setState({ list: [...this.state.list, this.state.title], title: "" });
    console.log(this.state.list);
  }
  render() {
    return (
      <div>
        <input
          
          type="text"
          value={this.state.title}
          onChange={event => this.makeList(event)}
        ></input>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => this.set()}
        >
          add
        </button>
        <List demo={this.state.list}></List>
        {/* <ul>
          {this.state.list.map((value, index) => (
            <h1 key={index}>{value}</h1>
          ))}
        </ul> */}
      </div>
    );
  }
}

export default Todo;
