import { MessageCompose } from "./component/MessageCompose";
import MessageView from "./component/MessageView";
import Counter from "./component/Counter";
import { Message } from "./domain/Message";
import { Gitrepo } from "./component/Gitrepo";
import { GitrepoClass } from "./component/GitrepoClass";
import { MessageList } from "./component/MessageList";
import { useEffect, useState } from "react";

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const message: Message = {
    author: "Christian",
    date: 1234,
    message: "Hallo Welt!",
    id: "sdajudajs",
  };

  const handleMessage = (messageText: string) => {
    console.log("App bekommt den messageText: " + messageText);
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: `${Date.now()}`,
        message: messageText,
        date: Date.now(),
        author: "Christian",
      },
    ]);
  };

  return (
    <>
      <h2>Hallo Pouria</h2>
      <Counter />
      <MessageView message={message} />
      <Gitrepo repoName="facebook/create-react-app" />
      <GitrepoClass repoName="facebook/create-react-app" />
      <MessageList messages={messages} />
      <MessageCompose onNewMessage={handleMessage} />
    </>
  );
}

export const foo = "bar";

export default App;
