import ListItems from "./ListItems";
import Blog from "./Blog";

function App() {
  const posts = [
    { id: 1, title: "Hello world", content: "Welcome to learning React!" },
    {
      id: 2,
      title: "Installation",
      content: "You can install React from npm.",
    },
  ];
  return (
    <div>
      <ListItems numbers={[1, 2, 3, 4, 5]} />
      <Blog posts={posts} />
    </div>
  );
}

export default App;
