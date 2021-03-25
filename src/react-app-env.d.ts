/// <reference types="react-scripts" />

import { compose } from "redux";

// If the redux devtools are installed, they add a property to window.
// This property is optional, but in order to avoid typescript errors,
// it is required to define it here.
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
