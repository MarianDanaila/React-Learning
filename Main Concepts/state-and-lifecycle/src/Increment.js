import React from "react";

class Increment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.incrementValue = this.incrementValue.bind(this);
  }

  incrementValue() {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.incrementValue}>Increment</button>
        {this.state.value}
      </div>
    );
  }
}

export default Increment;
