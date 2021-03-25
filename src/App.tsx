import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import Counter from "./component/Counter";
import { Gitrepo } from "./component/Gitrepo";
import { GitrepoClass } from "./component/GitrepoClass";
import { MessagePage } from "./component/MessagePage";
import { configureStore } from "./redux/configureStore";
const store = configureStore();
const persistor = persistStore(store);

function App() {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <h2>Hallo Pouria</h2>
        <Counter />
        <Gitrepo repoName="facebook/create-react-app" />
        <GitrepoClass repoName="facebook/create-react-app" />
        <MessagePage />
        <MessagePage />
        <MessagePage />
      </Provider>
    </PersistGate>
  );
}

export const foo = "bar";

export default App;
