import React from "react";
import headerImg from "./images/headerImg.jpg";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={headerImg} alt="" className="header-img img-responsive" />
        <div className="header-text text-light">
          <h2>Computer Engineering</h2>
          <h6>142,756 Computer Engineers to follow this</h6>
        </div>
      </div>
    </>
  );
};

export default Header;
