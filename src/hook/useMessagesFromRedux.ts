import { useSelector, useDispatch } from "react-redux";
import { addMessage, getMessages } from "../redux/configureStore";
import { MessagesHookReturnValue } from "./useMessages";

export const useMessagesFromRedux = (): MessagesHookReturnValue => {
  const messages = useSelector(getMessages);
  const dispatch = useDispatch();

  return {
    messages,
    addMessage: (messageText: string) => {
      dispatch(addMessage(messageText));
    },
  };
};
