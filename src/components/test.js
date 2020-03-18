import React from "react";

const Test = ({ name, id, college }) => {
  const Submit = () => {
    console.log("button is clicked");
  };
  return (
    <div className="container">
      <h1 className="text-info">Student details</h1>
      <table className="table ">
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>College</th>
        </tr>
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>{college}</td>
        </tr>
      </table>

      <button className="btn btn-info" onClick={Submit}>
        Submit
      </button>
    </div>
  );
};
export default Test;
