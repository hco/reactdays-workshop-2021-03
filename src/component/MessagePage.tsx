import { MessageCompose } from "./MessageCompose";
import { MessageList } from "./MessageList";
// import { useMessagesFromServer } from "../hook/useMessagesFromServer";
// import { useMessages } from "../hook/useMessages";
import { useMessagesFromRedux } from "../hook/useMessagesFromRedux";
import { useDispatch } from "react-redux";
import { fetchMessagesFromServer } from "../redux/configureStore";
import { useEffect } from "react";

export const MessagePage = () => {
  const { messages, addMessage } = useMessagesFromRedux();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("effect");
    dispatch(fetchMessagesFromServer());
  }, [dispatch]);

  return (
    <>
      <MessageList messages={messages} />
      <MessageCompose onNewMessage={addMessage} />
    </>
  );
};
