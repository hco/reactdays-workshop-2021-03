import React from "react";

interface Props {
  opinion: string;
  name: string;
}

export const MessageView: React.FunctionComponent<Props> = ({
  name,
  opinion,
}) => {
  return (
    <article>
      {opinion}
      <footer>{name}</footer>
    </article>
  );
};

export default MessageView;
