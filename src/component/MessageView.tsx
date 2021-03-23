interface Props {
  opinion: string;
  name: string;
}

export function MessageView({ name, opinion }: Props) {
  return (
    <article>
      {opinion}
      <footer>{name}</footer>
    </article>
  );
}

export default MessageView;
