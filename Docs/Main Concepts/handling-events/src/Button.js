export default function Button() {
  return <button onClick={showDate}>Show Date</button>;
}

function showDate() {
  console.log(Date.now());
}
