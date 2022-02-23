import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";

import Home from "../pages/home/Home";
import SignIn from "../pages/signIn/SignIn";
import User from "../pages/user/User";
import Error from "../pages/error/error";

import { useSelector } from "react-redux";

const App = () => {
  const token = useSelector((state) => state.token);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="home" exact element={<Home />} />
        <Route path="signin" exact element={<SignIn />} />
        {token ? (
          <Route path="user" exact element={<User />} />
        ) : (
          <Route path="user" exact element={<Navigate replace to="/" />} />
        )}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
