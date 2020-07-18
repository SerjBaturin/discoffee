import React from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img className="header__logo__img" src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="header__title">DisCoffee</div>
      <h3 className="header__greeting">Привет, friend!</h3>
      <ToggleLanguage />
      <Hamburger />
    </div>
  );
};


export default Header
