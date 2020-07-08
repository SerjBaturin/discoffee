import React from "react";
import "./style.scss";

const Admin = () => {
  return (
    <div className="admin">
      <div className="admin__container">
        <h2 className="admin__title">Hello, Admin!</h2>
        <section className="admin__users">
          <h3>Пользаватели</h3>
        </section>
        <section className="admin__charts">
          <h3>Статистика</h3>
        </section>
        <section className="admin__docs">
          <h3>Документация</h3>
        </section>
      </div>
    </div>
  );
};

export default Admin;
