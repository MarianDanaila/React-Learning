import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const me = {
  firstName: "Marian",
  lastName: "Danaila",
};

function formatName(user) {
  return user.firstName + " " + user.lastName;
}
const color = "blue";

function greeting(user) {
  if (user) {
    return (
      <div>
        <h1 className="red">Hello, {formatName(user)}</h1>
        <br />
        <h2>Good to see you here</h2>
      </div>
    );
  }
  return <h1 className={color}>Hello, Stranger</h1>;
}

ReactDOM.render(greeting(me), document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// todo: JSX Represents Objects
