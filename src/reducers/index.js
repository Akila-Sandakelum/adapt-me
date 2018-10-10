import { combineReducers } from "redux";
import location from "./location";
import animal from "./animal";
import breed from "./breed";
import breeds from "./breeds";

// root reducer catches actions and delegates them to
// other/child reducers. That is the only things that it does.

/* 
state = { location: "Seattle, WA" }
action = { type: "SET_LOCATION", payload: "San Francisco, CA" }
*/
/* const rootReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOCATION":
      return location(state, action);
  }
}; */

// generate a function that calls the child reducers with the slices of state
// selected according to their keys, and combines their results into a single object again
export default combineReducers({
  location,
  animal,
  breed,
  breeds
});
