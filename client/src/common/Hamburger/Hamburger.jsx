import React from "react";
import { connect } from "react-redux";
import "./style.scss";
import menuToggle from "../../redux/actions/menuToggle";

const Hamburger = (props) => {
  return (
    <div
      onClick={props.toggleMenu}
      className={`hamburger ${
        props.isMenuOpen ? "hamburger_open" : "hamburger_close"
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
    toggleMenu: () => dispatch(menuToggle()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);
