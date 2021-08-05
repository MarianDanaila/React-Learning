import "./App.css";
import Clock from "./Clock";
import ClassComponent from "./ClassComponent";
import UnmutableState from "./UnmutableState";
import Increment from "./Increment";
import MergedStateUpdates from "./MergedStateUpdates";

function App() {
  return (
    <div>
      <ClassComponent />
      <Clock />
      <UnmutableState value={10} />
      <Increment />
      <MergedStateUpdates />
    </div>
  );
}

export default App;
