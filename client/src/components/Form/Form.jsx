import React, { useState } from "react";
import axios from "axios";
import "./style.scss";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [passwordConfirm, setPasswordConfirm] = useState("");

  const handlerOnSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/users/add", { email, password })
      .then((d) => d)
      .catch((err) => err);
    setEmail("");
    setPassword("");
    // setPasswordConfirm("");
  };

  return (
    <div className="registration-form__wrapper">
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
        {/* <input
          type="text"
          placeholder="Пароль ещё раз"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        /> */}
        <input type="submit" value="Отправить" />
      </form>
    </div>
  );
};

export default Form;
