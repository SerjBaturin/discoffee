import React from "react";
import { connect } from "react-redux";
import "./style.scss";

/**
 * Hamburger icon component.
 * If true or false - we change Hamburger icon className.
 *
 * @param {function} toggleMenu method from props
 * @param {boolean} isMenuOpen className swither
 * @returns {JSX} hamburger icon component
 */
const Hamburger = ({ toggleMenu, isMenuOpen }) => {
  return (
    <div
      onClick={toggleMenu}
      className={`hamburger ${
        isMenuOpen ? "hamburger_open" : "hamburger_close"
      }`}
    >
      <span></span>
      <span></span>
      <span></span>
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
    toggleMenu: () => dispatch({ type: "TOGGLE_MENU" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);
