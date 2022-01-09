import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ME_QUERY } from "./sharedQueries";
import Loading from "./components/Shared/Loading";
import Error from "./components/Shared/Error";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  let isAuthenticated = false;
  const { loading, error, data } = useQuery(GET_ME_QUERY, {
    fetchPolicy: "cache-and-network",
  });
  if (loading) return <Loading />;
  if (error) {
      return <Error error={error.toString()} />;
  }
  isAuthenticated = true;

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default ProtectedRoute;
