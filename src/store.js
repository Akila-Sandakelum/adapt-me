import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

// compose let us to add multiple thinds at once
// applyMiddleware let us do asynchronous actions with redux
const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    typeof window === "object" &&
    typeof window.devToolsExtension === "undefined"
      ? window.devToolsExtension()
      : f => f
  )
);

export default store;
