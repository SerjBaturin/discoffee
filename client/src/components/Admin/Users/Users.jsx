import React from "react";

import Loader from "../../../common/Loader";
import "./style.scss";

const controls = () => (
  <div className="users__controls">
    <span className="users__controls__item">Договор</span>
    <span className="users__controls__item">Стат</span>
    <span className="users__controls__item">Ред</span>
    <span className="users__controls__item">Удалить</span>
  </div>
);

/**
 * Users table component.
 * Management of App clients (entrepreneurs, baristas. etc...).
 *
 * @param {array} users list from props
 * @param {boolean} isLoading from props
 * @returns {JSX} table of users component with preloader
 */
const Users = ({ users, isLoading }) => {
  return (
    <div className="users">
      <h3 className="users__title">Пользаватели</h3>
      <ul className="users__list">
        {isLoading === false ? (
          <Loader />
        ) : (
          users.map((user) => (
            <li className="users__list__item" key={user._id}>
              {`${user.email}`}
              {controls()}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Users;
