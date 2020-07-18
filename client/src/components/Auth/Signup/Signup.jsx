import React, { useState } from "react";
import { connect } from "react-redux";
import { userSignupAsync } from "../../../redux/actions/User/userSignupAsync";
import "./style.scss";

/**
 * Signup component (like a tab).
 * Connected with userSignup saga.
 *
 * @param {object} userSignup
 * @returns {JSX}
 */
const Signup = ({ userSignup }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerOnSubmit = (e) => {
    e.preventDefault();
    userSignup({ name, email, password });
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="signup">
      <form onSubmit={handlerOnSubmit}>
        <input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        {/* <input
          type="text"
          placeholder="Подтвердите пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /> */}
        <input type="submit" value="Отправить" />
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    userSignup: (user) => dispatch(userSignupAsync(user)),
  };
};

export default connect(null, mapDispatchToProps)(Signup);
