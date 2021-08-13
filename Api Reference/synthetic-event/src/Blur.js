export default function Blur() {
  return (
    <input
      placeholder="click this input and then click outside of it"
      onBlur={(e) => {
        console.log("Triggered because this input lost focus");
      }}
    />
  );
}
