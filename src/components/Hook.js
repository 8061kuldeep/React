import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
function Hook(props) {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState("");
  const submit = () => {
    props.history.push("/home");
    console.log(email, username, skills);
  };
  useEffect(() => {
    document.title = `email is ${email}`;
  }, [email]);

  return (
    <div>
      <p>cout is {count}</p>
      <button onClick={() => setCount(count + 1)}>inc</button>
      <form onSubmit={submit}>
        <h1 className="text-center">HOOK FORM</h1>
        <div className="form-group form-check">
          <label>Username:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            required
            name="username"
            value={username}
            onChange={event => setUsername(event.target.value)}
          ></input>
        </div>

        <div className="form-group form-check">
          <label>Skills:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            name="skills"
            value={skills}
            onChange={event => setSkills(event.target.value)}
            required
          ></input>
        </div>
        <div className="form-group form-check">
          <label>Email:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            name="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            required
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default withRouter(Hook);
