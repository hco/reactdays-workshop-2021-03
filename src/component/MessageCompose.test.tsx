import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MessageCompose } from "./MessageCompose";

describe("<MessageCompose />", () => {
  test("should render without crashing", () => {
    render(<MessageCompose onNewMessage={() => {}} />);
  });

  test("when typing a message it should be in the input field", () => {
    const { getByRole } = render(<MessageCompose onNewMessage={() => {}} />);
    const input = getByRole("textbox");

    userEvent.type(input, "Hallo Kim!");

    expect(input).toHaveValue("Hallo Kim!");
  });

  test("when typing and submitting, the onMessage event should be called", () => {
    const handleNewMessageMock = jest.fn();

    const { getByRole } = render(
      <MessageCompose onNewMessage={handleNewMessageMock} />
    );
    const input = getByRole("textbox");
    const button = getByRole("button");

    userEvent.type(input, "Hallo Kim!");
    userEvent.click(button);

    expect(handleNewMessageMock).toHaveBeenCalled();
    expect(handleNewMessageMock).toHaveBeenCalledWith("Hallo Kim!");
    expect(handleNewMessageMock).toBeCalledTimes(1);
  });
});
