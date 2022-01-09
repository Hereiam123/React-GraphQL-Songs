import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ME_QUERY } from "../../sharedQueries";
import Loading from "./Loading";
import Error from "./Error";
import Root from "../../Root";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const { loading, error, data } = useQuery(GET_ME_QUERY, {
    fetchPolicy: "cache-and-network",
  });
  if (loading) return <Loading />;
  if (error) {
    console.log(error.toString());
    if (error.toString() === "Error: Not logged in!") {
      return <Redirect to="/signin" />;
    } else {
      return <Error error={error.toString()} />;
    }
  }
  return (
      <Route
        {...restOfProps}
        render={() => (
          <Root data={data}/>
        )}
      />
  );
}

export default ProtectedRoute;
