import { useState } from "react";
import Counter from "./Counter";

interface Props {
  onNewMessage: (messageText: string) => void;
}

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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {inputValue} <br />
        <input onChange={handleChange} value={inputValue} />
        <button type="submit">Send Message!</button>
      </form>
      <Counter />
    </div>
  );
};
