import React, { Component } from "react";
// import { browserHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
class Form extends Component {
  obj = [];

  constructor(props) {
    super(props);
    this.reactRef = React.createRef();

    this.state = {
      username: "",
      skills: "",

      email: "",
      emailError: "",
      skillsError: "",
      usernameError: ""
    };
  }
  componentDidMount() {
    this.reactRef.current.focus();
  }
  Handler(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  isvalid = event => {
    let emailError = "";
    let skillsError = "";
    let usernameError = "";
    if (
      !this.state.email.includes("@") ||
      this.state.username == "" ||
      this.state.skills == ""
    ) {
      if (!this.state.email.includes("@")) {
        emailError = "invalid email";
      }
      if (emailError) {
        this.setState({ emailError });
      }
      if (this.state.username == "") {
        usernameError = "please fill details";
      }
      if (usernameError) {
        this.setState({ usernameError });
      }
      if (this.state.skills == "") {
        skillsError = "please fill details";
      }
      if (skillsError) {
        this.setState({ skillsError });
      }
      return false;
    }

    return true;
  };
  formHandler() {
    const isvalid = this.isvalid();
    console.log(isvalid);
    if (isvalid) {
      this.obj = [];
      this.storage = JSON.parse(localStorage.getItem("formData"));
      if (this.storage) {
        this.obj = this.storage;
      }
      this.obj = [...this.obj, this.state];
      localStorage.setItem("formData", JSON.stringify(this.obj));
      this.props.history.push("/home");
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <h1 className="text-center text-info">Login form</h1>
        <form>
          <div className="form-group form-check">
            <label>Username:</label>
            <input
              ref={this.reactRef}
              type="text"
              className="form-control"
              placeholder="Enter username"
              name="username"
              value={this.state.username}
              onChange={event => this.Handler(event)}
            ></input>
            <p style={{ color: "red" }}> {this.state.usernameError}</p>
          </div>

          <div className="form-group form-check">
            <label>Skills:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              name="skills"
              value={this.state.skills}
              onChange={event => this.Handler(event)}
            ></input>
            <p style={{ color: "red" }}> {this.state.skillsError}</p>
          </div>
          <div className="form-group form-check">
            <label>Email:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              name="email"
              value={this.state.email}
              onChange={event => this.Handler(event)}
            ></input>
            <p style={{ color: "red" }}> {this.state.emailError}</p>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={event => this.formHandler(event)}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(Form);
