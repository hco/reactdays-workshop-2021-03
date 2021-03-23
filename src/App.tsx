import { MessageCompose } from "./component/MessageCompose";
import MessageView from "./component/MessageView";
import Counter from "./component/Counter";
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
      <Counter />
      <MessageView message={message} />

      <MessageCompose />
    </>
  );
}

export const foo = "bar";

export default App;
