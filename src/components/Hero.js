import React from "react";

function Hero({ heroName }) {
  if (heroName == "amir") {
    throw new Error("Not an Hero!");
  }
  return <div>{heroName}</div>;
}

export default Hero;
