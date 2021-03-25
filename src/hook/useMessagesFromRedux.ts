import { useSelector } from "react-redux";
import { MessagesHookReturnValue } from "./useMessages";

export const useMessagesFromRedux = (): MessagesHookReturnValue => {
  const messages = useSelector((state: any) => state.messages);

  return {
    messages,
    addMessage: () => {},
  };
};
