import React from "react";
import "./style.scss";
import Button from "../../common/Button";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing__utp">
        <h1>Программа лояльности для клиентов</h1>
        <ul>
          <li>управляй бонусами и скидками</li>
          <li>дари радость людям</li>
          <li>жги, со всей силы</li>
          <li></li>
        </ul>
        <Button name="РЕГИСТРАЦИЯ" />
      </div>
    </div>
  );
};

export default Landing;
