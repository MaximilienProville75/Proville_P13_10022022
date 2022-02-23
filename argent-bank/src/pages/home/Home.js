import React from "react";
import "../home/Home.css";
import { useSelector } from "react-redux";

import NavBar from "../../components/NavBar/NavBar";
import CopyRights from "../../components/CopyRights/CopyRights";
import Hero from "../../components/Hero/Hero";
import FeaturesList from "../../components/FeaturesList/FeaturesList";

const Home = () => {
  const { firstName, lastName } = useSelector((state) => state.user);
  const user = `${firstName} ${lastName}`;

  return (
    <>
      <body>
        <NavBar user={user} />
        <div className="main">
          <Hero />
          <FeaturesList />
        </div>
        <CopyRights />
      </body>
    </>
  );
};

export default Home;
