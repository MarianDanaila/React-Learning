export default function Focus() {
  return (
    <input
      placeholder="click this input."
      onFocus={(e) => {
        console.log("Focused on input");
      }}
    />
  );
}
