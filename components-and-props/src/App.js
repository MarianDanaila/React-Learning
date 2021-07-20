import logo from "./logo.svg";
import "./App.css";
import Welcome from "./Welcome";
import Comment from "./Comment";

function App() {
  return (
    <div>
      <Welcome firstName="Marian" lastName="Danaila" />
      <Welcome firstName="Alin" lastName="Anghel" />
      <Welcome firstName="George" lastName="Blanar" />
      <Comment
        author={{
          name: "Lucian Blaga",
          avatarUrl: "https://placekitten.com/g/64/64",
        }}
        text="Poezie poezie, puta mea e de hartie"
        date={new Date()}
      />
    </div>
  );
}

export default App;
