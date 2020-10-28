import React, { useState } from "react";

import withRoot from "../../withRoot";
import Login from "./Login";
import Register from "./Register";
import Signout from "./Signout";

export default withRoot(() => {
  const [isLogin, setIsLogin] = useState(false);
  return isLogin ? (
    <Login setIsLogin={setIsLogin} />
  ) : (
    <Register setIsLogin={setIsLogin} />
  );
});
