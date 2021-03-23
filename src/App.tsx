import MessageView from "./component/MessageView";

function App() {
  const city = "Witten";

  return (
    <>
      <h2>Hallo Pouria</h2>
      <MessageView
        message={{
          author: "Patrick",
        }}
      />
    </>
  );
}

export const foo = "bar";

export default App;
