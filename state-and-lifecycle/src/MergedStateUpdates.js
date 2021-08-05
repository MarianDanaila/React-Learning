import React from "react";

class MergedStateUpdates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: [],
      comment: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos/1")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          photo: json,
        });
      });

    fetch("https://jsonplaceholder.typicode.com/comments/1")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          comment: json,
        });
      });
  }

  render() {
    return (
      <div>
        <img src={this.state.photo.url} alt="green" />
        <h3>{this.state.comment.name}</h3>
      </div>
    );
  }
}

export default MergedStateUpdates;
