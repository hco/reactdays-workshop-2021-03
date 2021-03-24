import { Message } from "../domain/Message";
import React, { useEffect, useState } from "react";
import MessageView from "./MessageView";

interface Props {
  messages: Message[];
}

export const MessageList: React.FunctionComponent<Props> = ({ messages }) => {
  return (
    <div>
      {messages.map((message) => (
        <MessageView key={message.id} message={message} />
      ))}
    </div>
  );
};
