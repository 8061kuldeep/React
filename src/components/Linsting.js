import React from "react";
import Person from "./Person";

function Linsting() {
  const personsList = [
    {
      name: "karanz",
      id: 12,
      college: "svce"
    },
    {
      name: "suma",
      id: 125,
      college: "sirt"
    },
    {
      name: "ankit",
      id: 18,
      college: "svce"
    }
    ];
  const pList = personsList.map(person => <Person key={person.id} list={person}></Person> )
  return <div>{pList}</div>;
}

export default Linsting;
