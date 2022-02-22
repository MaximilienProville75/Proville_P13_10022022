import React from "react";
import "../NavBar/NavBar.css";
import logo from "../../assets/argentBankLogo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="mainNav">
      <a className="mainNavLogo" href="./index.html">
        <Link to="/">
          <img className="mainNavLogoImage" src={logo} alt="Argent Bank Logo" />
        </Link>
        <h1 className="srOnly">Argent Bank</h1>
      </a>
      <div>
        <Link to="/login">
          <a className="mainNavItem">
            <FaRegUserCircle />
            Sign In
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
