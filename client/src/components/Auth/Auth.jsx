import React, { useState } from "react";

import "./style.scss";
import Signin from "./Signin";
import Signup from "./Signup";

/**
 * Auth component.
 * Wrapper Signin & Signup components (tabs)
 * with switch logic.
 *
 * @returns {JSX} Auth component
 */
const Auth = () => {
  const [signin, setSign] = useState(false);
  return (
    <div className="auth">
      <span className="auth__tabs" onClick={() => setSign(false)}>
        Регистрация
      </span>
      <span className="auth__tabs" onClick={() => setSign(true)}>
        Вход
      </span>
      {signin === false ? <Signup /> : <Signin />}
    </div>
  );
};

export default Auth;
