import ReactDOM from "react-dom";
import App, { foo } from "./App";
import { Message } from "./domain/Message";
console.log(foo);

ReactDOM.render(<App />, document.getElementById("root"));
// const message: Pick<Message, Exclude<keyof Message, "id">> = {

type UnsavedMessage = Omit<Message, "id">;

const message: UnsavedMessage = {
  message: "dasdsa",
  author: "as",
  date: 213,
};
