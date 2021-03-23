import React from "react";
import { Message as MessageType } from "../domain/Message";

interface Props {
  message: MessageType;
}

export const Message: React.FunctionComponent<Props> = ({ message }) => {
  return (
    <article>
      {message.message}
      <footer>{message.author.toUpperCase()}</footer>
    </article>
  );
};

export default Message;
