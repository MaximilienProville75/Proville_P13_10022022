import React from "react";
import "../UserProfil/UserProfil.css";

const UserProfil = () => {
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        Tony Jarvis!
      </h1>
      <button class="editButton">Edit Name</button>
    </div>
  );
};

export default UserProfil;
