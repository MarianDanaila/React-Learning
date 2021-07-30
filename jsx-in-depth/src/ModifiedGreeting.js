import React from "react";

function ModifiedGreeting(props) {
  const { age, ...other } = props;
  console.log(other);
  return <p>I am {age} years old</p>;
}

export default ModifiedGreeting;
