import React from "react";

class UnmutableState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propsValue: props.value,
    };
  }

  componentDidMount() {
    // this will simply not work because we need to use setState to modify the state
    this.state.propsValue = 11;
  }

  render() {
    return <h1>{this.state.propsValue}</h1>;
  }
}

export default UnmutableState;
