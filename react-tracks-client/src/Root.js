import React from "react";
import withRoot from "./withRoot";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import App from "./pages/App";
import Profile from "./pages/Profile";
import Header from "./components/Shared/Header";

const Root = () => {
  const { loading, error, data } = useQuery(GET_ME_QUERY);
  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  return (
    <Router>
      <Header currentUser={data.me} />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/profile/:id" component={Profile} />
      </Switch>
    </Router>
  );
};

const GET_TRACKS_QUERY = gql`
  {
    tracks {
      id
      title
      description
      url
    }
  }
`;

const GET_ME_QUERY = gql`
  {
    me {
      id
      username
      email
    }
  }
`;

export default withRoot(Root);
