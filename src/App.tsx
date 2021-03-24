import { MessageCompose } from "./component/MessageCompose";
import Counter from "./component/Counter";
import { Gitrepo } from "./component/Gitrepo";
import { GitrepoClass } from "./component/GitrepoClass";
import { MessageList } from "./component/MessageList";
import { useMessages } from "./hook/useMessages";

function App() {
  const { messages, addMessage } = useMessages();

  return (
    <>
      <h2>Hallo Pouria</h2>
      <Counter />
      <Gitrepo repoName="facebook/create-react-app" />
      <GitrepoClass repoName="facebook/create-react-app" />
      <MessageList messages={messages} />
      <MessageCompose onNewMessage={addMessage} />
    </>
  );
}

export const foo = "bar";

export default App;
