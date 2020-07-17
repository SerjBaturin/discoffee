import React from "react";
import { connect } from "react-redux";

import Hamburger from "../../common/Hamburger";
import ToggleLanguage from "../ToggleLanguage";
import Logo from "./Logo.svg";
import "./header.scss";

/**
 * Header layout component.
 *
 * @param {object} isLogged from props and from store
 * @param {function} handlerLogin from props dispathing into redux store
 * @returns {JSX} Header component
 */
const Header = ({ user }) => {
  return (
    <div className="header">
      <div className="header__logo">
        <img className="header__logo__img" src={Logo} alt="logo" />
      </div>
      <div className="header__title">DisCoffee</div>
      <h3 className="header__greeting">Привет, {user.name}!</h3>
      <ToggleLanguage />
      <Hamburger />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userSignin,
  };
};

export default connect(mapStateToProps, null)(Header);
