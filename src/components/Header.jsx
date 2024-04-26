/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import "../styles/components/Header.css";
import React from "react";

const Header = () => {
  return (
    <header >

      <h1 className="title">Eve's Reactfolio</h1>
      <nav>
        <ul>
          <li>
            <a href="#proyects">Proyects</a>
          </li>
          <li>
            <a href="#sobre-mi">About me</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
