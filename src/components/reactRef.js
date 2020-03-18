import React, { Component } from "react";

export class ReactRef extends Component {
  constructor(props) {
    super(props);
    this.reactRef = React.createRef();
  }
  componentDidMount() {
    this.reactRef.current.focus();
  }
  hit() {
    console.log(this.reactRef.current.value);
  }

  render() {
    return (
      <div>
        <input type="text" className="form-control" ref={this.reactRef}></input>
        <button className="btn btn-warning" onClick={() => this.hit()}>
          click me
        </button>
      </div>
    );
  }
}

export default ReactRef;
