import { render } from "@testing-library/react";
import { Message } from "../domain/Message";
import MessageView from "./MessageView";

const testMessage: Message = {
  author: "Moritz",
  message: "Hallo Jest!",
  date: 132,
  id: "asdjsjasdjadsjia1",
};

describe("<MessageView />", () => {
  test("renders without crash", () => {
    render(<MessageView message={testMessage} />);
  });

  test("renders the message text on the screen", async () => {
    const { queryByText } = render(<MessageView message={testMessage} />);
    expect(queryByText("Hallo Jest!")).not.toBeNull();
  });

  test("renders the author name on the screen", async () => {
    const { queryByText } = render(<MessageView message={testMessage} />);
    expect(queryByText("moritz")).not.toBeNull();
  });
  test("renders according to snapshot", () => {
    const { container } = render(<MessageView message={testMessage} />);

    expect(container).toMatchSnapshot();
  });
});
