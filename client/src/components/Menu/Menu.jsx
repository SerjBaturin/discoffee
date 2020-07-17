import React from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import "./style.scss";

/**
 * Menu component.
 *
 * @param {boolean} isMenuOpen from props for switching menu className into css
 * @param {boolean} isLogged from props for switching menu items list in menuItemsHandler function
 * @returns {JSX} Menu component
 */
const Menu = ({ isMenuOpen }) => {
  return (
    <div className={`menu ${isMenuOpen ? "menu_open" : "menu_close"}`}>
      <ul className="menu__list">
        <Link to="/" className="menu__list__item">
          Главная
        </Link>
        <Link to="/admin" className="menu__list__item">
          Админ-панель
        </Link>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isMenuOpen: state.toggleMenu,
  };
};

export default connect(mapStateToProps)(Menu);
