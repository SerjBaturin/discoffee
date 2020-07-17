import React from "react";
import "./style.scss";
import Button from "../../common/Button";
import { s } from "../../common/Button/buttonStyles";
import Auth from "../Auth";

/**
 * Landing is a non auth component for all users.
 * It's just a landing with simple html & including other components.
 * @returns {JSX} Landing component
 */
const Landing = () => {
  return (
    <div className="landing">
      <section className="landing__utp">
        <div className="container">
          <div className="landing__utp__wrapper">
            <div className="landing__utp__wrapper__text">
              <h1 className="landing__utp__wrapper__text__title">
                Бонусная система DisCoffee
                <br /> - всегда лояльные клиенты
              </h1>
              <ul className="landing__utp__wrapper__text__subtitle">
                <li>подходит для сетей и отдельных кафе</li>
                <li>чат-бот в WhatsApp и Telegram</li>
                <li>есть бесплатный вариант</li>
                <li>нет привязки к карте</li>
              </ul>
            </div>
            <div className="landing__utp__wrapper__form">
              <Auth />
            </div>
          </div>
        </div>
      </section>
      <section className="landing__price">
        <div className="container">
          <h2 className="landing__section__title">Сколько это стоит</h2>
          <div className="landing__price__cards">
            <div className="landing__price__cards__card">
              <h3 className="landing__price__cards__card__title">Бесплатно</h3>
              <ul className="landing__price__cards__card__list">
                <li>Одна точка</li>
                <li>Учёт клиентов</li>
                <li>Чат-бот WhatsApp</li>
                <li>0 рублей / месяц</li>
              </ul>
              <Button
                className="landing__price__cards__card__button"
                styles={s.default}
                name="далее"
              />
            </div>
            <div className="landing__price__cards__card">
              <h3 className="landing__price__cards__card__title">Стандарт</h3>
              <ul className="landing__price__cards__card__list">
                <li>Пять точек</li>
                <li>Учёт клиентов</li>
                <li>Чат-бот WhatsApp</li>
                <li>Чат-бот Telegram</li>
                <li>Рассылка сообщений</li>
                <li>100 рублей / месяц</li>
              </ul>
              <Button
                className="landing__price__cards__card__button"
                styles={s.default}
                name="далее"
              />
            </div>
            <div className="landing__price__cards__card">
              <h3 className="landing__price__cards__card__title">Бизнес</h3>
              <ul className="landing__price__cards__card__list">
                <li>Число точек не ограничено</li>
                <li>Учёт клиентов</li>
                <li>Чат-бот WhatsApp</li>
                <li>Чат-бот Telegram</li>
                <li>Рассылка сообщений</li>
                <li>Автоматическая отчётность</li>
                <li>300 рублей / месяц</li>
              </ul>
              <Button
                className="landing__price__cards__card__button"
                styles={s.default}
                name="далее"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="landing__how">
        <div className="container">
          <h2 className="landing__section__title">Как это работает</h2>
          <ul className="landing__how__list">
            <li className="landing__how__list__item">Вот так</li>
            <li className="landing__how__list__item">А потом вот так</li>
            <li className="landing__how__list__item">И щё вот так в конце</li>
          </ul>
        </div>
      </section>

      <section className="landing__about">
        <div className="container">
          <h2 className="landing__section__title">О нас</h2>
        </div>
      </section>

      <section className="landing__testimonials">
        <div className="container">
          <h2 className="landing__section__title">Отзывы клиентов</h2>
        </div>
      </section>
    </div>
  );
};

export default Landing;
