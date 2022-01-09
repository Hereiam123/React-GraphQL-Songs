import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ME_QUERY } from "../../sharedQueries";
import Loading from "./Loading";
import Error from "./Error";
import Header from "./Header";
export const UserContext = React.createContext();

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const { loading, error, data } = useQuery(GET_ME_QUERY, {
    fetchPolicy: "cache-and-network",
  });
  if (loading) return <Loading />;
  if (error) {
    console.log(error.toString());
    if (error.toString() === "Error: Not logged in!") {
      return <Redirect to="/" />;
    } else {
      return <Error error={error.toString()} />;
    }
  }
  return (
    <UserContext.Provider value={data.me}>
      <Route
        {...restOfProps}
        render={(props) => (
          <Header currentUser={data.me}>
            <Component {...props} />{" "}
          </Header>
        )}
      />
    </UserContext.Provider>
  );
}

export default ProtectedRoute;
