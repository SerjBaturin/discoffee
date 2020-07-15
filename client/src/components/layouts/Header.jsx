import React from "react";
import { connect } from "react-redux";

import Hamburger from "../../common/Hamburger";
import "./header.scss";
import Logo from "./Logo.svg";
import Button from "../../common/Button";
import { s } from "../../common/Button/buttonStyles";

/**
 * Header layout component.
 *
 * @param {object} isLogged from props and from store
 * @param {function} handlerLogin from props dispathing into redux store
 * @returns {JSX} Header component
 */
const Header = ({ isLogged, handlerLogin }) => {
  return (
    <div className="header">
      <div className="header__logo">
        <img className="header__logo__img" src={Logo} alt="logo" />
      </div>
      <div className="header__name">DisCoffee</div>
      <Button name={isLogged.name} handler={handlerLogin} styles={s.primary} />
      <Hamburger />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogged: state.isLogged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlerLogin: () =>
      dispatch({
        type: "IS_LOGGED",
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
