import React, { useState } from "react";
import "./style.scss";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handlerOnSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, passwordConfirm);
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
  };

  return (
    <div className="form_registration">
      <form onSubmit={handlerOnSubmit}>
        <input
          type="text"
          placeholder="Почта"
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Пароль"
          defaultValue={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Пароль ещё раз"
          defaultValue={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <input type="submit" value="Отправить" />
      </form>
    </div>
  );
};

export default Form;
