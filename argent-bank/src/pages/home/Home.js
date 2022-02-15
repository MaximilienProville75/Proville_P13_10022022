import React from "react";
import "../home/Home.css";

import NavBar from "../../components/NavBar/NavBar";
import CopyRights from "../../components/CopyRights/CopyRights";
import Hero from "../../components/Hero/Hero";
import FeaturesList from "../../components/FeaturesList/FeaturesList";

const Home = () => {
  return (
    <>
      <body>
        <NavBar />
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
