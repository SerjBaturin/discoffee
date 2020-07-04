import React from "react";
import "./header.scss";
import Logo from "./Logo.svg"

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="header__name">DisCoffee</div>
    </div>
  );
};

export default Header;
