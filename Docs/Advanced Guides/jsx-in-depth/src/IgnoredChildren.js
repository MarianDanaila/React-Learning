import React from "react";

function IgnoredChildren(props) {
  return (
    <div>
      {props.children > 0 && <h1>I am rendered only if prop passed is true</h1>}
      <h2>{String(props.children)}</h2>
    </div>
  );
}

export default IgnoredChildren;
