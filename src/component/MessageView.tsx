import React from "react";

interface Props {
  opinion: string;
  name?: string;
}

export const MessageView: React.FunctionComponent<Props> = ({
  name,
  opinion,
}) => {
  if (!name) {
    return <article>{opinion}</article>;
  }

  return (
    <article>
      {opinion}
      <footer>{name.toUpperCase()}</footer>
    </article>
  );
};

export default MessageView;
