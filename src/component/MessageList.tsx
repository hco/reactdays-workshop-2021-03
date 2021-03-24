import { Message } from "../domain/Message";
import React, { useEffect, useState } from "react";
import MessageView from "./MessageView";

export const MessageList: React.FunctionComponent = () => {
  const [messagesState, setMessagesState] = useState<Message[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setMessagesState((prevMessages) => {
        return [
          {
            author: "Marta",
            message: "Hier ist ein spannender Artikel!",
            date: 324,
            id: "4634",
          },
          ...prevMessages,
        ];
      });
    }, 1000);
  }, []);

  return (
    <div>
      {messagesState.map((message) => (
        <MessageView key={message.id} message={message} />
      ))}
    </div>
  );
};
