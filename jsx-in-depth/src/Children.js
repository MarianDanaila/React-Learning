import React from "react";

function Children(props) {
  return (
    <div>
      <h1>{props.children}</h1>
      <h2>{props.name}</h2>
    </div>
  );
}

export default Children;
