import React from "react";
import withRoot from "./withRoot";
import { Switch, Route } from "react-router-dom";
import App from "./pages/App";
import Profile from "./pages/Profile";
import Header from "./components/Shared/Header";
export const UserContext = React.createContext();

const Root = ({ data }) => {
  return (
    <UserContext.Provider value={data.me}>
      <Header currentUser={data.me} />
      <Switch>
        <Route path="/tracks" exact component={App} />
        <Route path="/profile/:id" component={Profile} />
      </Switch>
    </UserContext.Provider>
  );
};

export default withRoot(Root);
