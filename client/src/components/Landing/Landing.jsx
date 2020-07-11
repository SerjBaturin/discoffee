import React from "react";
import { connect } from "react-redux";
import "./style.scss";
import Button from "../../common/Button";
import { s } from "../../common/Button/buttonStyles";
import Form from "../Form";

const Landing = ({ sagaCounter, handlerClick }) => {
  return (
    <div className="landing">
      <section className="landing__utp">
        <div className="container">
          <div className="landing__utp__wrapper">
            <div className="landing__utp__wrapper__utp">
              <h1>
                Бонусная система DisCoffee
                <br /> - всегда лояльные клиенты
              </h1>
              <ul>
                <li>подходит для сетей и отдельных кафе</li>
                <li>чат-бот в WhatsApp и Telegram</li>
                <li>есть бесплатный вариант</li>
                <li>нет привязки к карте</li>
              </ul>
            </div>
            <div className="landing__utp__wrapper__form">
              <Form />
            </div>
          </div>
        </div>
      </section>

      <section className="landing__price">
        <div className="container">
          <h2>Сколько это стоит</h2>
          <div className="landing__price__cards">
            <div className="landing__price__cards__card">
              <h3>Бесплатно</h3>
              <ul>
                <li>Одна точка</li>
                <li>Учёт клиентов</li>
                <li>Чат-бот WhatsApp</li>
                <li>0 рублей / месяц</li>
              </ul>
              <Button styles={s.default} name="далее" />
            </div>
            <div className="landing__price__cards__card">
              <h3>Стандарт</h3>
              <ul>
                <li>Пять точек</li>
                <li>Учёт клиентов</li>
                <li>Чат-бот WhatsApp</li>
                <li>Чат-бот Telegram</li>
                <li>Рассылка сообщений</li>
                <li>100 рублей / месяц</li>
              </ul>
              <Button styles={s.default} name="далее" />
            </div>
            <div className="landing__price__cards__card">
              <h3>Бизнес</h3>
              <ul>
                <li>Число точек не ограничено</li>
                <li>Учёт клиентов</li>
                <li>Чат-бот WhatsApp</li>
                <li>Чат-бот Telegram</li>
                <li>Рассылка сообщений</li>
                <li>Автоматическая отчётность</li>
                <li>300 рублей / месяц</li>
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

      <section className="landing__about">
        <div className="container">
          <h2>О нас</h2>
        </div>
      </section>

      <section className="landing__testimonials">
        <div className="container">
          <h2>Отзывы клиентов</h2>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sagaCounter: state.test,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlerClick: () => dispatch({ type: "TEST" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
