import React from "react";
import "../signIn/SignIn.css";
import NavBar from "../../components/NavBar/NavBar";
import CopyRights from "../../components/CopyRights/CopyRights";
import Login from "../../components/Login/Login";

const SignIn = () => {
  return (
    <>
      <body>
        <NavBar />

        <Login />

        <CopyRights />
      </body>
    </>
  );
};

export default SignIn;
