import ListItem from "./ListItem";

export default function ListItems(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) => (
        <ListItem
          key={number.toString()}
          id={number.toString()}
          value={number}
        />
      ))}
    </ul>
  );
}
