import React from "react";
import "../user/User.css";

import NavBar from "../../components/NavBar/NavBar";
import CopyRights from "../../components/CopyRights/CopyRights";
import TransactionList from "../../components/TransactionList/TransactionList";
import UserProfil from "../../components/UserProfil/UserProfil";

const User = () => {
  return (
    <>
      <body>
        <NavBar />
        <div className="bgDark main">
          <UserProfil />
          <TransactionList />
        </div>
        <CopyRights />
      </body>
    </>
  );
};

export default User;
