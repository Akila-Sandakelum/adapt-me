import React from "react";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import Loadable from "react-loadable";
import NavBar from "./NavBar";
import store from "./store";

const LoadableDetails = Loadable({
  loader: () => import("./Details"),
  loading() {
    return <h1> loading split up code...</h1>;
  }
});

const LoadableResults = Loadable({
  loader: () => import("./Results"),
  loading() {
    return <h1> loading split up code...</h1>;
  }
});

const LoadableSearchParams = Loadable({
  loader: () => import("./SearchParams"),
  loading() {
    return <h1> loading split up code...</h1>;
  }
});

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Provider store={store}>
          <Router>
            <LoadableResults path="/" />
            <LoadableDetails path="/details/:id" />
            <LoadableSearchParams path="/search-params" />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
