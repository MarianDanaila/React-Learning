export default function Winner(props) {
  return (
    <div>
      <h1>{props.isWinner ? "Winner" : "Loser"}</h1>
    </div>
  );
}
