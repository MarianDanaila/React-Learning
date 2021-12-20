import React from "react";
import TemperatureInput from "./TemperatureInput";
import { toCelsius, toFahrenheit, tryConvert } from "./conversionFunctions";
import BoillingVerdict from "./BoilingVerdict";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: "", unit: "c" };
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange(temperature) {
    this.setState({ unit: "c", temperature: temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ unit: "f", temperature: temperature });
  }

  render() {
    const unit = this.state.unit;
    const temperature = this.state.temperature;
    const celsius =
      unit === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      unit === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          unit="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          unit="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoillingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
