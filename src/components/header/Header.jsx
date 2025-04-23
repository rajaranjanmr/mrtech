import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import MenuIcon from "../../assets/menu.png";
import "./Header.css";

const Header = ({
  handleContactUsClick,
  handleAboutUsClick,
  handleServicesClick,
}) => {
  const [navMenu, setNavMenu] = useState(false);

  return (
    <header className="header">
      <a href="#home" className="logo">
        <img src={Logo} alt="sacrro empowering Logo" />
      </a>
      <nav className="destop_menu">
        <ul>
          <li onClick={() => handleServicesClick()}>
            <a href="#services">Services</a>
          </li>
          <li onClick={() => handleAboutUsClick()}>
            <a href="#about">About</a>
          </li>
          <li
            onClick={() => {
              handleContactUsClick();
            }}
          >
            <a>Contact</a>
          </li>
        </ul>
      </nav>
      {navMenu && (
        <nav className="menuOpen">
          <ul>
            <li
              onClick={() => {
                handleServicesClick();
                setNavMenu(!navMenu);
              }}
            >
              <a href="#services">Services</a>
            </li>
            <li
              onClick={() => {
                handleAboutUsClick();
                setNavMenu(!navMenu);
              }}
            >
              <a href="#about">About</a>
            </li>
            <li
              onClick={() => {
                handleContactUsClick();
                setNavMenu(!navMenu);
              }}
            >
              <a>Contact</a>
            </li>
          </ul>
        </nav>
      )}
      <img
        className="menuIcon"
        src={MenuIcon}
        alt="menu"
        onClick={() => {
          setNavMenu(!navMenu);
        }}
      />
    </header>
  );
};

export { Header };
