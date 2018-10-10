// Every reducer has to serve a new object. We don't mutate the existing state
// object. Instead create a new object and assign that with changed payload and
// previous state object.

export default function locationReducer(state = "Seattle, WA", action) {
  /* const newState = Object.assign({}, state, { location: action.payload });
  return newState; */
  if (action.type === "SET_LOCATION") {
    return action.payload;
  } else {
    return state;
  }
}
