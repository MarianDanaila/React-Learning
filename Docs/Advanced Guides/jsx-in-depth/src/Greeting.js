import React from "react";

function Greeting(props) {
  return (
    <p>
      My name is {props.firstName} {props.lastName}
    </p>
  );
}

export default Greeting;
