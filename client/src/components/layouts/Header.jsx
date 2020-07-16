import React from "react";
import { connect } from "react-redux";

import Hamburger from "../../common/Hamburger";
import Button from "../../common/Button";
import ToggleLanguage from "../ToggleLanguage";
import { s } from "../../common/Button/buttonStyles";
import Logo from "./Logo.svg";
import "./header.scss";

/**
 * Header layout component.
 *
 * @param {object} isLogged from props and from store
 * @param {function} handlerLogin from props dispathing into redux store
 * @returns {JSX} Header component
 */
const Header = ({ user, isLogged, handlerLogin }) => {
  return (
    <div className="header">
      <div className="header__logo">
        <img className="header__logo__img" src={Logo} alt="logo" />
      </div>
      <div className="header__title">DisCoffee</div>
      <Button name={isLogged.name} handler={handlerLogin} styles={s.primary} />
      <h3 className="header__greeting">Привет, {user.name}!</h3>
      <ToggleLanguage />
      <Hamburger />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogged: state.isLogged,
    user: state.userSignin,
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
