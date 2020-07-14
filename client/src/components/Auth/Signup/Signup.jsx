import React, { useState } from "react";
import "./style.scss";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerOnSubmit = (e) => {
    e.preventDefault();
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
        <input
          type="text"
          placeholder="Подтвердите пароль"
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
