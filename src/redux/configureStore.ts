import { Action, applyMiddleware, compose, createStore } from "redux";
import { persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
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

// Selector
export const getMessages = (state: ApplicationState): Message[] => {
  return state.messages;
};

// Action Creator
export const fetchMessagesFromServer = () => {
  return (dispatch: any) => {
    fetch("http://localhost:4712/messages")
      .then((response) => response.json())
      .then((messagesFromServer: Message[]) => {
        messagesFromServer.forEach((message) => {
          console.log("dspatch");
          dispatch({
            type: "Message/Added",
            payload: message,
          });
        });
      });
  };
};

export const addMessage = (messageText: string): MessageAddedAction => {
  return {
    type: "Message/Added",
    payload: {
      author: "Marko",
      message: messageText,
      id: `${Date.now()}`,
      date: Date.now(),
    },
  };
};

export const reducer = (
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
        messages: [action.payload, ...state.messages],
      };
    default:
      return state;
  }
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = () => {
  return createStore(
    persistReducer(
      {
        storage: localStorage,
        key: "redux-persist",
        blacklist: ["messages"],
      },
      reducer
    ),
    composeEnhancer(applyMiddleware(thunk))
  );
};
