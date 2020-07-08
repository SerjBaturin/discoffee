import React from "react";
import { connect } from "react-redux";
import "./style.scss";

const userItems = [
  "First item",
  "Second item",
  "Third item",
  "Fourth item",
  "Fifth item",
];

const adminItems = [
  "Admin First item",
  "Admin Second item",
  "Admin Third item",
  "Admin Fourth item",
  "Admin Fifth item",
];

const menuItemsHandler = (menuItems) =>
  menuItems.map((item, i) => (
    <li className="menu__list__item" key={i}>
      {item}
    </li>
  ));

const Menu = ({ isMenuOpen, isLogged }) => {
  return (
    <div className={`menu ${isMenuOpen ? "menu_open" : "menu_close"}`}>
      <ul className="menu__list">
        {isLogged === true
          ? menuItemsHandler(adminItems)
          : menuItemsHandler(userItems)}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isMenuOpen: state.toggleMenu,
    isLogged: state.isLogged.isLogged,
  };
};

export default connect(mapStateToProps)(Menu);
