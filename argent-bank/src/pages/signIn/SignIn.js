import React from "react";
import "../signIn/SignIn.css";
import NavBar from "../../components/NavBar/NavBar";
import CopyRights from "../../components/CopyRights/CopyRights";
import SignInForm from "../../components/SignInForm/SignInForm";

const SignIn = () => {
  return (
    <>
      <body>
        <NavBar />

        <SignInForm />

        <CopyRights />
      </body>
    </>
  );
};

export default SignIn;
