import "./App.css";
import LoginControl from "./LoginControl";
import Mailbox from "./Mailbox";
import Winner from "./Winner";
import Page from "./Page";

function App() {
  return (
    <div className="App">
      <LoginControl />
      <Mailbox unreadMessages={["message1", "message2"]} />
      <Winner isWinner={true} />
      <Page />
    </div>
  );
}

export default App;
