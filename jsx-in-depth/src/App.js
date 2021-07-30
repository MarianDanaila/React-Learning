import "./App.css";
import MyComponent from "./MyComponent";
import NumberDescriber from "./NumberDescriber";
import BlueColorPicker from "./BlueColorPicker";
import HelloWorld from "./HelloWorld";
import Story from "./Story";
import MyTextBox from "./MyTextBox";
import Greeting from "./Greeting";
import ModifiedGreeting from "./ModifiedGreeting";
import Children from "./Children";
import Header from "./Header";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import Array from "./Array";
import TodoList from "./TodoList";
import ListOfTenThings from "./ListOfTenThings";
import IgnoredChildren from "./IgnoredChildren";

function App() {
  const props = { firstName: "Marian", lastName: "Danaila" };
  return (
    <div>
      <BlueColorPicker />
      <HelloWorld />
      <Story storyType="video" />
      <MyComponent value={1 + 2 + 3 + 4} />
      <NumberDescriber number="2" />
      <MyTextBox autocomplete={false} />
      <Greeting firstName="Ben" lastName="Hector" />
      <Greeting {...props} />
      <ModifiedGreeting name="Mar" age={20} job="student" />
      <Children name="Marian">Hello</Children>
      <Header>
        <Navigation />
        <SearchBar />
      </Header>
      <Array />
      <TodoList />
      <ListOfTenThings />
      <IgnoredChildren>{true}</IgnoredChildren>
    </div>
  );
}

export default App;
