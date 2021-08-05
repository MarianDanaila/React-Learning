import React from "react";

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.firstName + " " + this.props.lastName}</h1>;
  }
}

export default Welcome;

// TODO : DO NEXT TIME REACT.COMPONENT (API REFERENCE SECTION)
