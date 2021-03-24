import { useState } from "react";
import { Message } from "../domain/Message";

export interface MessagesHookReturnValue {
  messages: Message[];
  addMessage: (message: string) => void;
}

export const useMessages = (): MessagesHookReturnValue => {
  const [messages, setMessages] = useState<Message[]>([]);

  return {
    messages: messages,
    addMessage: (message) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: `${Date.now()}`,
          message: message,
          date: Date.now(),
          author: "Christian",
        },
      ]);
    },
  };
};
