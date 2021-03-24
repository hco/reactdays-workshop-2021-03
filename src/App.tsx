import { MessageCompose } from "./component/MessageCompose";
import MessageView from "./component/MessageView";
import Counter from "./component/Counter";
import { Message } from "./domain/Message";
import { Gitrepo } from "./component/Gitrepo";
import { GitrepoClass } from "./component/GitrepoClass";

function App() {
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
      <Gitrepo repoName="facebook/create-react-app" />
      <GitrepoClass repoName="facebook/create-react-app" />
      <MessageCompose />
    </>
  );
}

export const foo = "bar";

export default App;
