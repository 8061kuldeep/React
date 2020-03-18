import React from "react";

function List({ demo }) {
  return (
    <ul>
      {demo.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </ul>
  );
}

export default List;
