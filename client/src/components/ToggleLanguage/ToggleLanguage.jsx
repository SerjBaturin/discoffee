import React from "react";
import "./style.scss";

const ToggleLanguage = () => {
  return (
    <div className="toggle-language">
      <span className="toggle-language__location">RU</span>
      <span className="toggle-language__divider">|</span>
      <span className="toggle-language__location">EN</span>
    </div>
  );
};

export default ToggleLanguage;
