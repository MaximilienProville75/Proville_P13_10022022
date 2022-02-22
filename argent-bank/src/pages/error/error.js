import React from "react";
import LogoBank from "../../assets/argentBankLogo.png";
import "./error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="errorComplex">
      <img src={LogoBank} alt="Argent Bank Logo" className="logoError" />
      <h1 className="errorText">
        404 <br />
        This page does not exist
      </h1>
      <Link to="home">
        <a className="returnError">Return Home Page</a>
      </Link>
    </div>
  );
};

export default Error;
