import React, { useState } from "react";
import { connect } from "react-redux";
import { userSigninAsync } from "../../../redux/actions/User/userSigninAsync";
import "./style.scss";

/**
 * Signin component (like a tab).
 * Connected with userSignin saga.
 *
 * @param {object} userSignin
 * @returns {JSX}
 */
const Signin = ({ userSignin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerOnSubmit = (e) => {
    e.preventDefault();
    userSignin({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="signin">
      <form onSubmit={handlerOnSubmit}>
        <input
          type="text"
          placeholder="Почта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" value="Отправить" />
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    userSignin: (user) => dispatch(userSigninAsync(user)),
  };
};

export default connect(null, mapDispatchToProps)(Signin);
