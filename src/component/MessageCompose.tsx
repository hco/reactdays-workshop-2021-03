import { useState } from "react";
import Counter from "./Counter";

export const MessageCompose: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("Message was sent");
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {inputValue} <br />
        <input onChange={handleChange} />
        <button type="submit">Send Message!</button>
      </form>
      <Counter />
    </div>
  );
};
