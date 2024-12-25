import React from "react";
import "./Header.css"; // Optional, for styling

const Header = () => {
  return (
    <header className="header">
      <a href="#home" className="logo">
        <img src="/src/assets/logo.png" alt="MR Tech Logo" />
      </a>
      {/* <nav>
        <ul>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav> */}
    </header>
  );
};

export { Header };
