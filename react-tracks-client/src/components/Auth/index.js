import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import withRoot from "../../withRoot";
import Login from "./Login";
import Register from "./Register";

export default withRoot(({ history }) => {
  const [isLogin, setIsLogin] = useState(false);
  if (localStorage.getItem("authToken")) {
    return <Redirect to="/tracks" />;
  }
  return isLogin ? (
    <Login setIsLogin={setIsLogin} history={history} />
  ) : (
    <Register setIsLogin={setIsLogin} />
  );
});
