//Dependencies
import React from "react";

//Assets
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div id="header">
      <div className="container-header">
        <div className="sub-container1">
          <img src={logo} alt="Logo" />
        </div>
        <div className="sub-container2">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div className="sub-container3">
          <i className="fa fa-sign-in" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
