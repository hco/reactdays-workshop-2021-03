import MessageView from "./component/MessageView";

function App() {
  const city = "Witten";

  return (
    <>
      <h2>Hallo Pouria</h2>
      <MessageView opinion="Ich mag React!" name={`Christian aus ${city}`} />
      <MessageView opinion="Ich finde React komisch!" />
    </>
  );
}

export const foo = "bar";

export default App;
