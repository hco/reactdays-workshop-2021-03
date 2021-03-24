import { Message } from "../domain/Message";
import React, { useEffect, useState } from "react";
import MessageView from "./MessageView";

export const MessageList: React.FunctionComponent = () => {
  const messages: Message[] = [
    {
      id: "213321",
      author: "Christoph",
      date: 123,
      message: "adsdas",
    },
    {
      id: "213325",
      author: "Patrick",
      date: 124,
      message: "adsdas",
    },
    {
      id: "213326",
      author: "Paul",
      date: 125,
      message: "adsdas",
    },
  ];

  const [messagesState, setMessagesState] = useState(messages);

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
