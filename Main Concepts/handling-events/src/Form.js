export default function Form() {
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

function handleSubmit(e) {
  e.preventDefault();
  console.log("You clicked submit.");
}
