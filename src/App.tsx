import { Provider } from "react-redux";
import Counter from "./component/Counter";
import { Gitrepo } from "./component/Gitrepo";
import { GitrepoClass } from "./component/GitrepoClass";
import { MessagePage } from "./component/MessagePage";
import { configureStore } from "./redux/configureStore";
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <h2>Hallo Pouria</h2>
      <Counter />
      <Gitrepo repoName="facebook/create-react-app" />
      <GitrepoClass repoName="facebook/create-react-app" />
      <MessagePage />
      <MessagePage />
      <MessagePage />
    </Provider>
  );
}

export const foo = "bar";

export default App;
