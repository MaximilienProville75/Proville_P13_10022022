import React, { useState, useEffect, useRef } from "react";
import "./Login.css";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../Redux/actions";
import UserAPI from "../../Redux/Api/api";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const rememberMeRef = useRef();

  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const { token } = state;

  useEffect(() => {
    const storedRememberMe = localStorage.getItem("rememberMe") === "true";
    setRememberMe(storedRememberMe);
    if (storedRememberMe) {
      const storedUserName = localStorage.getItem("userName") || "";
      const storedPassword = localStorage.getItem("userPassword") || "";
      setUserName(storedUserName);
      setUserPassword(storedPassword);
    }
  }, []);

  const handleUsername = (e) => {
    setUserName(e.target.value);
  };

  const handleUserPassword = (e) => {
    setUserPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await new UserAPI({}).logIn({
      email: userName,
      password: userPassword,
    });

    dispatch(actions.loggedIn(data.body.token));
  };

  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked);
  };

  return (
    <>
      {token && <Navigate replace to="/user" />}
      <div className="main bgDark">
        <section className="signInContent">
          <FaRegUserCircle className="signInIcon" />
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="inputWrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                autoComplete={"username"}
                value={userName}
                onChange={handleUsername}
              />
            </div>
            <div className="inputWrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                autoComplete={"current-password"}
                value={userPassword}
                onChange={handleUserPassword}
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={handleRememberMe}
                ref={rememberMeRef}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <button className="signInButton" type="submit">
              Sign In
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default Login;
