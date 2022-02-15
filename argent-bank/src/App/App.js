import "./App.css";
import React from "react";
import { Link, browserHistory, Route, Routes } from "react-router";

import Home from "../pages/home/Home";
import SignIn from "../pages/signIn/SignIn";
import User from "../pages/user/User";

function App() {
  return (
    <>
      <Home />
      <SignIn />
      <User />
    </>
  );
}

export default App;
