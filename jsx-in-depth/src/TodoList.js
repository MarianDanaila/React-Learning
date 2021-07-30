import React from "react";

function Item(props) {
  return <li>{props.message}</li>;
}

function TodoList() {
  const todos = ["clean the room", "do nothing at work", "upset the bo$$"];
  return (
    <ul>
      {todos.map((message) => (
        <Item key={message} message={message} />
      ))}
    </ul>
  );
}

export default TodoList;
