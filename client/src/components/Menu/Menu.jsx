import React from "react";
import { connect } from "react-redux";
import "./style.scss";

const Menu = (props) => {
  return (
    <div className={`menu ${props.isMenuOpen ? "menu_open" : "menu_close"}`}>
      <ul className="menu__list">
        <li className="menu__list__item">First item</li>
        <li className="menu__list__item">Second item</li>
        <li className="menu__list__item">Third item</li>
        <li className="menu__list__item">Fourth item</li>
        <li className="menu__list__item">Fifth item</li>
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
