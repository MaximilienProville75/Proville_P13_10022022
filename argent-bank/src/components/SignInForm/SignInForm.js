import React from "react";
import "../SignInForm/SignInForm.css";
import { FaRegUserCircle } from "react-icons/fa";

const SignInForm = () => {
  return (
    <div className="main bgDark">
      <section className="signInContent">
        <FaRegUserCircle className="signInIcon" />
        <h1>Sign In</h1>
        <form>
          <div className="inputWrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="inputWrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          {/* <div className="inputRemember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div> */}

          {/* <a href="./user.html" className="signInButton">
            Sign In
          </a> */}

          <button className="signInButton">Sign In</button>
        </form>
      </section>
    </div>
  );
};

export default SignInForm;
