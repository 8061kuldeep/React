import React from "react";

function Person({ list }) {
  return (
    <div>
      <h2>
        my name is {list.name}.my id is {list.id}.my college is
        {list.college}
      </h2>
    </div>
  );
}

export default Person;
