import React, { useState } from "react";
import withRoot from "../../withRoot";
import Login from "./Login";
import Register from "./Register";

export default withRoot(({ history }) => {
  const [isLogin, setIsLogin] = useState(false);
  return isLogin ? (
    <Login setIsLogin={setIsLogin} history={history} />
  ) : (
    <Register setIsLogin={setIsLogin} />
  );
});
