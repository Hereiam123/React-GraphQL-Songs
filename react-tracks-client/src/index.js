import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";
import App from "./pages/App";
import Auth from "./components/Auth";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/Shared/ProtectedRoute";
import NotFound from "./pages/NotFound";

const cache = new InMemoryCache();

const httpLink = createUploadLink({
  uri:
    process.env.NODE_ENV === "production"
      ? "https://api.reactsongs.com/graphql/"
      : "http://127.0.0.1:1337/graphql/",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("authToken");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
        <Switch>
          <Route path="/" exact component={Auth} />
          <ProtectedRoute path="/tracks" exact component={App} />
          <ProtectedRoute path="/profile/:id" component={Profile} />
          <Route component={NotFound} />
        </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
