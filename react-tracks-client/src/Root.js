import React from "react";
import withRoot from "./withRoot";
import { Switch, Route, Redirect } from "react-router-dom";
import App from "./pages/App";
import Profile from "./pages/Profile";
import Header from "./components/Shared/Header";
import NotFound from "./pages/NotFound";
export const UserContext = React.createContext();

const Root = ({ data }) => {
  return (
    <UserContext.Provider value={data.me}>
      <Header currentUser={data.me} />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/tracks" />
        </Route>
        <Route path="/tracks" exact component={App} />
        <Route path="/profile/:id" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </UserContext.Provider>
  );
};

export default withRoot(Root);
