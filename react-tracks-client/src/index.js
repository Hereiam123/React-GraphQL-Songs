import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import { useQuery } from "@apollo/client";
import { IS_USER_LOGGED_IN } from "./sharedQueries";
import Auth from "./components/Auth";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

const cache = new InMemoryCache();

const httpLink = createUploadLink({
  uri: "http://localhost:1337/graphql/",
  headers: {
    authorization: localStorage.getItem("authToken")
      ? `JWT ${localStorage.getItem("authToken")}`
      : "",
  },
});

const client = new ApolloClient({
  link: httpLink,
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
