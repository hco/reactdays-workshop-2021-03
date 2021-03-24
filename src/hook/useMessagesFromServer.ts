import { useEffect, useState } from "react";
import { Message } from "../domain/Message";
import { MessagesHookReturnValue } from "./useMessages";
// $ http POST http://localhost:4712/messages author=Paul message="Hallo"
export const useMessagesFromServer = (): MessagesHookReturnValue => {
  const [messages, setMessages] = useState<Message[]>([]);
  const fetchMessagesFromServer = () => {
    fetch("http://localhost:4712/messages")
      .then((response) => response.json())
      .then((messagesFromServer) => {
        setMessages(messagesFromServer);
      });
  };

  useEffect(() => {
    fetchMessagesFromServer();
    setInterval(fetchMessagesFromServer, 3000);
  }, []);

  return {
    messages,
    addMessage: (message) => {
      const messageObject: Message = {
        id: `${Date.now()}`,
        message: message,
        date: Date.now(),
        author: "Christian",
      };

      fetch("http://localhost:4712/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageObject),
      }).finally(fetchMessagesFromServer);

      setMessages((prevMessages) => [...prevMessages, messageObject]);
    },
  };
};
