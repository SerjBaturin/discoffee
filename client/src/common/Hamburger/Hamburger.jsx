import React from "react";
import { connect } from "react-redux";
import "./style.scss";

const Hamburger = (props) => {
  return (
    <div onClick={props.toggleMenu} className="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: () => dispatch({ type: "MENU_OPEN"}),
  };
};

export default connect(null, mapDispatchToProps)(Hamburger);
