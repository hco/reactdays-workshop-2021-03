import { MessageCompose } from "./MessageCompose";
import { MessageList } from "./MessageList";
// import { useMessagesFromServer } from "../hook/useMessagesFromServer";
// import { useMessages } from "../hook/useMessages";
import { useMessagesFromRedux } from "../hook/useMessagesFromRedux";

export const MessagePage = () => {
  const { messages, addMessage } = useMessagesFromRedux();

  return (
    <>
      <MessageList messages={messages} />
      <MessageCompose onNewMessage={addMessage} />
    </>
  );
};
