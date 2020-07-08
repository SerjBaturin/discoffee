import React from "react";
import { connect } from "react-redux";

import Hamburger from "../../common/Hamburger";
import "./header.scss";
import Logo from "./Logo.svg";
import Button from "../../common/Button";
import { s } from "../../common/Button/buttonStyles";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="header__name">DisCoffee</div>
      <Button
        name={props.isLogged.name}
        handler={props.handlerLogin}
        styles={s.primary}
      />
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
