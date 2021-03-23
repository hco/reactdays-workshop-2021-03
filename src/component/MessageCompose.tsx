export const MessageCompose: React.FunctionComponent = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("Message was sent");
  };
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Send Message!</button>
    </form>
  );
};
