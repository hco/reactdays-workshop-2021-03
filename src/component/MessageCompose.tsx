import { useState } from "react";
import styled, { css } from "styled-components";
import { Button } from "./Button";
interface Props {
  onNewMessage: (messageText: string) => void;
}

const NewMessageInput = styled.input`
  background: red;

  ${(props) => {
    // @ts-expect-error
    if (props.isfunny === "false")
      return css`
        background: green;
      `;
  }}
`;

export const MessageCompose: React.FunctionComponent<Props> = ({
  onNewMessage,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onNewMessage(inputValue);
    setInputValue("");
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const helper = (
    <NewMessageInput
      onChange={handleChange}
      value={inputValue}
      // @ts-ignore
      isfunny="true"
    />
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {inputValue} <br />
        {helper}
        <Button type="submit">Send Message!</Button>
      </form>
    </div>
  );
};
