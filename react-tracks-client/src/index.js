import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import { useQuery } from "@apollo/client";
import { IS_USER_LOGGED_IN } from "./sharedQueries";
import Auth from "./components/Auth";
import * as serviceWorker from "./serviceWorker";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const cache = new InMemoryCache();
const httpLink = createHttpLink({
  uri: "http://localhost:8000/graphql/",
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("authToken");
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

cache.writeQuery({
  query: IS_USER_LOGGED_IN,
  data: {
    isLoggedIn: !!localStorage.getItem("authToken"),
  },
});

const AuthCheckComponent = (props) => {
  const { data } = useQuery(IS_USER_LOGGED_IN);
  return data.isLoggedIn ? <Root /> : props.children;
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <AuthCheckComponent>
      <Auth />
    </AuthCheckComponent>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
