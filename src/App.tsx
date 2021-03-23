import MessageView from "./component/MessageView";
import { Message } from "./domain/Message";

function App() {
  const city = "Witten";
  const message: Message = {
    author: "Christian",
    date: 1234,
    message: "Hallo Welt!",
    id: "sdajudajs",
  };

  return (
    <>
      <h2>Hallo Pouria</h2>
      <MessageView message={message} />
    </>
  );
}

export const foo = "bar";

export default App;
