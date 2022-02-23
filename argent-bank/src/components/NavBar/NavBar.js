import React from "react";
import "../NavBar/NavBar.css";
import logo from "../../assets/argentBankLogo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../Redux/actions";

const NavBar = (props) => {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(actions.loggedOut());
  };

  return (
    <nav className="mainNav">
      <a className="mainNavLogo" href="./index.html">
        <Link to="/">
          <img className="mainNavLogoImage" src={logo} alt="Argent Bank Logo" />
        </Link>
        <h1 className="srOnly">Argent Bank</h1>
      </a>
      <div>
        {token ? (
          <div className="mainNavItem">
            <Link to="/user">
              <div>{props.user}</div>
            </Link>
            <FaSignOutAlt />
            <Link to="/signin" onClick={logOut}>
              Sign Out
            </Link>
          </div>
        ) : (
          <Link to="/signin">
            <a className="mainNavItem">
              <FaRegUserCircle />
              Sign In
            </a>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
