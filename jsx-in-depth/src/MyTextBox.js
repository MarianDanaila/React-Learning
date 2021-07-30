import React from "react";

function MyTextBox(props) {
  return props.autocomplete ? <p>True</p> : <p>False</p>;
}

export default MyTextBox;
