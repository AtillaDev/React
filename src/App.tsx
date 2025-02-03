import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "London", "Tokyo", "Sofia"];

  return (
    <>
      <ListGroup items={items} heading="Cities" />
    </>
  );
}

export default App;
