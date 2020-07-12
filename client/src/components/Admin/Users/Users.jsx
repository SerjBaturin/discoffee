import React from "react";

import Loader from "../../../common/Loader";
import Statistics from "../Statistics";
import "./style.scss";

const controls = () => (
  <div className="users__controls">
    <span className="users__controls__item">Договор</span>
    <span className="users__controls__item">Стат</span>
    <span className="users__controls__item">Ред</span>
    <span className="users__controls__item">Удалить</span>
  </div>
);

const Users = ({ users }) => {
  return (
    <div className="users">
      <h3 className="users__title">Пользаватели</h3>
      <ul className="users__list">
        {!users ? (
          <Loader />
        ) : (
          users.map((user, i) => (
            <li className="users__list__item" key={user.id}>
              {`${user.name}`}
              {controls()}
            </li>
          ))
        )}
      </ul>
      <Statistics users={users} />
    </div>
  );
};

export default Users;
