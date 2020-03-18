import React from "react";
import Demo from "./demo";

function click() {
  function Demo() {
    console.log("button clicked");
  }
  return (
    <div>
      <button className="btn btn-danger" onClick={() => Demo()}>
        click me
      </button>
    </div>
  );
}

export default click;
