import React from "react";

const units = {
  c: "Celsius",
  f: "Fahrenheit",
};

export default class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const unit = this.props.unit;
    return (
      <fieldset>
        <legend>Enter temperature in {units[unit]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
