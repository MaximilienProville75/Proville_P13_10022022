import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import CopyRights from "../../components/CopyRights/CopyRights";
import actions from "../../Redux/actions";
import UserAPI from "../../Redux/Api/api";
import Transaction from "../../components/TransactionList/Transaction/Transaction";
import "./User.css";

const User = () => {
  const token = useSelector((state) => state.token);
  const { firstName, lastName } = useSelector((state) => state.user);
  const user = `${firstName} ${lastName}`;

  const dispatch = useDispatch();

  const [editProfile, setEditProfile] = useState(false);
  const [editedFirstName, setEditedFirstName] = useState("");
  const [editedLastName, setEditedLastName] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const { data } = await new UserAPI({ token }).getProfile();
      dispatch(actions.updatedProfile(data.body));
    };

    if (token) getUser();
  }, [token, dispatch]);

  const handleEditProfile = () => {
    setEditedFirstName(firstName);
    setEditedLastName(lastName);
    setEditProfile(true);
  };

  const handleCancelProfile = () => {
    setEditProfile(false);
  };

  const handleFirstName = (e) => {
    setEditedFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setEditedLastName(e.target.value);
  };

  const handleUpdateUserProfile = async () => {
    const { data } = await new UserAPI({ token }).updateProfile({
      firstName: editedFirstName,
      lastName: editedLastName,
    });
    dispatch(actions.updatedProfile(data.body));
    setEditProfile(false);
  };

  return (
    <>
      <NavBar user={user} />
      <main className="main bg-dark">
        {editProfile ? (
          <div className="mainUserInfos">
            <h1>
              Welcome back
              <br />
              <input
                className="inputWrapper2"
                type="text"
                id="firstName"
                autoComplete={"firstName"}
                value={editedFirstName}
                onChange={handleFirstName}
              />
              <input
                className="inputWrapper2"
                type="text"
                id="lastName"
                autoComplete={"lastName"}
                value={editedLastName}
                onChange={handleLastName}
              />
            </h1>
            <button onClick={handleUpdateUserProfile} className="edit-button2 ">
              Save
            </button>
            <button onClick={handleCancelProfile} className="edit-button2 ">
              Cancel
            </button>
          </div>
        ) : (
          <div className="mainUserInfos">
            <h1>
              Welcome back
              <br />
              {user}
            </h1>
            <button onClick={handleEditProfile} className="edit-button2">
              Edit Name
            </button>
          </div>
        )}
        <h2 className="sr-only">Accounts</h2>
        <Transaction />
      </main>
      <CopyRights />
    </>
  );
};

export default User;
