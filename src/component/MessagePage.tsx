import { MessageCompose } from "./MessageCompose";
import { MessageList } from "./MessageList";
import { useMessages } from "../hook/useMessages";

export const MessagePage = () => {
  const { messages, addMessage } = useMessages();

  return (
    <>
      <MessageList messages={messages} />
      <MessageCompose onNewMessage={addMessage} />
    </>
  );
};
