import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, Switch, Link } from "react-router-dom";


import Home from "../pages/home/Home";
import SignIn from "../pages/signIn/SignIn";
import User from "../pages/user/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<SignIn />} />
        <Route path="user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
