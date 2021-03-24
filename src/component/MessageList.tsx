import { Message } from "../domain/Message";
import React from "react";
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

  return (
    <div>
      {messages.map((message) => (
        <MessageView key={message.id} message={message} />
      ))}
    </div>
  );
};
