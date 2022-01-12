import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ME_QUERY } from "../../sharedQueries";
import withRoot from "../../withRoot";
import Login from "./Login";
import Register from "./Register";
import Loading from "./Loading";
import Error from "./Error";

export default withRoot(({ history }) => {
  const [isLogin, setIsLogin] = useState(false);
  const { loading, error, data } = useQuery(GET_ME_QUERY, {
    fetchPolicy: "cache-and-network",
  });
  if (loading) return <Loading />;
  if (error) {
    return <Error error={error.toString()} />;
  }
  if (data) {
    return <Redirect to="/tracks" />;
  }
  return isLogin ? (
    <Login setIsLogin={setIsLogin} history={history} />
  ) : (
    <Register setIsLogin={setIsLogin} />
  );
});
