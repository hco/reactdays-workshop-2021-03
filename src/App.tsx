import Counter from "./component/Counter";
import { Gitrepo } from "./component/Gitrepo";
import { GitrepoClass } from "./component/GitrepoClass";
import { MessagePage } from "./component/MessagePage";

function App() {
  return (
    <>
      <h2>Hallo Pouria</h2>
      <Counter />
      <Gitrepo repoName="facebook/create-react-app" />
      <GitrepoClass repoName="facebook/create-react-app" />
      <MessagePage />
      <MessagePage />
      <MessagePage />
    </>
  );
}

export const foo = "bar";

export default App;
