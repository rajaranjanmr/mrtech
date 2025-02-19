import React from "react";
import Logo from "../../assets/logo.png";
import "./Header.css";

const Header = ({
  handleContactUsClick,
  handleAboutUsClick,
  handleServicesClick,
}) => {
  return (
    <header className="header">
      <a href="#home" className="logo">
        <img src={Logo} alt="sacrro empowering Logo" />
      </a>
      <nav>
        <ul>
          <li onClick={() => handleServicesClick()}>
            <a href="#services">Services</a>
          </li>
          <li onClick={() => handleAboutUsClick()}>
            <a href="#about">About</a>
          </li>
          <li onClick={() => handleContactUsClick()}>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
