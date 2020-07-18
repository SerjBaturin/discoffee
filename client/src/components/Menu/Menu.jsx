import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../../redux/actions/common/toggleMenu";
import "./style.scss";

/**
 * Menu component.
 *
 * @param {boolean} isMenuOpen from props for switching menu className into css
 * @param {boolean} isLogged from props for switching menu items list in menuItemsHandler function
 * @returns {JSX} Menu component
 */
const Menu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className={`menu ${isMenuOpen ? "menu_open" : "menu_close"}`}>
      <ul className="menu__list">
        <li className="menu__list__item">
          <Link to="/">Главная</Link>
        </li>
        <li className="menu__list__item">
          <Link to="/admin">Админ-панель</Link>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isMenuOpen: state.toggleMenu,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: () => dispatch(toggleMenu()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
