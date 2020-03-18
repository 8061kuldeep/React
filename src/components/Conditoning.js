import React, { Component } from "react";

class Conditoning extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true
    };
  }

  render() {
    // let message;
    // if (this.state.isLogin) {
    //   message = <div>user is loged in </div>;
    // } else {
    //   message = <div>user is not loged in</div>;
    // }
    return this.state.isLogin && <div>user is loged in</div>;
  }
}

export default Conditoning;
