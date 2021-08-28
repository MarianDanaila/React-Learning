import React from "react";

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueInput: "",
      valueTextarea: "",
      valueSelect: "football",
      valueCheckbox: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
    this.setState({
      valueInput: "",
      valueTextarea: "",
      valueSelect: "football",
      valueCheckbox: false,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            name="valueInput"
            type="text"
            value={this.state.valueInput}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Are you a powerlifter?
          <input
            name="valueCheckbox"
            type="checkbox"
            checked={this.state.valueCheckbox}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Essay:
          <textarea
            name="valueTextarea"
            value={this.state.valueTextarea}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Pick your favorite sport
          <select
            name="valueSelect"
            value={this.state.valueSelect}
            onChange={this.handleChange}
          >
            <option value="tennis">Tennis</option>
            <option value="football">Football</option>
            <option value="golf">Golf</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
