import React from "react";
import "../NavBar/NavBar.css";

const NavBar = () => {
  return (
    <nav class="mainNav">
      <a class="mainNavLogo" href="./index.html">
        <img
          class="mainNavLogoImage"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 class="srOnly">Argent Bank</h1>
      </a>
      <div>
        <a class="mainNavItem" href="./sign-in.html">
          <i class="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
