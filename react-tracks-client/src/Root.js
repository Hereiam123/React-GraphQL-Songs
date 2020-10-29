import React from "react";
import withRoot from "./withRoot";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import App from "./pages/App";
import Profile from "./pages/Profile";
import Header from "./components/Shared/Header";
import Loading from "./components/Shared/Loading";
import Error from "./components/Shared/Error";
import { GET_ME_QUERY } from "./sharedQueries";

export const UserContext = React.createContext();

const Root = () => {
  const { loading, error, data } = useQuery(GET_ME_QUERY, {
    fetchPolicy: "cache-and-network",
  });
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <Router>
      <UserContext.Provider value={data.me}>
        <Header currentUser={data.me} />
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/profile/:id" component={Profile} />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
};

export default withRoot(Root);
