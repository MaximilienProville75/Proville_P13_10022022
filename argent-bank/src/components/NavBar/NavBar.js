import React from "react";
import "../NavBar/NavBar.css";
import logo from "../../assets/argentBankLogo.png";
import { FaRegUserCircle } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="mainNav">
      <a className="mainNavLogo" href="./index.html">
        <img className="mainNavLogoImage" src={logo} alt="Argent Bank Logo" />
        <h1 className="srOnly">Argent Bank</h1>
      </a>
      <div>
        <a className="mainNavItem" href="./sign-in.html">
          <FaRegUserCircle />
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
