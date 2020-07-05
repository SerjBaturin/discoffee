import React from "react";
import "./style.scss";
import Button from "../../common/Button";
import { s } from "../../common/Button/buttonStyles";

const handlerClick = () => console.log("FROM G");

const Landing = () => {
  return (
    <div className="landing">
      <section className="landing__utp">
        <div className="container">
          <h1>Сервис (система?) лояльности для клиентов</h1>
          <ul>
            <li>управляй бонусами и скидками</li>
            <li>всего за 100 рублей в месяц</li>
            <li>дари радость людям</li>
            <li>не сдохни от счастья</li>
            <li></li>
          </ul>
          <Button
            styles={s.landing}
            name="РЕГИСТРАЦИЯ"
            handler={handlerClick}
          />
        </div>
      </section>

      <section className="landing__price">
        <div className="container">
          <h2>Сколько это стоит</h2>
          <div className="landing__price__cards">
            <div className="landing__price__cards__card">
              <h3>Бесплатно</h3>
              <ul>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
              </ul>
              <Button styles={s.default} name="далее" />
            </div>
            <div className="landing__price__cards__card">
              <h3>Стандарт</h3>
              <ul>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
              </ul>
              <Button styles={s.default} name="далее" />
            </div>
            <div className="landing__price__cards__card">
              <h3>Бизнес</h3>
              <ul>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
              </ul>
              <Button styles={s.default} name="далее" />
            </div>
          </div>
        </div>
      </section>

      <section className="landing__how">
        <div className="container">
          <h2>Как это работает</h2>
        </div>
      </section>
    </div>
  );
};

export default Landing;
