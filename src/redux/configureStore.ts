import { Action, createStore } from "redux";
import { Message } from "../domain/Message";

export interface ApplicationState {
  messages: Message[];
}

const initialState: ApplicationState = {
  messages: [],
};

interface MessageAddedAction extends Action<"Message/Added"> {
  payload: Message;
}

type ApplicationAction = MessageAddedAction | Action<"@@Init">;

const reducer = (
  state: ApplicationState = initialState,
  action: ApplicationAction
): ApplicationState => {
  // TypeError: Cannot read property 'author' of undefined
  // console.log(action.payload.author);
  // console.log(action);

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
