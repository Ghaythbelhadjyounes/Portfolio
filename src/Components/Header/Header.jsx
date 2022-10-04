import React from "react";
import CTA from "./CTA";
import "./header.css";
import profilePhoto from "../../assets/profilePhoto.png";
import HeaderSocial from "./HeaderSocial";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Ghayth Bel Hadj Younes</h1>
        <h5 className="text-light">FullStack JavaScript Developer</h5>
        <CTA />
        <div>
          <img src={profilePhoto} alt="profilePhoto" className="profilePhoto" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocial />
      </div>
    </header>
  );
};

export default Header;
