import { createStore } from "redux";
import { Message } from "../domain/Message";

export interface ApplicationState {
  messages: Message[];
}

const initialState: ApplicationState = {
  messages: [],
};

const reducer = (
  state: ApplicationState = initialState,
  action: any
): ApplicationState => {
  switch (action.type) {
    case "Message/Added":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};

export const configureStore = () => {
  return createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  );
};
