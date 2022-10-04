import React from "react";
import "./header.css";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <BsGithub />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <BsFacebook />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocial;
