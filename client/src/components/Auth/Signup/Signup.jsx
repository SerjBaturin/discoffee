import React, { useState } from "react";
import API from "../../../API";
import "./style.scss";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerOnSubmit = (e) => {
    e.preventDefault();
    API.signup
      .post("/users/signup", { email, password })
      .then((d) => d)
      .catch((err) => err);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="signup">
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

export default Signup;
