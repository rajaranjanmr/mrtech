import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import MenuIcon from "../../assets/menu.png";
import "./Header.css";

const Header = ({
  handleContactUsClick,
  handleAboutUsClick,
  handleServicesClick,
}) => {
  const [navMenu, setNavMenu] = useState(false);
  const closeMenu = () => setNavMenu(false);

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={Logo} alt="sacrro empowering Logo" />
      </Link>
      <nav className="destop_menu">
        <ul>
          <li
            onClick={() => {
              handleServicesClick();
            }}
          >
            <Link to="/#services">Services</Link>
          </li>
          <li
            onClick={() => {
              handleAboutUsClick();
            }}
          >
            <Link to="/#about">About</Link>
          </li>
          <li
            onClick={() => {
              handleContactUsClick();
            }}
          >
            <Link to="/#contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {navMenu && (
        <nav className="menuOpen">
          <ul>
            <li
              onClick={() => {
                handleServicesClick();
                closeMenu();
              }}
            >
              <Link to="/#services">Services</Link>
            </li>
            <li
              onClick={() => {
                handleAboutUsClick();
                closeMenu();
              }}
            >
              <Link to="/#about">About</Link>
            </li>
            <li
              onClick={() => {
                handleContactUsClick();
                closeMenu();
              }}
            >
              <Link to="/#contact">Contact</Link>
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
