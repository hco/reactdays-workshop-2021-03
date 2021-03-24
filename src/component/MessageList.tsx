import { Message } from "../domain/Message";
import React from "react";

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

  const listItems = messages.map((message) => (
    <li key={message.id}>
      {message.message} von {message.author}
    </li>
  ));

  console.log(
    messages.map((message) => {
      return {
        id: message.id,
      };
    })
  );

  console.log(messages.map(({ id }) => ({ id })));

  return <ul>{listItems}</ul>;
};
